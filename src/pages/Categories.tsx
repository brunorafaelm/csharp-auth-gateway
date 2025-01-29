import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Plus, Pencil, Trash } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link, useNavigate } from "react-router-dom"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { supabase } from "@/integrations/supabase/client"
import { useToast } from "@/components/ui/use-toast"

interface Category {
  id: string
  name: string
  description: string
}

export default function Categories() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { toast } = useToast()
  const [isDeleting, setIsDeleting] = useState(false)

  const { data: categories, refetch } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
      
      if (error) throw error
      return data as Category[]
    },
  })

  const handleDelete = async (id: string) => {
    try {
      setIsDeleting(true)
      const { error } = await supabase
        .from('categories')
        .delete()
        .eq('id', id)

      if (error) throw error

      toast({
        title: "Categoria excluída com sucesso!",
      })
      refetch()
    } catch (error) {
      console.error("Error deleting category:", error)
      toast({
        variant: "destructive",
        title: "Erro ao excluir categoria",
        description: "Por favor, tente novamente.",
      })
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full flex-col">
        <Header />
        <div className="flex flex-1">
          <AppSidebar />
          <main className="flex-1 p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Categorias</h1>
              <div className="flex gap-2">
                <Button onClick={() => navigate("/categories/create")}>
                  <Plus className="h-4 w-4 mr-2" />
                  Novo
                </Button>
                <SidebarTrigger />
              </div>
            </div>

            <div className="mt-8">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Descrição</TableHead>
                      <TableHead className="w-[100px]">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {categories?.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={3} className="text-center">
                          Nenhuma categoria encontrada
                        </TableCell>
                      </TableRow>
                    ) : (
                      categories?.map((category) => (
                        <TableRow key={category.id}>
                          <TableCell>{category.name}</TableCell>
                          <TableCell>{category.description}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => navigate(`/categories/edit/${category.id}`)}
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-destructive"
                                disabled={isDeleting}
                                onClick={() => handleDelete(category.id)}
                              >
                                <Trash className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
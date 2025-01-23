import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Plus, Pencil, Trash } from "lucide-react"
import { useTranslation } from "react-i18next"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { supabase } from "@/integrations/supabase/client"

interface Product {
  id: string
  code: string
  description: string
  category_id: string
  price: number
  category: {
    name: string
  }
}

export default function Products() {
  const { t } = useTranslation()
  const [isEditing, setIsEditing] = useState(false)

  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          category:categories(name)
        `)
      
      if (error) throw error
      return data as Product[]
    },
  })

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full flex-col">
        <div className="flex flex-1">
          <AppSidebar />
          <main className="flex-1 p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">{t('menu.products')}</h1>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setIsEditing(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  {t('actions.new')}
                </Button>
                <SidebarTrigger />
              </div>
            </div>

            <div className="mt-8">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Código</TableHead>
                      <TableHead>Descrição</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Preço</TableHead>
                      <TableHead className="w-[100px]">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {isLoading ? (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center">
                          Carregando...
                        </TableCell>
                      </TableRow>
                    ) : products?.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center">
                          Nenhum produto encontrado
                        </TableCell>
                      </TableRow>
                    ) : (
                      products?.map((product) => (
                        <TableRow key={product.id}>
                          <TableCell>{product.code}</TableCell>
                          <TableCell>{product.description}</TableCell>
                          <TableCell>{product.category?.name}</TableCell>
                          <TableCell>
                            {new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency: 'BRL'
                            }).format(product.price)}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsEditing(true)}
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-destructive"
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
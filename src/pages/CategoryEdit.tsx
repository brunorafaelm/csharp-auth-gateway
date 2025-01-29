import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { CategoryForm } from "@/components/CategoryForm"
import { Header } from "@/components/Header"
import { supabase } from "@/integrations/supabase/client"

export default function CategoryEdit() {
  const { id } = useParams()

  const { data: category } = useQuery({
    queryKey: ['category', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('id', id)
        .single()
      
      if (error) throw error
      return data
    },
  })

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full flex-col">
        <Header />
        <div className="flex flex-1">
          <AppSidebar />
          <main className="flex-1 p-6">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold">Editar Categoria</h1>
              <SidebarTrigger />
            </div>
            {category && <CategoryForm initialData={category} />}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
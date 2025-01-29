import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { ProductForm } from "@/components/ProductForm"

export default function ProductCreate() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full flex-col">
        <div className="flex flex-1">
          <AppSidebar />
          <main className="flex-1 p-6">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold">Novo Produto</h1>
              <SidebarTrigger />
            </div>
            <ProductForm />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
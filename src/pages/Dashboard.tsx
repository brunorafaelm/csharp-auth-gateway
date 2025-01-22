import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Header } from "@/components/Header"

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full flex-col">
        <Header />
        <div className="flex flex-1">
          <AppSidebar />
          <main className="flex-1 p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <SidebarTrigger />
            </div>
            <div className="mt-8">
              <p>Bem-vindo ao seu CRM!</p>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
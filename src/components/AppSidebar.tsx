import { Building2, Home, Package, Users, Boxes, Building, Factory, ChevronDown } from "lucide-react"
import { useTranslation } from "react-i18next"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AppSidebar() {
  const { t } = useTranslation()

  const menuItems = [
    { title: t('menu.dashboard'), icon: Home, url: "/dashboard" },
  ]

  const recordsItems = [
    { title: t('menu.products'), icon: Package, url: "/products" },
    { title: t('menu.categories'), icon: Boxes, url: "/categories" },
    { title: t('menu.company'), icon: Building, url: "/company" },
    { title: t('menu.clients'), icon: Users, url: "/clients" },
    { title: t('menu.suppliers'), icon: Factory, url: "/suppliers" },
  ]

  return (
    <Sidebar className="bg-[#f3f3f3] dark:bg-gray-800">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <Accordion type="single" collapsible>
            <AccordionItem value="records">
              <AccordionTrigger className="px-2">
                <span className="flex items-center gap-2">
                  <ChevronDown className="h-4 w-4" />
                  {t('menu.records')}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <SidebarMenu>
                  {recordsItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild tooltip={item.title}>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
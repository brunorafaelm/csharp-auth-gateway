import { Globe } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ThemeToggle } from "./ThemeToggle"

export function Header() {
  const handleLanguageChange = (value: string) => {
    console.log("Language changed to:", value)
    // Aqui você implementaria a lógica de mudança de idioma
  }

  return (
    <header className="border-b bg-background">
      <div className="flex h-16 items-center px-4 gap-4">
        <div className="flex-1">
          <img
            src="/placeholder.svg"
            alt="Logo"
            className="h-8 w-auto dark:invert"
          />
        </div>

        <Select onValueChange={handleLanguageChange} defaultValue="pt">
          <SelectTrigger className="w-[120px]">
            <Globe className="mr-2 h-4 w-4" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pt">Português</SelectItem>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="es">Español</SelectItem>
          </SelectContent>
        </Select>

        <ThemeToggle />
      </div>
    </header>
  )
}
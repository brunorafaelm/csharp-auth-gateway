import { Flag, Globe } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ThemeToggle } from "./ThemeToggle"
import { useTranslation } from "react-i18next"

export function Header() {
  const { i18n } = useTranslation()

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value)
  }

  return (
    <header className="border-b bg-[#f3f3f3] dark:bg-gray-800">
      <div className="flex h-16 items-center px-4 gap-4">
        <div className="flex-1">
          <img
            src="/logo.svg"
            alt="Company Logo"
            className="h-8 w-auto dark:invert"
          />
        </div>

        <Select onValueChange={handleLanguageChange} defaultValue={i18n.language}>
          <SelectTrigger className="w-[120px]">
            <Globe className="mr-2 h-4 w-4" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pt" className="flex items-center gap-2">
              <Flag className="h-4 w-4 text-green-600" />
              BR
            </SelectItem>
            <SelectItem value="en" className="flex items-center gap-2">
              <Flag className="h-4 w-4 text-blue-600" />
              US
            </SelectItem>
            <SelectItem value="es" className="flex items-center gap-2">
              <Flag className="h-4 w-4 text-yellow-600" />
              ES
            </SelectItem>
          </SelectContent>
        </Select>

        <ThemeToggle />
      </div>
    </header>
  )
}
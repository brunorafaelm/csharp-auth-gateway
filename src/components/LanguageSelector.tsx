import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: "pt", flag: "🇧🇷", name: "Português" },
    { code: "en", flag: "🇺🇸", name: "English" },
    { code: "es", flag: "🇪🇸", name: "Español" },
  ];

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <Select value={i18n.language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[120px]">
        <SelectValue>
          {languages.find((lang) => lang.code === i18n.language)?.flag || "🌐"}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem key={language.code} value={language.code}>
            {language.flag} {language.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
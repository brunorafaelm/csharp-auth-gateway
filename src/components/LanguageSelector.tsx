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
    { code: "pt", flag: "PT", name: "Português" },
    { code: "en", flag: "EN", name: "English" },
    { code: "es", flag: "ES", name: "Español" },
  ];

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  const currentLanguage = languages.find((lang) => lang.code === i18n.language);

  return (
    <Select value={i18n.language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[120px]">
        <SelectValue>
          <span className="flex items-center gap-2">
            <span className="font-medium">{currentLanguage?.flag}</span>
            <span>{currentLanguage?.name}</span>
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem key={language.code} value={language.code}>
            <span className="flex items-center gap-2">
              <span className="font-medium">{language.flag}</span>
              <span>{language.name}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
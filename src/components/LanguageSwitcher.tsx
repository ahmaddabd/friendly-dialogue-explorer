import { useState, useEffect, createContext, useContext } from 'react';
import { Button } from "@/components/ui/button";
import { Globe } from 'lucide-react';

type LanguageContextType = {
  lang: 'ar' | 'en';
  setLang: (lang: 'ar' | 'en') => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'ar',
  setLang: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  const toggleLang = () => {
    const newLang = lang === 'ar' ? 'en' : 'ar';
    setLang(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLang}
      className="flex items-center gap-2"
    >
      <Globe className="h-4 w-4" />
      <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
    </Button>
  );
};
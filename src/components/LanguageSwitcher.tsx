import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  useEffect(() => {
    // Set initial direction and language
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'ar' ? 'en' : 'ar';
    setLang(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
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
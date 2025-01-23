import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  const toggleLang = () => {
    setLang(lang === 'ar' ? 'en' : 'ar');
    document.documentElement.dir = lang === 'ar' ? 'ltr' : 'rtl';
    document.documentElement.lang = lang === 'ar' ? 'en' : 'ar';
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
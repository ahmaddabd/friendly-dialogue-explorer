import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from './LanguageSwitcher';

export const Navigation = () => {
  const { lang } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors">
              {lang === 'ar' ? "دكان تك" : "Dukan Tech"}
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a 
                href="#features" 
                className="text-gray-600 hover:text-green-600 text-lg font-medium transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-green-600 hover:after:w-full after:transition-all"
              >
                {lang === 'ar' ? "المميزات" : "Features"}
              </a>
              <a 
                href="#pricing" 
                className="text-gray-600 hover:text-green-600 text-lg font-medium transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-green-600 hover:after:w-full after:transition-all"
              >
                {lang === 'ar' ? "الأسعار" : "Pricing"}
              </a>
              <a 
                href="#contact" 
                className="text-gray-600 hover:text-green-600 text-lg font-medium transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-green-600 hover:after:w-full after:transition-all"
              >
                {lang === 'ar' ? "تواصل معنا" : "Contact Us"}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <LanguageSwitcher />
            <Button 
              variant="ghost" 
              className="text-base font-medium hover:text-green-600 hover:bg-green-50"
            >
              {lang === 'ar' ? "تسجيل دخول" : "Sign In"}
            </Button>
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-base font-medium px-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {lang === 'ar' ? "ابدأ الآن" : "Get Started"}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
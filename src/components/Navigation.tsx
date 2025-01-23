import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-bold text-green-600">دكان تك</a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-gray-600 hover:text-green-600">المميزات</a>
              <a href="#pricing" className="text-gray-600 hover:text-green-600">الأسعار</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600">تواصل معنا</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button variant="ghost">تسجيل دخول</Button>
            <Button>ابدأ الآن</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
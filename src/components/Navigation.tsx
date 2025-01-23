import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from './LanguageSwitcher';
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navigation = () => {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#features", labelAr: "المميزات", labelEn: "Features" },
    { href: "#pricing", labelAr: "الأسعار", labelEn: "Pricing" },
    { href: "#contact", labelAr: "تواصل معنا", labelEn: "Contact Us" },
  ];

  const MenuItem = ({ href, labelAr, labelEn }: { href: string; labelAr: string; labelEn: string }) => (
    <a 
      href={href} 
      className="text-gray-600 hover:text-green-600 text-lg font-medium transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-green-600 hover:after:w-full after:transition-all"
      onClick={() => setIsOpen(false)}
    >
      {lang === 'ar' ? labelAr : labelEn}
    </a>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-bold text-green-600 hover:text-green-700 transition-colors">
            {lang === 'ar' ? "دكان تك" : "Dukan Tech"}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <MenuItem key={item.href} {...item} />
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 md:gap-6">
            <LanguageSwitcher />
            
            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link to="/login">
                <Button 
                  variant="ghost" 
                  className="text-base font-medium hover:text-green-600 hover:bg-green-50"
                >
                  {lang === 'ar' ? "تسجيل دخول" : "Sign In"}
                </Button>
              </Link>
              <Link to="/register">
                <Button 
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-base font-medium px-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {lang === 'ar' ? "ابدأ الآن" : "Get Started"}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="md:hidden"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side={lang === 'ar' ? 'right' : 'left'} className="w-[300px] sm:w-[350px] p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6">
                    <div className="space-y-6">
                      {menuItems.map((item) => (
                        <MenuItem key={item.href} {...item} />
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto p-6 border-t space-y-4">
                    <Link to="/login" className="block w-full">
                      <Button 
                        variant="ghost" 
                        className="w-full justify-center text-base font-medium hover:text-green-600 hover:bg-green-50"
                      >
                        {lang === 'ar' ? "تسجيل دخول" : "Sign In"}
                      </Button>
                    </Link>
                    <Link to="/register" className="block w-full">
                      <Button 
                        className="w-full justify-center bg-green-600 hover:bg-green-700 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {lang === 'ar' ? "ابدأ الآن" : "Get Started"}
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
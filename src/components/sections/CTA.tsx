import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const CTA = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-green-500 to-green-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">
            {lang === 'ar' 
              ? "ابدأ رحلتك في التجارة الإلكترونية اليوم"
              : "Start Your E-commerce Journey Today"
            }
          </h2>
          <p className="text-xl mb-8 text-green-50">
            {lang === 'ar'
              ? "انضم إلى آلاف التجار الناجحين واستفد من خدماتنا المتكاملة"
              : "Join thousands of successful merchants and benefit from our integrated services"
            }
          </p>
          <Link to="/register">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-green-600 hover:bg-green-50 text-lg group transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              {lang === 'ar' ? "سجل الآن مجاناً" : "Register Now for Free"}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
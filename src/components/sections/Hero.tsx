import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Link } from "react-router-dom";

export const Hero = () => {
  const { lang } = useLanguage();
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block animate-fade-in">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 hover:bg-green-200 transition-colors duration-300">
              <Sparkles className="w-4 h-4 mr-2" />
              {lang === 'ar' ? "متاح الآن في سوريا" : "Now available in Syria"}
              <CheckCircle2 className="w-4 h-4 ml-2" />
            </span>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <span className="block mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
              {lang === 'ar' ? "منصة متكاملة لإدارة متجرك الإلكتروني" : "Complete Platform for Your E-commerce Store"}
            </span>
            <span className="text-2xl text-gray-600 font-normal">
              {lang === 'ar' ? "ابدأ تجارتك الإلكترونية اليوم" : "Start Your E-commerce Journey Today"}
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "400ms" }}>
            {lang === 'ar' 
              ? "نقدم لك حلولاً متكاملة لإدارة متجرك بكفاءة عالية وأمان تام، مع دعم فني على مدار الساعة"
              : "We provide comprehensive solutions to manage your store efficiently and securely, with 24/7 technical support"
            }
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Link to="/register">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {lang === 'ar' ? "ابدأ الآن مجاناً" : "Start Now for Free"}
                <Arrow className="mr-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg border-2 hover:border-green-600 hover:text-green-600 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {lang === 'ar' ? "تواصل مع المبيعات" : "Contact Sales"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/LanguageSwitcher";

export const Hero = () => {
  const { lang } = useLanguage();
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <CheckCircle2 className="w-4 h-4 ml-2" />
              {lang === 'ar' ? "متاح الآن في سوريا" : "Now available in Syria"}
            </span>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900">
            <span className="block mb-4">
              {lang === 'ar' ? "منصة متكاملة لإدارة متجرك الإلكتروني" : "Complete Platform for Your E-commerce Store"}
            </span>
            <span className="text-2xl text-gray-600 font-normal">
              {lang === 'ar' ? "ابدأ تجارتك الإلكترونية اليوم" : "Start Your E-commerce Journey Today"}
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {lang === 'ar' 
              ? "نقدم لك حلولاً متكاملة لإدارة متجرك بكفاءة عالية وأمان تام، مع دعم فني على مدار الساعة"
              : "We provide comprehensive solutions to manage your store efficiently and securely, with 24/7 technical support"
            }
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg">
              {lang === 'ar' ? "ابدأ الآن مجاناً" : "Start Now for Free"}
              <Arrow className="mr-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              {lang === 'ar' ? "تواصل مع المبيعات" : "Contact Sales"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Store, ShoppingBag, Rocket } from "lucide-react";
import { useLanguage } from '@/components/LanguageSwitcher';
import { Link } from "react-router-dom";

export const Hero = () => {
  const { lang } = useLanguage();
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  const steps = [
    {
      icon: Store,
      titleAr: "أنشئ متجرك",
      titleEn: "Create Store",
      descriptionAr: "سجل حساب جديد وأنشئ متجرك في دقائق",
      descriptionEn: "Register and create your store in minutes"
    },
    {
      icon: ShoppingBag,
      titleAr: "أضف منتجاتك",
      titleEn: "Add Products",
      descriptionAr: "أضف منتجاتك وصورها وأسعارها بسهولة",
      descriptionEn: "Add your products, images and prices easily"
    },
    {
      icon: Rocket,
      titleAr: "ابدأ البيع",
      titleEn: "Start Selling",
      descriptionAr: "ابدأ في استقبال الطلبات وإدارة مبيعاتك",
      descriptionEn: "Start receiving orders and manage your sales"
    }
  ];

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
                className="bg-green-600 hover:bg-green-700 text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
              >
                {lang === 'ar' ? "ابدأ الآن مجاناً" : "Start Now for Free"}
                <Arrow className="mr-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg border-2 hover:border-green-600 hover:text-green-600 transition-all duration-300 w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {lang === 'ar' ? "تواصل مع المبيعات" : "Contact Sales"}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${(index + 4) * 200}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {lang === 'ar' ? step.titleAr : step.titleEn}
                  </h3>
                  <p className="text-gray-600">
                    {lang === 'ar' ? step.descriptionAr : step.descriptionEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
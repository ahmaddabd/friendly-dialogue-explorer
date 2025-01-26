import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Store, ShoppingBag, Rocket } from "lucide-react";
import { useLanguage } from '@/components/LanguageSwitcher';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Hero = () => {
  const { lang } = useLanguage();
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  const features = [
    {
      icon: Store,
      titleAr: "متجر احترافي",
      titleEn: "Professional Store",
      descriptionAr: "ابدأ متجرك الإلكتروني في دقائق",
      descriptionEn: "Start your online store in minutes"
    },
    {
      icon: ShoppingBag,
      titleAr: "إدارة المبيعات",
      titleEn: "Sales Management",
      descriptionAr: "تتبع وإدارة مبيعاتك بسهولة",
      descriptionEn: "Track and manage your sales easily"
    },
    {
      icon: Rocket,
      titleAr: "نمو سريع",
      titleEn: "Fast Growth",
      descriptionAr: "أدوات تسويقية متكاملة لنمو متجرك",
      descriptionEn: "Integrated marketing tools for growth"
    }
  ];

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Shami-inspired background patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/arabesque-pattern.svg')] opacity-5" />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-br from-amber-100/30 via-amber-50/20 to-transparent rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-0 -right-4 w-96 h-96 bg-gradient-to-bl from-green-100/30 via-green-50/20 to-transparent rounded-full mix-blend-multiply filter blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge with basket-inspired design */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="inline-flex items-center px-6 py-3 rounded-2xl text-sm font-medium bg-gradient-to-r from-amber-50 to-green-50 text-green-800 border border-amber-100/50 shadow-inner hover:shadow-md transition-all duration-300">
              <Sparkles className="w-4 h-4 mr-2" />
              {lang === 'ar' ? "متاح الآن في سوريا" : "Now available in Syria"}
              <CheckCircle2 className="w-4 h-4 ml-2" />
            </span>
          </motion.div>
          
          {/* Main heading with decorative elements */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-8 bg-[url('/arabesque-border.svg')] opacity-20" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              <span className="block mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-green-700">
                {lang === 'ar' 
                  ? "أنشئ متجرك الإلكتروني بسهولة" 
                  : "Create Your Online Store Easily"}
              </span>
              <span className="text-2xl md:text-3xl text-gray-600 font-normal mt-4 block">
                {lang === 'ar' 
                  ? "ابدأ البيع عبر الإنترنت في دقائق معدودة" 
                  : "Start Selling Online in Minutes"}
              </span>
            </h1>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-8 bg-[url('/arabesque-border.svg')] opacity-20 transform rotate-180" />
          </motion.div>
          
          {/* Description with basket-inspired background */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto p-6 rounded-2xl bg-gradient-to-br from-amber-50/50 via-white to-green-50/50 border border-amber-100/20 shadow-inner"
          >
            {lang === 'ar' 
              ? "منصة متكاملة لإنشاء وإدارة متجرك الإلكتروني بسهولة وأمان، مع حلول دفع متعددة ودعم فني على مدار الساعة"
              : "A complete platform to create and manage your online store easily and securely, with multiple payment solutions and 24/7 technical support"
            }
          </motion.p>

          {/* CTA Buttons with Shami-inspired design */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
          >
            <Link to="/register">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-600 to-green-600 hover:from-amber-700 hover:to-green-700 text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <span className="relative flex items-center">
                  {lang === 'ar' ? "ابدأ الآن مجاناً" : "Start Now for Free"}
                  <Arrow className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg border-2 border-amber-200 hover:border-green-600 hover:text-green-600 transition-all duration-300 w-full sm:w-auto bg-white/80 backdrop-blur-sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {lang === 'ar' ? "تواصل معنا" : "Contact Us"}
            </Button>
          </motion.div>

          {/* Features Grid with basket-inspired cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-green-100/50 rounded-2xl transform transition-transform group-hover:scale-105 duration-300" />
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-amber-100/20 shadow-inner hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-green-100 rounded-xl flex items-center justify-center transform transition-transform group-hover:scale-110 duration-300 shadow-inner">
                      <feature.icon className="w-8 h-8 text-amber-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {lang === 'ar' ? feature.titleAr : feature.titleEn}
                    </h3>
                    <p className="text-gray-600">
                      {lang === 'ar' ? feature.descriptionAr : feature.descriptionEn}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
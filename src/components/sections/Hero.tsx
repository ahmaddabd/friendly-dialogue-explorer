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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-50" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-0 -left-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-0 -right-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 hover:bg-green-200 transition-colors duration-300">
              <Sparkles className="w-4 h-4 mr-2" />
              {lang === 'ar' ? "متاح الآن في سوريا" : "Now available in Syria"}
              <CheckCircle2 className="w-4 h-4 ml-2" />
            </span>
          </motion.div>
          
          {/* Main heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
          >
            <span className="block mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
              {lang === 'ar' 
                ? "أنشئ متجرك الإلكتروني بسهولة" 
                : "Create Your Online Store Easily"}
            </span>
            <span className="text-2xl md:text-3xl text-gray-600 font-normal mt-4 block">
              {lang === 'ar' 
                ? "ابدأ البيع عبر الإنترنت في دقائق معدودة" 
                : "Start Selling Online in Minutes"}
            </span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            {lang === 'ar' 
              ? "منصة متكاملة لإنشاء وإدارة متجرك الإلكتروني بسهولة وأمان، مع حلول دفع متعددة ودعم فني على مدار الساعة"
              : "A complete platform to create and manage your online store easily and securely, with multiple payment solutions and 24/7 technical support"
            }
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
          >
            <Link to="/register">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto group"
              >
                {lang === 'ar' ? "ابدأ الآن مجاناً" : "Start Now for Free"}
                <Arrow className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg border-2 hover:border-green-600 hover:text-green-600 transition-all duration-300 w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {lang === 'ar' ? "تواصل معنا" : "Contact Us"}
            </Button>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {lang === 'ar' ? feature.titleAr : feature.titleEn}
                  </h3>
                  <p className="text-gray-600">
                    {lang === 'ar' ? feature.descriptionAr : feature.descriptionEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
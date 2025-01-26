import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Store, ShoppingBag, Rocket, Star } from "lucide-react";
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
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Enhanced Syrian-inspired decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-amber-50">
        <div className="absolute inset-0 bg-[url('/arabesque-pattern.svg')] opacity-5" />
        
        {/* Animated geometric patterns */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            style={{
              background: `radial-gradient(circle at center, ${
                i === 0 ? 'rgba(251, 191, 36, 0.4)' :
                i === 1 ? 'rgba(217, 119, 6, 0.3)' :
                i === 2 ? 'rgba(180, 83, 9, 0.2)' :
                i === 3 ? 'rgba(146, 64, 14, 0.2)' :
                'rgba(120, 53, 15, 0.1)'
              }, transparent)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Enhanced badge with basket-inspired design */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="inline-flex items-center px-8 py-4 rounded-full text-base font-medium bg-gradient-to-r from-amber-500/10 via-amber-600/20 to-amber-500/10 text-amber-800 border border-amber-200 shadow-inner hover:shadow-md transition-all duration-300 backdrop-blur-sm">
              <Star className="w-5 h-5 mr-2 text-amber-600 animate-pulse" />
              {lang === 'ar' ? "متاح الآن في سوريا" : "Now available in Syria"}
              <CheckCircle2 className="w-5 h-5 ml-2 text-amber-600" />
            </span>
          </motion.div>
          
          {/* Enhanced main heading with decorative elements */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-12 bg-[url('/arabesque-border.svg')] opacity-20 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900">
                {lang === 'ar' 
                  ? "أنشئ متجرك الإلكتروني" 
                  : "Create Your Online Store"}
              </span>
              <span className="text-2xl md:text-3xl text-amber-800/80 font-normal mt-6 block">
                {lang === 'ar' 
                  ? "ابدأ البيع عبر الإنترنت في دقائق معدودة" 
                  : "Start Selling Online in Minutes"}
              </span>
            </h1>
          </motion.div>

          {/* Enhanced CTA Buttons with Syrian-inspired design */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-6 pt-8"
          >
            <Link to="/register">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-lg px-8 py-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto group relative overflow-hidden rounded-2xl"
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
                <span className="relative flex items-center text-xl">
                  <Sparkles className="w-6 h-6 mr-2 animate-pulse" />
                  {lang === 'ar' ? "ابدأ الآن مجاناً" : "Start Now for Free"}
                  <Arrow className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
          </motion.div>

          {/* Enhanced Features Grid with basket-inspired cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-amber-50/50 rounded-3xl transform transition-transform group-hover:scale-105 duration-300" />
                <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-amber-200/30 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl flex items-center justify-center transform transition-transform group-hover:scale-110 duration-300 shadow-inner">
                      <feature.icon className="w-10 h-10 text-amber-700" />
                    </div>
                    <h3 className="text-2xl font-semibold text-amber-900">
                      {lang === 'ar' ? feature.titleAr : feature.titleEn}
                    </h3>
                    <p className="text-amber-800/80">
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
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Sparkles, ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const CTA = () => {
  const { lang } = useLanguage();
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-green-500 to-green-600 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, -50, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            <Star className="w-8 h-8 text-white/10" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            {lang === 'ar' 
              ? "ابدأ رحلتك في التجارة الإلكترونية اليوم"
              : "Start Your E-commerce Journey Today"
            }
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl mb-8 text-green-50"
          >
            {lang === 'ar'
              ? "انضم إلى آلاف التجار الناجحين واستفد من خدماتنا المتكاملة"
              : "Join thousands of successful merchants and benefit from our integrated services"
            }
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/register">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-green-600 hover:bg-green-50 text-lg group transform transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-200/0 via-green-200/30 to-green-200/0"
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
                  <Sparkles className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  {lang === 'ar' ? "سجل الآن مجاناً" : "Register Now for Free"}
                  <Arrow className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
          </motion.div>

          {/* Features list */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-green-50/90"
          >
            {[
              { ar: "سهل الاستخدام", en: "Easy to Use" },
              { ar: "دعم فني على مدار الساعة", en: "24/7 Support" },
              { ar: "أدوات تسويق متكاملة", en: "Marketing Tools" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                className="flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'ar' ? feature.ar : feature.en}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
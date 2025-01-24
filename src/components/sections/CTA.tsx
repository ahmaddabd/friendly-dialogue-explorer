import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Sparkles, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const CTA = () => {
  const { lang } = useLanguage();
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-green-500 to-green-600 text-white relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('/placeholder.svg')]"
      />
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
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
              <Arrow className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
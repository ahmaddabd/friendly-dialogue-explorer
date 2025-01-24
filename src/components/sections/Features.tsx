import { content } from "@/config/content";
import { FeatureCard } from "@/components/FeatureCard";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Features = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-white via-green-50/50 to-white"
      />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Section badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            {lang === 'ar' ? "مميزات المنصة" : "Platform Features"}
          </div>
          
          {/* Section title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
            {lang === 'ar' 
              ? "كل ما تحتاجه لإدارة متجرك بنجاح" 
              : "Everything You Need to Manage Your Store Successfully"
            }
          </h2>
          
          {/* Section description */}
          <p className="text-xl text-gray-600">
            {lang === 'ar' 
              ? "مجموعة متكاملة من الأدوات لمساعدتك في إدارة وتنمية تجارتك الإلكترونية"
              : "A complete set of tools to help you manage and grow your e-commerce business"
            }
          </p>
        </motion.div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {content.features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="animate-fade-in"
            >
              <FeatureCard
                icon={feature.icon}
                titleAr={feature.title.ar}
                titleEn={feature.title.en}
                descriptionAr={feature.description.ar}
                descriptionEn={feature.description.en}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
import { content } from "@/config/content";
import { FeatureCard } from "@/components/FeatureCard";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Sparkles } from "lucide-react";

export const Features = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-white via-green-50/50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            {lang === 'ar' ? "ميزات متقدمة" : "Advanced Features"}
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
            {lang === 'ar' ? "كل ما تحتاجه لإدارة متجرك" : "Everything You Need to Manage Your Store"}
          </h2>
          <p className="text-xl text-gray-600">
            {lang === 'ar' 
              ? "مجموعة متكاملة من الأدوات لمساعدتك في إدارة وتنمية تجارتك الإلكترونية"
              : "A complete set of tools to help you manage and grow your e-commerce business"
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {content.features.map((feature, index) => (
            <div 
              key={index} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <FeatureCard
                icon={feature.icon}
                titleAr={feature.title.ar}
                titleEn={feature.title.en}
                descriptionAr={feature.description.ar}
                descriptionEn={feature.description.en}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
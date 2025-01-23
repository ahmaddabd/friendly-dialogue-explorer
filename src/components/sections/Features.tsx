import { content } from "@/config/content";
import { FeatureCard } from "@/components/FeatureCard";
import { useLanguage } from "@/components/LanguageSwitcher";

export const Features = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-white via-green-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
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
import { content } from "@/config/content";
import { FeatureCard } from "@/components/FeatureCard";
import { useLanguage } from "@/components/LanguageSwitcher";

export const Features = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
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
            <FeatureCard
              key={index}
              icon={feature.icon}
              titleAr={feature.title.ar}
              titleEn={feature.title.en}
              descriptionAr={feature.description.ar}
              descriptionEn={feature.description.en}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
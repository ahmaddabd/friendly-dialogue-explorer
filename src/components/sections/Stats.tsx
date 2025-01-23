import { content } from "@/config/content";
import { useLanguage } from "@/components/LanguageSwitcher";

export const Stats = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">{content.stats.stores}</div>
            <div className="text-gray-600">
              {lang === 'ar' ? "متجر نشط" : "Active Stores"}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">{content.stats.sales}</div>
            <div className="text-gray-600">
              {lang === 'ar' ? "عملية بيع شهرياً" : "Monthly Sales"}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">{content.stats.support}</div>
            <div className="text-gray-600">
              {lang === 'ar' ? "دعم فني متواصل" : "Technical Support"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
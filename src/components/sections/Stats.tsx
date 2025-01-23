import { content } from "@/config/content";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Users, ShoppingBag, Clock } from "lucide-react";

export const Stats = () => {
  const { lang } = useLanguage();

  const stats = [
    {
      icon: ShoppingBag,
      value: content.stats.stores,
      labelAr: "متجر نشط",
      labelEn: "Active Stores",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Users,
      value: content.stats.sales,
      labelAr: "عملية بيع شهرياً",
      labelEn: "Monthly Sales",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Clock,
      value: content.stats.support,
      labelAr: "ساعة دعم يومياً",
      labelEn: "Hours Support Daily",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${stat.bgColor}`}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className={`${stat.color} mb-4`}>
                  <stat.icon className="w-12 h-12 transform transition-transform group-hover:scale-110 duration-300" />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  {stat.value}
                </div>
                <div className="text-gray-600 text-lg font-medium">
                  {lang === 'ar' ? stat.labelAr : stat.labelEn}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
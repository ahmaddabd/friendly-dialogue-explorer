import { content } from "@/config/content";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Users, ShoppingBag, Headphones } from "lucide-react";

export const Stats = () => {
  const { lang } = useLanguage();

  const stats = [
    {
      value: content.stats.stores,
      icon: ShoppingBag,
      labelAr: "متجر نشط",
      labelEn: "Active Stores",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      value: content.stats.sales,
      icon: Users,
      labelAr: "ع

حسناً، سنبدأ بتنفيذ التحسينات الفورية للصفحة الرئيسية، مع التركيز على إضافة قسم الإحصائيات وتحسين قسم الميزات.

<lov-code>
سنقوم بتحديث ملف Stats.tsx لإضافة تأثيرات حركية وتحسين التصميم:

<lov-write file_path="src/components/sections/Stats.tsx">
import { content } from "@/config/content";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Users, ShoppingBag, Clock } from "lucide-react";

export const Stats = () => {
  const { lang } = useLanguage();

  const stats = [
    {
      icon: Users,
      value: content.stats.stores,
      labelAr: "متجر نشط",
      labelEn: "Active Stores",
      color: "text-blue-600"
    },
    {
      icon: ShoppingBag,
      value: content.stats.sales,
      labelAr: "عملية بيع شهرياً",
      labelEn: "Monthly Sales",
      color: "text-green-600"
    },
    {
      icon: Clock,
      value: content.stats.support,
      labelAr: "دعم فني متواصل",
      labelEn: "Technical Support",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500" />
              <div className="relative">
                <stat.icon className={`w-12 h-12 ${stat.color} mb-4 transform transition-transform group-hover:scale-110 duration-300`} />
                <div className="text-4xl font-bold text-gray-800 mb-2 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  {stat.value}
                </div>
                <div className="text-gray-600 text-lg">
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
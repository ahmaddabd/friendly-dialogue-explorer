import { content } from "@/config/content";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Users, ShoppingBag, Clock } from "lucide-react";
import { motion } from "framer-motion";

export const Stats = () => {
  const { lang } = useLanguage();

  const stats = [
    {
      icon: ShoppingBag,
      value: content.stats.stores,
      labelAr: "متجر نشط",
      labelEn: "Active Stores",
      color: "text-amber-600",
      bgColor: "bg-amber-50/50"
    },
    {
      icon: Users,
      value: content.stats.sales,
      labelAr: "عملية بيع شهرياً",
      labelEn: "Monthly Sales",
      color: "text-green-600",
      bgColor: "bg-green-50/50"
    },
    {
      icon: Clock,
      value: content.stats.support,
      labelAr: "ساعة دعم يومياً",
      labelEn: "Hours Support Daily",
      color: "text-amber-700",
      bgColor: "bg-amber-50/50"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Shami-inspired background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/arabesque-pattern.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-white to-green-50/30" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {lang === 'ar' ? "إحصائيات مميزة" : "Key Statistics"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {lang === 'ar' 
              ? "نفخر بتقديم خدماتنا لآلاف العملاء ونسعى دائماً للتطور والنمو"
              : "We are proud to serve thousands of customers and always strive for growth and development"
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${stat.bgColor}`}
            >
              {/* Basket-inspired background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Decorative pattern */}
              <div className="absolute inset-0 bg-[url('/basket-texture.svg')] opacity-5" />
              
              <div className="relative z-10">
                <div className={`${stat.color} mb-4`}>
                  <stat.icon className="w-12 h-12 transform transition-transform group-hover:scale-110 duration-300" />
                </div>
                <div 
                  className="text-4xl font-bold text-gray-800 mb-2 animate-fade-in" 
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-600 text-lg font-medium">
                  {lang === 'ar' ? stat.labelAr : stat.labelEn}
                </div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[url('/corner-pattern.svg')] opacity-10 transform -translate-y-8 translate-x-8" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-[url('/corner-pattern.svg')] opacity-10 transform translate-y-8 -translate-x-8 rotate-180" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
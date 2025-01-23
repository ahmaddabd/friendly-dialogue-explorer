import { useLanguage } from "@/components/LanguageSwitcher";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    nameAr: "أحمد محمد",
    nameEn: "Ahmed Mohammed",
    roleAr: "صاحب متجر إلكتروني",
    roleEn: "E-commerce Store Owner",
    contentAr: "منصة رائعة ساعدتني في إدارة متجري بكفاءة عالية. الدعم الفني ممتاز والميزات متكاملة.",
    contentEn: "Amazing platform that helped me manage my store efficiently. Excellent technical support and comprehensive features.",
    rating: 5
  },
  {
    nameAr: "سارة خالد",
    nameEn: "Sara Khaled",
    roleAr: "مديرة مبيعات",
    roleEn: "Sales Manager",
    contentAr: "سهولة الاستخدام والتقارير التفصيلية ساعدتني في تطوير استراتيجية المبيعات.",
    contentEn: "The ease of use and detailed reports helped me develop our sales strategy.",
    rating: 5
  },
  {
    nameAr: "محمد عمر",
    nameEn: "Mohammed Omar",
    roleAr: "رائد أعمال",
    roleEn: "Entrepreneur",
    contentAr: "أفضل منصة للتجارة الإلكترونية في سوريا. ساعدتني في توسيع نطاق عملي.",
    contentEn: "The best e-commerce platform in Syria. Helped me scale my business.",
    rating: 5
  }
];

export const Testimonials = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {lang === 'ar' ? "ماذا يقول عملاؤنا" : "What Our Clients Say"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {lang === 'ar' 
              ? "آراء حقيقية من عملاء يثقون بنا في إدارة متاجرهم الإلكترونية"
              : "Real testimonials from clients who trust us with their e-commerce stores"
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="h-full p-6 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500" />
                
                <div className="relative">
                  <Quote className="w-10 h-10 text-green-600/20 mb-4" />
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-600 mb-6 line-clamp-4">
                    {lang === 'ar' ? testimonial.contentAr : testimonial.contentEn}
                  </p>

                  <div className="mt-auto">
                    <p className="font-semibold text-gray-900">
                      {lang === 'ar' ? testimonial.nameAr : testimonial.nameEn}
                    </p>
                    <p className="text-sm text-gray-500">
                      {lang === 'ar' ? testimonial.roleAr : testimonial.roleEn}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
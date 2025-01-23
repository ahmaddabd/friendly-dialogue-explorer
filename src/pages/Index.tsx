import { Navigation } from "@/components/Navigation";
import { FeatureCard } from "@/components/FeatureCard";
import { content } from "@/config/content";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building2, Phone, Mail, Globe2, CheckCircle2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50/50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <CheckCircle2 className="w-4 h-4 ml-2" />
                متاح الآن في دمشق
              </span>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900">
              <span className="block mb-4">منصة متكاملة لإدارة متجرك الإلكتروني</span>
              <span className="text-2xl text-gray-600 font-normal">ابدأ تجارتك الإلكترونية اليوم</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نقدم لك حلولاً متكاملة لإدارة متجرك بكفاءة عالية وأمان تام، مع دعم فني على مدار الساعة
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                ابدأ الآن مجاناً
                <ArrowRight className="mr-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">تواصل مع المبيعات</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">+1000</div>
              <div className="text-gray-600">متجر نشط</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">+50,000</div>
              <div className="text-gray-600">عملية بيع شهرياً</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">دعم فني متواصل</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">كل ما تحتاجه لإدارة متجرك</h2>
            <p className="text-xl text-gray-600">مجموعة متكاملة من الأدوات لمساعدتك في إدارة وتنمية تجارتك الإلكترونية</p>
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
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">ابدأ رحلتك في التجارة الإلكترونية اليوم</h2>
            <p className="text-xl mb-8 text-green-50">انضم إلى آلاف التجار الناجحين واستفد من خدماتنا المتكاملة</p>
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
              سجل الآن مجاناً
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">دكان تك</h3>
              <p className="text-gray-400">منصتك المتكاملة لإدارة المتجر الرقمي</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">روابط سريعة</h3>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white">الرئيسية</a></li>
                <li><a href="#" className="hover:text-white">المميزات</a></li>
                <li><a href="#" className="hover:text-white">الأسعار</a></li>
                <li><a href="#" className="hover:text-white">تواصل معنا</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">تواصل معنا</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>+963 11 123 4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span>info@dikantek.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  <span>دمشق، سوريا</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">تابعنا</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Globe2 className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Users className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 دكان تك. جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
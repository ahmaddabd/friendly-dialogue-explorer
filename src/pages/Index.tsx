import { Card } from "@/components/ui/card";
import { FeatureCard } from "@/components/FeatureCard";
import { content, theme } from "@/config/content";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building2, Phone, Mail, Globe2, CheckCircle2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced with gradient and pattern */}
      <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-block animate-bounce-slow">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                متاح الآن في دمشق
              </span>
            </div>
            
            <h1 className="text-5xl font-bold text-green-800 mb-4 animate-fade-in">
              <span className="font-arabic text-6xl block mb-2 hover:scale-105 transition-transform duration-300">
                {content.hero.title.ar}
              </span>
              <span className="text-4xl text-gray-700">
                {content.hero.title.en}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              <span className="block font-arabic mb-2 animate-fade-in">
                {content.hero.subtitle.ar}
              </span>
              <span className="block animate-fade-in">
                {content.hero.subtitle.en}
              </span>
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              <span className="block font-arabic mb-2 animate-fade-in">
                {content.hero.description.ar}
              </span>
              <span className="block animate-fade-in">
                {content.hero.description.en}
              </span>
            </p>

            <div className="flex justify-center gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105">
                ابدأ الآن
                <ArrowRight className="mr-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg rounded-xl border-green-600 text-green-600 hover:bg-green-50">
                تواصل معنا
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              <div className="text-gray-600">دعم فني</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Enhanced with animations */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
            <span className="block font-arabic mb-2">مميزات دكان تك</span>
            <span className="block text-2xl text-gray-600">Dikantek Features</span>
          </h2>
          
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

      {/* Partners Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="block font-arabic mb-2">شركاؤنا في النجاح</span>
            <span className="block text-2xl text-gray-600">Our Partners</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((partner) => (
              <div key={partner} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="aspect-square bg-gray-100 rounded-lg animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="block font-arabic mb-2">تواصل معنا</span>
                <span className="block text-2xl text-gray-600">Contact Us</span>
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span className="text-gray-600">+963 11 123 4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-green-600" />
                  <span className="text-gray-600">info@dikantek.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Building2 className="w-5 h-5 text-green-600" />
                  <span className="text-gray-600">دمشق، سوريا</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="الاسم"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <textarea
                  placeholder="رسالتك"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                  إرسال
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4">دكان تك</h3>
              <p className="text-gray-400">منصتك المتكاملة لإدارة المتجر الرقمي</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2 text-gray-400">
                <li>الرئيسية</li>
                <li>المميزات</li>
                <li>الأسعار</li>
                <li>تواصل معنا</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">الدعم</h3>
              <ul className="space-y-2 text-gray-400">
                <li>المساعدة</li>
                <li>الأسئلة الشائعة</li>
                <li>سياسة الخصوصية</li>
                <li>الشروط والأحكام</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">تابعنا</h3>
              <div className="flex space-x-4">
                <Globe2 className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Users className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 دكان تك. جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
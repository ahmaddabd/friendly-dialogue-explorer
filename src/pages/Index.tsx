import { Navigation } from "@/components/Navigation";
import { FeatureCard } from "@/components/FeatureCard";
import { content } from "@/config/content";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building2, Phone, Mail, Globe2, CheckCircle2, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/components/LanguageSwitcher";

const Index = () => {
  const { lang } = useLanguage();
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50/50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <CheckCircle2 className="w-4 h-4 ml-2" />
                {lang === 'ar' ? "متاح الآن في سوريا" : "Now available in Syria"}
              </span>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900">
              <span className="block mb-4">
                {lang === 'ar' ? "منصة متكاملة لإدارة متجرك الإلكتروني" : "Complete Platform for Your E-commerce Store"}
              </span>
              <span className="text-2xl text-gray-600 font-normal">
                {lang === 'ar' ? "ابدأ تجارتك الإلكترونية اليوم" : "Start Your E-commerce Journey Today"}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {lang === 'ar' 
                ? "نقدم لك حلولاً متكاملة لإدارة متجرك بكفاءة عالية وأمان تام، مع دعم فني على مدار الساعة"
                : "We provide comprehensive solutions to manage your store efficiently and securely, with 24/7 technical support"
              }
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg">
                {lang === 'ar' ? "ابدأ الآن مجاناً" : "Start Now for Free"}
                <Arrow className="mr-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                {lang === 'ar' ? "تواصل مع المبيعات" : "Contact Sales"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Features Section */}
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

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              {lang === 'ar' 
                ? "ابدأ رحلتك في التجارة الإلكترونية اليوم"
                : "Start Your E-commerce Journey Today"
              }
            </h2>
            <p className="text-xl mb-8 text-green-50">
              {lang === 'ar'
                ? "انضم إلى آلاف التجار الناجحين واستفد من خدماتنا المتكاملة"
                : "Join thousands of successful merchants and benefit from our integrated services"
              }
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50 text-lg">
              {lang === 'ar' ? "سجل الآن مجاناً" : "Register Now for Free"}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                {lang === 'ar' ? "دكان تك" : "Dukan Tech"}
              </h3>
              <p className="text-gray-400">
                {lang === 'ar' 
                  ? "منصتك المتكاملة لإدارة المتجر الرقمي"
                  : "Your integrated platform for digital store management"
                }
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">
                {lang === 'ar' ? "روابط سريعة" : "Quick Links"}
              </h3>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white">
                  {lang === 'ar' ? "الرئيسية" : "Home"}
                </a></li>
                <li><a href="#" className="hover:text-white">
                  {lang === 'ar' ? "المميزات" : "Features"}
                </a></li>
                <li><a href="#" className="hover:text-white">
                  {lang === 'ar' ? "الأسعار" : "Pricing"}
                </a></li>
                <li><a href="#" className="hover:text-white">
                  {lang === 'ar' ? "تواصل معنا" : "Contact Us"}
                </a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">
                {lang === 'ar' ? "تواصل معنا" : "Contact Us"}
              </h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>{content.contact.phone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span>{content.contact.email}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  <span>{content.contact.address}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">
                {lang === 'ar' ? "تابعنا" : "Follow Us"}
              </h3>
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
            <p>
              {lang === 'ar' 
                ? "© 2024 دكان تك. جميع الحقوق محفوظة"
                : "© 2024 Dukan Tech. All rights reserved"
              }
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
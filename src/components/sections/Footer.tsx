import { Building2, Globe2, Mail, Phone, Users } from "lucide-react";
import { content } from "@/config/content";
import { useLanguage } from "@/components/LanguageSwitcher";

export const Footer = () => {
  const { lang } = useLanguage();

  return (
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
  );
};
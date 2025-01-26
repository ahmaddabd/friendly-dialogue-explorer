import { Card } from "@/components/ui/card";
import { Store, ShieldCheck, MapPin, LucideIcon } from "lucide-react";
import { useLanguage } from './LanguageSwitcher';

const icons: Record<string, LucideIcon> = {
  Store,
  ShieldCheck,
  MapPin
};

interface FeatureCardProps {
  icon: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
}

export const FeatureCard = ({
  icon,
  titleAr,
  titleEn,
  descriptionAr,
  descriptionEn
}: FeatureCardProps) => {
  const IconComponent = icons[icon];
  const { lang } = useLanguage();

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden bg-white/90 backdrop-blur-sm border-amber-100/20">
      <div className="p-6 relative">
        {/* Shami-inspired decorative background */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-50 to-green-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500">
          <div className="absolute inset-0 bg-[url('/arabesque-pattern.svg')] opacity-10" />
        </div>
        
        <div className="relative">
          {/* Basket-inspired icon container */}
          <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-green-50 rounded-2xl flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110 duration-300 shadow-inner">
            <IconComponent className="w-8 h-8 text-amber-600" />
          </div>
          
          {/* Title with decorative underline */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 relative inline-block">
            {lang === 'ar' ? titleAr : titleEn}
            <div className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-gradient-to-r from-amber-200 to-green-200 rounded-full transform origin-left transition-transform group-hover:scale-x-150" />
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {lang === 'ar' ? descriptionAr : descriptionEn}
          </p>

          {/* Decorative corner accent */}
          <div className="absolute bottom-0 right-0 w-12 h-12 opacity-10 transform rotate-45 translate-x-6 translate-y-6 bg-[url('/corner-pattern.svg')]" />
        </div>
      </div>
    </Card>
  );
};
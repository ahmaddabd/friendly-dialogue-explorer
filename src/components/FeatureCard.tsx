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
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden bg-white/80 backdrop-blur-sm border-green-100/20">
      <div className="p-6 relative">
        {/* Decorative background circle */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500" />
        
        <div className="relative">
          {/* Icon */}
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110 duration-300">
            <IconComponent className="w-7 h-7 text-green-600" />
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            {lang === 'ar' ? titleAr : titleEn}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {lang === 'ar' ? descriptionAr : descriptionEn}
          </p>
        </div>
      </div>
    </Card>
  );
};
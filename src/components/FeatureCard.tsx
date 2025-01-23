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
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      <div className="p-6 relative">
        <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500" />
        
        <div className="relative">
          <IconComponent className="w-12 h-12 text-green-600 mb-6 transform transition-transform group-hover:scale-110 duration-300" />
          
          <h3 className="text-xl font-bold text-green-800 mb-2">
            {lang === 'ar' ? titleAr : titleEn}
          </h3>
          
          <p className="text-gray-600">
            {lang === 'ar' ? descriptionAr : descriptionEn}
          </p>
        </div>
      </div>
    </Card>
  );
};
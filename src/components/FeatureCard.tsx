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
    <Card className="salla-card group overflow-hidden">
      <div className="relative">
        {/* Icon container */}
        <div className="w-12 h-12 bg-salla-light rounded-lg flex items-center justify-center mb-4">
          <IconComponent className="w-6 h-6 text-salla-primary" />
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {lang === 'ar' ? titleAr : titleEn}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          {lang === 'ar' ? descriptionAr : descriptionEn}
        </p>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-salla-light/50 rounded-full -mr-12 -mt-12 opacity-50" />
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-salla-light to-salla-accent/20 rounded-full translate-x-8 translate-y-8 opacity-30" />
      </div>
    </Card>
  );
};
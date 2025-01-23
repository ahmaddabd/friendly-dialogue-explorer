import { Card } from "@/components/ui/card";
import { Store, ShieldCheck, MapPin, LucideIcon } from "lucide-react";
import { theme } from "@/config/content";

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

  return (
    <div className="p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-md">
      <IconComponent className="w-8 h-8 text-green-700 mx-auto mb-3" />
      <h3 className="font-semibold text-green-800 mb-2">{titleAr}</h3>
      <h3 className="font-semibold text-green-800 mb-2">{titleEn}</h3>
      <p className="text-gray-600">{descriptionAr}</p>
    </div>
  );
};
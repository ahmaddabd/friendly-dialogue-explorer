import { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from './LanguageSwitcher';

export const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { lang } = useLanguage();

  if (!isVisible) return null;

  return (
    <div className="bg-green-600 text-white py-2 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center text-sm md:text-base">
          <p className="text-center font-medium">
            {lang === 'ar' 
              ? "عرض خاص! احصل على خصم 20% عند الاشتراك السنوي 🎉"
              : "Special offer! Get 20% off on annual subscription 🎉"
            }
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 hover:opacity-80 transition-opacity"
            aria-label={lang === 'ar' ? "إغلاق" : "Close"}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
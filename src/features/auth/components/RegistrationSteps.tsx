import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

interface RegistrationStepsProps {
  currentStep: 1 | 2;
}

export const RegistrationSteps = ({ currentStep }: RegistrationStepsProps) => {
  const { lang } = useLanguage();

  const steps = [
    {
      title: lang === 'ar' ? "معلومات الحساب" : "Account Information",
      description: lang === 'ar' 
        ? "أدخل معلومات حسابك الأساسية"
        : "Enter your basic account information",
    },
    {
      title: lang === 'ar' ? "معلومات المتجر" : "Store Information",
      description: lang === 'ar'
        ? "أدخل معلومات متجرك"
        : "Enter your store information",
    },
  ];

  return (
    <div className="flex justify-center items-center gap-4 mb-6">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex items-center"
        >
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors",
              currentStep > index + 1 
                ? "bg-green-600 border-green-600 text-white"
                : currentStep === index + 1
                ? "border-green-600 text-green-600"
                : "border-gray-300 text-gray-300"
            )}
          >
            {currentStep > index + 1 ? (
              <CheckCircle2 className="w-5 h-5" />
            ) : (
              index + 1
            )}
          </div>
          {index < steps.length - 1 && (
            <div
              className={cn(
                "w-12 h-0.5 mx-2",
                currentStep > index + 1 ? "bg-green-600" : "bg-gray-300"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
};
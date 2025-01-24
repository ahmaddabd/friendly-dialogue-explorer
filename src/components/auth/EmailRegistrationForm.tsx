import { useLanguage } from "@/components/LanguageSwitcher";
import { EmailStepForm } from "@/features/auth/components/forms/EmailStepForm";
import { StoreStepForm } from "@/features/auth/components/forms/StoreStepForm";
import { useRegistrationForm } from "@/features/auth/hooks/useRegistrationForm";

interface EmailRegistrationFormProps {
  onSubmit: (data: any) => void;
  step: 1 | 2;
  loading?: boolean;
}

export const EmailRegistrationForm = ({ onSubmit, step, loading }: EmailRegistrationFormProps) => {
  const { lang } = useLanguage();
  const { handleEmailStep, handleStoreStep, handleBack } = useRegistrationForm();
  
  const handleSubmit = async (data: any) => {
    try {
      await onSubmit(data);
    } catch (error) {
      console.error("Error in form submission:", error);
      throw error;
    }
  };

  if (step === 1) {
    return <EmailStepForm onSubmit={handleSubmit} loading={loading} />;
  }

  return (
    <StoreStepForm 
      onSubmit={handleSubmit}
      onBack={handleBack}
      loading={loading}
    />
  );
};
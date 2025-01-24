import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { EmailForm } from "./forms/EmailForm";
import { StoreForm } from "./forms/StoreForm";
import { RegistrationSteps } from "./RegistrationSteps";
import { useAuthStep } from "../hooks/useAuthStep";
import { useStoreStep } from "../hooks/useStoreStep";
import { useState } from "react";

export const RegistrationCard = () => {
  const { lang } = useLanguage();
  const { handleEmailStep, loading: emailLoading } = useAuthStep();
  const { handleStoreStep, loading: storeLoading } = useStoreStep();
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<any>(null);

  const handleEmailSubmit = async (data: any) => {
    const result = await handleEmailStep(data);
    if (result) {
      setFormData(result);
      setStep(2);
    }
  };

  const handleStoreSubmit = async (data: any) => {
    await handleStoreStep(data, formData);
  };

  const handleBack = () => setStep(1);

  return (
    <Card className="w-full max-w-md shadow-xl border border-green-100/20">
      <CardHeader className="space-y-2 text-center pb-6">
        <Link 
          to="/" 
          className="text-green-600 hover:text-green-700 transition-colors text-xl font-bold mb-6 inline-block"
        >
          {lang === 'ar' ? "دكان تك" : "Dukan Tech"}
        </Link>
        
        <RegistrationSteps currentStep={step} />

        <CardTitle className="text-2xl font-bold text-gray-800">
          {step === 1 
            ? (lang === 'ar' ? "إنشاء حساب جديد" : "Create New Account")
            : (lang === 'ar' ? "معلومات المتجر" : "Store Information")
          }
        </CardTitle>
        <CardDescription className="text-gray-600">
          {step === 1
            ? (lang === 'ar' ? "قم بإدخال معلومات حسابك" : "Enter your account information")
            : (lang === 'ar' ? "قم بإدخال معلومات متجرك" : "Enter your store information")
          }
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6">
        {step === 1 ? (
          <EmailForm onSubmit={handleEmailSubmit} loading={emailLoading} />
        ) : (
          <StoreForm 
            onSubmit={handleStoreSubmit} 
            onBack={handleBack}
            loading={storeLoading}
          />
        )}
      </CardContent>

      <CardFooter className="flex flex-col space-y-4 p-6 bg-gray-50/50">
        <p className="text-center text-sm text-gray-600">
          {lang === 'ar' ? "لديك حساب بالفعل؟" : "Already have an account?"}{" "}
          <Link
            to="/login"
            className="font-medium text-green-600 hover:text-green-500"
          >
            {lang === 'ar' ? "سجل دخول" : "Sign in"}
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};
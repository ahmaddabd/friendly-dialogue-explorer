import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { EmailForm } from "./forms/EmailForm";
import { StoreForm } from "./forms/StoreForm";
import { RegistrationSteps } from "./RegistrationSteps";
import { useAuthStep } from "../hooks/useAuthStep";
import { useStoreStep } from "../hooks/useStoreStep";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const RegistrationCard = () => {
  const { lang } = useLanguage();
  const { toast } = useToast();
  const { handleEmailStep, loading: emailLoading } = useAuthStep();
  const { handleStoreStep, loading: storeLoading } = useStoreStep();
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<any>(null);

  const handleEmailSubmit = async (data: any) => {
    try {
      const result = await handleEmailStep(data);
      if (result) {
        setFormData(result);
        setStep(2);
        toast({
          title: lang === 'ar' ? "تم التحقق بنجاح" : "Verification successful",
          description: lang === 'ar' ? "يرجى إكمال معلومات المتجر" : "Please complete store information",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: lang === 'ar' ? "حدث خطأ" : "Error occurred",
        description: (error as Error).message,
      });
    }
  };

  const handleStoreSubmit = async (data: any) => {
    try {
      await handleStoreStep(data, formData);
      toast({
        title: lang === 'ar' ? "تم إنشاء المتجر بنجاح" : "Store created successfully",
        description: lang === 'ar' ? "سيتم تحويلك إلى لوحة التحكم" : "You will be redirected to dashboard",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: lang === 'ar' ? "حدث خطأ" : "Error occurred",
        description: (error as Error).message,
      });
    }
  };

  const handleBack = () => {
    setStep(1);
    toast({
      title: lang === 'ar' ? "تم الرجوع" : "Went back",
      description: lang === 'ar' ? "يمكنك تعديل معلومات الحساب" : "You can modify account information",
    });
  };

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
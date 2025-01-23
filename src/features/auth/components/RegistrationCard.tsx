import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { EmailForm } from "./EmailForm";
import { StoreForm } from "./StoreForm";
import { RegistrationSteps } from "./RegistrationSteps";
import { useRegistration } from "../hooks/useRegistration";

export const RegistrationCard = () => {
  const { lang } = useLanguage();
  const { step, loading, handleEmailStep, handleStoreStep, handleBack } = useRegistration();

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
          <EmailForm onSubmit={handleEmailStep} loading={loading} />
        ) : (
          <StoreForm 
            onSubmit={handleStoreStep} 
            onBack={handleBack}
            loading={loading}
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
import { useState } from "react";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EmailRegistrationForm } from "./EmailRegistrationForm";
import { PhoneRegistrationForm } from "./PhoneRegistrationForm";
import { RegistrationSteps } from "./RegistrationSteps";
import { Link } from "react-router-dom";

interface RegistrationFormProps {
  onSubmit: (values: any) => Promise<void>;
  loading: boolean;
  step: 1 | 2;
  onStepChange: (step: 1 | 2) => void;
}

export const RegistrationForm = ({ 
  onSubmit, 
  loading, 
  step, 
  onStepChange 
}: RegistrationFormProps) => {
  const { lang } = useLanguage();
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;
  const [activeTab, setActiveTab] = useState<"email" | "phone">("email");

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
        <Tabs 
          value={activeTab} 
          onValueChange={(value) => setActiveTab(value as "email" | "phone")} 
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger 
              value="email"
              className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
            >
              {lang === 'ar' ? "البريد الإلكتروني" : "Email"}
            </TabsTrigger>
            <TabsTrigger 
              value="phone"
              className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
            >
              {lang === 'ar' ? "رقم الهاتف" : "Phone"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="email">
            <EmailRegistrationForm 
              onSubmit={onSubmit} 
              step={step} 
              loading={loading}
            />
          </TabsContent>

          <TabsContent value="phone">
            <PhoneRegistrationForm 
              onSubmit={onSubmit} 
              step={step}
            />
          </TabsContent>
        </Tabs>
      </CardContent>

      <CardFooter className="flex flex-col space-y-4 p-6 bg-gray-50/50">
        {step === 2 && (
          <Button
            type="button"
            variant="ghost"
            className="w-full hover:bg-green-50 hover:text-green-600"
            onClick={() => onStepChange(1)}
          >
            {lang === 'ar' ? "العودة" : "Back"}
          </Button>
        )}

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
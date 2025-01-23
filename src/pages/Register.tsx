import { useState } from "react";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EmailRegistrationForm } from "@/components/auth/EmailRegistrationForm";
import { PhoneRegistrationForm } from "@/components/auth/PhoneRegistrationForm";
import { RegistrationSteps } from "@/components/auth/RegistrationSteps";

const Register = () => {
  const { lang } = useLanguage();
  const [step, setStep] = useState<1 | 2>(1);
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  const handleSubmit = (values: any) => {
    if (step === 1) {
      setStep(2);
      return;
    }

    toast({
      title: lang === 'ar' ? "تم إنشاء الحساب بنجاح" : "Account created successfully",
      description: lang === 'ar' 
        ? "سيتم توجيهك إلى لوحة التحكم"
        : "You will be redirected to the dashboard",
    });
    console.log(values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2 text-center">
          <Link 
            to="/" 
            className="text-green-600 hover:text-green-700 transition-colors text-xl font-bold mb-6 block"
          >
            {lang === 'ar' ? "دكان تك" : "Dukan Tech"}
          </Link>
          
          <RegistrationSteps currentStep={step} />

          <CardTitle className="text-2xl font-bold">
            {step === 1 
              ? (lang === 'ar' ? "إنشاء حساب جديد" : "Create New Account")
              : (lang === 'ar' ? "معلومات المتجر" : "Store Information")
            }
          </CardTitle>
          <CardDescription>
            {step === 1
              ? (lang === 'ar' ? "قم بإدخال معلومات حسابك" : "Enter your account information")
              : (lang === 'ar' ? "قم بإدخال معلومات متجرك" : "Enter your store information")
            }
          </CardDescription>
        </CardHeader>

        <Tabs defaultValue="phone" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="phone">
              {lang === 'ar' ? "رقم الهاتف" : "Phone"}
            </TabsTrigger>
            <TabsTrigger value="email">
              {lang === 'ar' ? "البريد الإلكتروني" : "Email"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="phone">
            <PhoneRegistrationForm onSubmit={handleSubmit} step={step} />
          </TabsContent>

          <TabsContent value="email">
            <EmailRegistrationForm onSubmit={handleSubmit} step={step} />
          </TabsContent>
        </Tabs>

        <CardFooter className="flex flex-col space-y-4">
          <Button
            type="submit"
            form="registration-form"
            className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300"
          >
            {step === 1 
              ? lang === 'ar' ? "التالي" : "Next"
              : lang === 'ar' ? "إنشاء الحساب" : "Create Account"
            }
            <Arrow className="ml-2 h-5 w-5" />
          </Button>

          {step === 2 && (
            <Button
              type="button"
              variant="ghost"
              className="w-full"
              onClick={() => setStep(1)}
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
    </div>
  );
};

export default Register;
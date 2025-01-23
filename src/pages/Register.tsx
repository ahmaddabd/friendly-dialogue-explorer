import { useState } from "react";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EmailRegistrationForm } from "@/components/auth/EmailRegistrationForm";
import { PhoneRegistrationForm } from "@/components/auth/PhoneRegistrationForm";
import { RegistrationSteps } from "@/components/auth/RegistrationSteps";
import { supabase } from "@/integrations/supabase/client";

const Register = () => {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  const handleSubmit = async (values: any) => {
    if (step === 1) {
      setStep(2);
      return;
    }

    setLoading(true);
    try {
      // Register the user
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            full_name: values.ownerName,
          }
        }
      });

      if (signUpError) {
        if (signUpError.message.includes("User already registered")) {
          toast({
            title: lang === 'ar' ? "خطأ في التسجيل" : "Registration Error",
            description: lang === 'ar' 
              ? "البريد الإلكتروني مسجل مسبقاً" 
              : "Email is already registered",
            variant: "destructive"
          });
        } else {
          toast({
            title: lang === 'ar' ? "خطأ" : "Error",
            description: signUpError.message,
            variant: "destructive"
          });
        }
        setLoading(false);
        return;
      }

      // Create the store
      const { error: storeError } = await supabase
        .from('stores')
        .insert({
          name: values.storeName,
          owner_id: signUpData.user?.id,
          category: 'general',
          status: 'pending'
        });

      if (storeError) {
        toast({
          title: lang === 'ar' ? "خطأ" : "Error",
          description: lang === 'ar' 
            ? "حدث خطأ أثناء إنشاء المتجر" 
            : "Error creating store",
          variant: "destructive"
        });
        setLoading(false);
        return;
      }

      toast({
        title: lang === 'ar' ? "تم إنشاء الحساب بنجاح" : "Account created successfully",
        description: lang === 'ar' 
          ? "سيتم توجيهك إلى لوحة التحكم"
          : "You will be redirected to the dashboard",
      });

      navigate('/');
    } catch (error: any) {
      toast({
        title: lang === 'ar' ? "خطأ" : "Error",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <Card className="w-full max-w-md shadow-xl border border-green-100/20 backdrop-blur-sm bg-white/80 animate-fade-in">
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

        <CardContent className="p-6 border-t border-b border-gray-100">
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger 
                value="email"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white transition-all duration-200"
              >
                {lang === 'ar' ? "البريد الإلكتروني" : "Email"}
              </TabsTrigger>
              <TabsTrigger 
                value="phone"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white transition-all duration-200"
              >
                {lang === 'ar' ? "رقم الهاتف" : "Phone"}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="email">
              <EmailRegistrationForm onSubmit={handleSubmit} step={step} />
            </TabsContent>

            <TabsContent value="phone">
              <PhoneRegistrationForm onSubmit={handleSubmit} step={step} />
            </TabsContent>
          </Tabs>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4 p-6 bg-gray-50/50 rounded-b-lg">
          <Button
            type="submit"
            form="registration-form"
            className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 text-white font-medium shadow-lg hover:shadow-xl"
            disabled={loading}
          >
            {loading 
              ? (lang === 'ar' ? "جاري المعالجة..." : "Processing...")
              : (step === 1 
                  ? (lang === 'ar' ? "التالي" : "Next")
                  : (lang === 'ar' ? "إنشاء الحساب" : "Create Account")
                )
            }
            <Arrow className="rtl:mr-2 ltr:ml-2 h-5 w-5" />
          </Button>

          {step === 2 && (
            <Button
              type="button"
              variant="ghost"
              className="w-full hover:bg-green-50 hover:text-green-600"
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
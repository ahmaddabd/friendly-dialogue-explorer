import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { RegistrationForm } from "@/components/auth/RegistrationForm";

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);

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
            title: "خطأ في التسجيل",
            description: "البريد الإلكتروني مسجل مسبقاً",
            variant: "destructive"
          });
        } else {
          toast({
            title: "خطأ",
            description: signUpError.message,
            variant: "destructive"
          });
        }
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
          title: "خطأ",
          description: "حدث خطأ أثناء إنشاء المتجر",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "تم إنشاء الحساب بنجاح",
        description: "سيتم توجيهك إلى لوحة التحكم",
      });

      navigate('/');
    } catch (error: any) {
      toast({
        title: "خطأ",
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

      <RegistrationForm 
        onSubmit={handleSubmit}
        loading={loading}
        step={step}
        onStepChange={setStep}
      />
    </div>
  );
};

export default Register;
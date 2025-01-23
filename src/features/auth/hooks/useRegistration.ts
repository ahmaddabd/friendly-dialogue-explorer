import { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

export const useRegistration = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<any>(null);

  const handleEmailStep = async (values: any) => {
    console.log("Email step data:", values);
    setFormData(values);
    setStep(2);
  };

  const handleStoreStep = async (values: any) => {
    const finalData = {
      ...formData,
      ...values
    };
    
    console.log("Final registration data:", finalData);
    setLoading(true);

    try {
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: finalData.email,
        password: finalData.password,
        options: {
          data: {
            full_name: finalData.ownerName,
          }
        }
      });

      if (signUpError) {
        console.error("Registration error:", signUpError);
        
        // Handle user already exists error
        if (signUpError.message.includes("User already registered") || 
            (signUpError as any)?.body?.includes("user_already_exists")) {
          toast({
            title: lang === 'ar' ? "البريد الإلكتروني مسجل مسبقاً" : "Email Already Registered",
            description: lang === 'ar' 
              ? "هذا البريد الإلكتروني مسجل بالفعل. الرجاء تسجيل الدخول أو استخدام بريد إلكتروني آخر"
              : "This email is already registered. Please sign in or use a different email",
            variant: "destructive"
          });
          setStep(1); // Go back to email step
          return;
        }

        // Handle other errors
        toast({
          title: lang === 'ar' ? "خطأ في التسجيل" : "Registration Error",
          description: signUpError.message,
          variant: "destructive"
        });
        return;
      }

      if (!signUpData.user) {
        console.error("No user data returned after signup");
        toast({
          title: lang === 'ar' ? "خطأ" : "Error",
          description: lang === 'ar' 
            ? "حدث خطأ أثناء إنشاء الحساب"
            : "An error occurred while creating your account",
          variant: "destructive"
        });
        return;
      }

      const { error: storeError } = await supabase
        .from('stores')
        .insert({
          name: finalData.storeName,
          owner_id: signUpData.user.id,
          category: 'general',
          status: 'pending',
          store_settings: {
            theme: "default",
            colors: {
              primary: "#22c55e",
              secondary: "#64748b"
            },
            layout: "default",
            features: {
              reviews: true,
              wishlist: true,
              compare: true,
              chat: false
            }
          },
          settings: {
            cod_enabled: true,
            tax_enabled: true,
            invoice_enabled: true,
            shipping_enabled: true
          }
        });

      if (storeError) {
        console.error("Store creation error:", storeError);
        toast({
          title: lang === 'ar' ? "خطأ" : "Error",
          description: lang === 'ar'
            ? "حدث خطأ أثناء إنشاء المتجر"
            : "An error occurred while creating your store",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: lang === 'ar' ? "تم إنشاء الحساب بنجاح" : "Account Created Successfully",
        description: lang === 'ar'
          ? "سيتم توجيهك إلى لوحة التحكم"
          : "You will be redirected to the dashboard",
      });

      navigate('/dashboard');
    } catch (error: any) {
      console.error("Unexpected error:", error);
      toast({
        title: lang === 'ar' ? "خطأ" : "Error",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    step,
    loading,
    handleEmailStep,
    handleStoreStep,
    handleBack: () => setStep(1)
  };
};
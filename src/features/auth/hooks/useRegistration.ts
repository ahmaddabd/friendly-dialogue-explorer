import { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export const useRegistration = () => {
  const navigate = useNavigate();
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

      if (!signUpData.user) {
        console.error("No user data returned after signup");
        toast({
          title: "خطأ",
          description: "حدث خطأ أثناء إنشاء الحساب",
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

      navigate('/dashboard');
    } catch (error: any) {
      console.error("Unexpected error:", error);
      toast({
        title: "خطأ",
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
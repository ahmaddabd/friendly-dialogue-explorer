import { useState } from 'react';
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/useLanguage";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

export const useStoreStep = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const [loading, setLoading] = useState(false);

  const handleStoreStep = async (values: any, userData: any) => {
    const finalData = {
      ...userData,
      ...values
    };
    
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
        handleSignUpError(signUpError);
        return false;
      }

      if (!signUpData.user) {
        throw new Error(lang === 'ar' 
          ? "حدث خطأ أثناء إنشاء الحساب"
          : "An error occurred while creating your account"
        );
      }

      await createStore(signUpData.user.id, finalData);
      
      toast({
        title: lang === 'ar' ? "تم إنشاء الحساب بنجاح" : "Account Created Successfully",
        description: lang === 'ar'
          ? "سيتم توجيهك إلى لوحة التحكم"
          : "You will be redirected to the dashboard",
      });

      navigate('/dashboard');
      return true;
    } catch (error: any) {
      console.error("Unexpected error:", error);
      toast({
        title: lang === 'ar' ? "خطأ" : "Error",
        description: error.message,
        variant: "destructive"
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleSignUpError = (error: any) => {
    if (error.message.includes("User already registered") || 
        (error as any)?.body?.includes("user_already_exists")) {
      toast({
        title: lang === 'ar' ? "البريد الإلكتروني مسجل مسبقاً" : "Email Already Registered",
        description: lang === 'ar' 
          ? "هذا البريد الإلكتروني مسجل بالفعل. الرجاء تسجيل الدخول أو استخدام بريد إلكتروني آخر"
          : "This email is already registered. Please sign in or use a different email",
        variant: "destructive"
      });
    } else {
      toast({
        title: lang === 'ar' ? "خطأ في التسجيل" : "Registration Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const createStore = async (userId: string, storeData: any) => {
    const { error: storeError } = await supabase
      .from('stores')
      .insert({
        name: storeData.storeName,
        owner_id: userId,
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
      throw new Error(lang === 'ar'
        ? "حدث خطأ أثناء إنشاء المتجر"
        : "An error occurred while creating your store"
      );
    }
  };

  return {
    loading,
    handleStoreStep,
  };
};
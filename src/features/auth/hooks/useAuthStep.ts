import { useState } from 'react';
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/useLanguage";
import { supabase } from "@/integrations/supabase/client";

export const useAuthStep = () => {
  const { lang } = useLanguage();
  const [loading, setLoading] = useState(false);

  const handleEmailStep = async (values: any) => {
    console.log("Email step data:", values);
    return values;
  };

  const handleEmailVerification = async (email: string) => {
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
      });

      if (error) throw error;

      toast({
        title: lang === 'ar' ? "تم إرسال رابط التحقق" : "Verification Link Sent",
        description: lang === 'ar' 
          ? "تم إرسال رابط التحقق إلى بريدك الإلكتروني" 
          : "A verification link has been sent to your email",
      });
    } catch (error: any) {
      toast({
        title: lang === 'ar' ? "خطأ" : "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  return {
    loading,
    handleEmailStep,
    handleEmailVerification,
  };
};
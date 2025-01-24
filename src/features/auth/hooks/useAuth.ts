import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/useLanguage';

export const useAuth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { lang } = useLanguage();
  const [loading, setLoading] = useState(false);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        if (error.message === "Invalid login credentials") {
          toast({
            title: lang === 'ar' ? "خطأ في تسجيل الدخول" : "Login Error",
            description: lang === 'ar' 
              ? "البريد الإلكتروني أو كلمة المرور غير صحيحة" 
              : "Invalid email or password",
            variant: "destructive"
          });
        } else {
          toast({
            title: lang === 'ar' ? "خطأ" : "Error",
            description: error.message,
            variant: "destructive"
          });
        }
        return false;
      }

      toast({
        title: lang === 'ar' ? "تم تسجيل الدخول بنجاح" : "Logged in successfully",
        description: lang === 'ar' 
          ? "سيتم توجيهك إلى لوحة التحكم" 
          : "You will be redirected to the dashboard",
      });

      navigate('/dashboard');
      return true;
    } catch (error: any) {
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

  const signOut = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      navigate('/login');
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

  return {
    loading,
    signIn,
    signOut
  };
};
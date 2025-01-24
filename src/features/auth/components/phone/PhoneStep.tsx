import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Phone } from "lucide-react";
import { isValidPhone } from "@/lib/utils/validation";
import { supabase } from "@/integrations/supabase/client";

interface PhoneStepProps {
  onVerificationSent: () => void;
  onPhoneSubmit: (phone: string) => void;
}

export const PhoneStep = ({ onVerificationSent, onPhoneSubmit }: PhoneStepProps) => {
  const { lang } = useLanguage();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOTP = async () => {
    if (!isValidPhone(phone)) {
      toast({
        title: lang === 'ar' ? "خطأ" : "Error",
        description: lang === 'ar' 
          ? "يرجى إدخال رقم هاتف صحيح يبدأ بـ 09" 
          : "Please enter a valid phone number starting with 09",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        phone,
      });

      if (error) throw error;

      onPhoneSubmit(phone);
      onVerificationSent();
      
      toast({
        title: lang === 'ar' ? "تم إرسال رمز التحقق" : "OTP Sent",
        description: lang === 'ar' 
          ? "تم إرسال رمز التحقق إلى رقم هاتفك" 
          : "A verification code has been sent to your phone",
      });
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
    <div className="space-y-4">
      <div className="relative">
        <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        <Input
          type="tel"
          placeholder={lang === 'ar' ? "رقم الهاتف (يبدأ بـ 09)" : "Phone number (starts with 09)"}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="pl-10"
          dir="ltr"
        />
      </div>
      <Button
        className="w-full bg-green-600 hover:bg-green-700"
        onClick={handleSendOTP}
        disabled={loading}
      >
        {loading 
          ? (lang === 'ar' ? "جاري المعالجة..." : "Processing...") 
          : (lang === 'ar' ? "إرسال رمز التحقق" : "Send Code")
        }
      </Button>
    </div>
  );
};
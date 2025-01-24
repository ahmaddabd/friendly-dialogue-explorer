import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { supabase } from "@/integrations/supabase/client";

interface VerificationStepProps {
  phone: string;
  onVerificationComplete: () => void;
}

export const VerificationStep = ({ phone, onVerificationComplete }: VerificationStepProps) => {
  const { lang } = useLanguage();
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      toast({
        title: lang === 'ar' ? "خطأ" : "Error",
        description: lang === 'ar' 
          ? "يرجى إدخال رمز التحقق المكون من 6 أرقام" 
          : "Please enter the 6-digit verification code",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.verifyOtp({
        phone,
        token: otp,
        type: 'sms'
      });

      if (error) throw error;

      toast({
        title: lang === 'ar' ? "تم التحقق بنجاح" : "Verification Successful",
        description: lang === 'ar' 
          ? "تم التحقق من رقم هاتفك بنجاح" 
          : "Your phone number has been verified successfully",
      });

      onVerificationComplete();
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
      <InputOTP
        value={otp}
        onChange={(value) => setOtp(value)}
        maxLength={6}
      >
        <InputOTPGroup>
          {Array.from({ length: 6 }).map((_, i) => (
            <InputOTPSlot key={i} index={i} />
          ))}
        </InputOTPGroup>
      </InputOTP>
      <Button
        className="w-full bg-green-600 hover:bg-green-700"
        onClick={handleVerifyOTP}
        disabled={loading}
      >
        {loading 
          ? (lang === 'ar' ? "جاري التحقق..." : "Verifying...") 
          : (lang === 'ar' ? "تحقق من الرمز" : "Verify Code")
        }
      </Button>
    </div>
  );
};
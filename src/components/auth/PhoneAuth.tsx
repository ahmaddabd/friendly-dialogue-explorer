import { useState } from "react";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Phone, ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { supabase } from "@/integrations/supabase/client";
import { isValidPhone } from "@/lib/utils/validation";
import { Progress } from "@/components/ui/progress";

export const PhoneAuth = () => {
  const { lang } = useLanguage();
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

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

      setOtpSent(true);
      setProgress(50);
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

      setProgress(100);
      toast({
        title: lang === 'ar' ? "تم التحقق بنجاح" : "Verification Successful",
        description: lang === 'ar' 
          ? "تم التحقق من رقم هاتفك بنجاح" 
          : "Your phone number has been verified successfully",
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

  const handleResendOTP = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        phone,
      });

      if (error) throw error;

      toast({
        title: lang === 'ar' ? "تم إعادة إرسال الرمز" : "Code Resent",
        description: lang === 'ar' 
          ? "تم إعادة إرسال رمز التحقق إلى هاتفك" 
          : "A new verification code has been sent to your phone",
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
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <Progress value={progress} className="mb-4" />
        <CardTitle>
          {lang === 'ar' ? "التحقق من رقم الهاتف" : "Phone Verification"}
        </CardTitle>
        <CardDescription>
          {otpSent 
            ? (lang === 'ar' 
                ? "أدخل رمز التحقق المرسل إلى هاتفك" 
                : "Enter the verification code sent to your phone")
            : (lang === 'ar' 
                ? "أدخل رقم هاتفك للتحقق" 
                : "Enter your phone number for verification")
          }
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!otpSent ? (
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
        ) : (
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
              variant="ghost"
              className="w-full text-sm hover:text-green-600"
              onClick={handleResendOTP}
              disabled={loading}
            >
              {lang === 'ar' ? "إعادة إرسال الرمز" : "Resend Code"}
            </Button>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button
          className="w-full bg-green-600 hover:bg-green-700 gap-2"
          onClick={otpSent ? handleVerifyOTP : handleSendOTP}
          disabled={loading}
        >
          {loading 
            ? (lang === 'ar' ? "جاري المعالجة..." : "Processing...") 
            : (otpSent 
                ? (lang === 'ar' ? "تحقق من الرمز" : "Verify Code")
                : (lang === 'ar' ? "إرسال رمز التحقق" : "Send Code")
              )
          }
          <Arrow className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};
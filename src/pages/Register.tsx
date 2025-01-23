import { useState } from "react";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, ArrowRight, Mail, Lock, Phone, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Register = () => {
  const { lang } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  const validateSyrianPhone = (phone: string) => {
    const syrianPhoneRegex = /^09\d{8}$/;
    return syrianPhoneRegex.test(phone);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    
    if (value && !validateSyrianPhone(value)) {
      setPhoneError(lang === 'ar' 
        ? "يجب أن يبدأ رقم الهاتف بـ 09 ويتكون من 10 أرقام"
        : "Phone number must start with 09 and be 10 digits long"
      );
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateSyrianPhone(phone)) {
      toast({
        variant: "destructive",
        title: lang === 'ar' ? "خطأ في رقم الهاتف" : "Invalid phone number",
        description: lang === 'ar' 
          ? "الرجاء إدخال رقم هاتف سوري صالح يبدأ بـ 09"
          : "Please enter a valid Syrian phone number starting with 09",
      });
      return;
    }

    toast({
      title: lang === 'ar' ? "جاري المعالجة" : "Processing",
      description: lang === 'ar' ? "جاري إنشاء حسابك" : "Creating your account",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2 text-center">
          <Link 
            to="/" 
            className="text-green-600 hover:text-green-700 transition-colors text-xl font-bold mb-6 block"
          >
            {lang === 'ar' ? "دكان تك" : "Dukan Tech"}
          </Link>
          <CardTitle className="text-2xl font-bold">
            {lang === 'ar' ? "إنشاء حساب جديد" : "Create new account"}
          </CardTitle>
          <CardDescription>
            {lang === 'ar' 
              ? "قم بإنشاء حساب للوصول إلى جميع الميزات"
              : "Create an account to access all features"
            }
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 block">
                {lang === 'ar' ? "البريد الإلكتروني" : "Email"}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={lang === 'ar' ? "أدخل بريدك الإلكتروني" : "Enter your email"}
                  className="pl-10"
                  dir={lang === 'ar' ? "rtl" : "ltr"}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700 block">
                {lang === 'ar' ? "رقم الهاتف" : "Phone number"}
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder={lang === 'ar' ? "أدخل رقم الهاتف (يبدأ بـ 09)" : "Enter phone number (starts with 09)"}
                  className="pl-10"
                  dir="ltr"
                />
              </div>
              {phoneError && (
                <Alert variant="destructive" className="mt-2">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{phoneError}</AlertDescription>
                </Alert>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700 block">
                {lang === 'ar' ? "كلمة المرور" : "Password"}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={lang === 'ar' ? "أدخل كلمة المرور" : "Enter your password"}
                  className="pl-10"
                  dir={lang === 'ar' ? "rtl" : "ltr"}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700"
            >
              {lang === 'ar' ? "إنشاء حساب" : "Sign up"}
              <Arrow className="ml-2 h-5 w-5" />
            </Button>
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
        </form>
      </Card>
    </div>
  );
};

export default Register;
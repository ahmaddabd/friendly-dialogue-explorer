import { useState } from "react";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Register = () => {
  const { lang } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const validateSyrianPhone = (phone: string) => {
    // التحقق من أن الرقم سوري (يبدأ بـ 09 ويتكون من 10 أرقام)
    const syrianPhoneRegex = /^09\d{8}$/;
    return syrianPhoneRegex.test(phone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateSyrianPhone(phone)) {
      toast({
        variant: "destructive",
        title: lang === 'ar' ? "رقم هاتف غير صالح" : "Invalid phone number",
        description: lang === 'ar' 
          ? "الرجاء إدخال رقم هاتف سوري صالح يبدأ بـ 09" 
          : "Please enter a valid Syrian phone number starting with 09",
      });
      return;
    }

    // هنا سيتم إضافة منطق إنشاء الحساب لاحقاً
    toast({
      title: lang === 'ar' ? "تم إرسال الطلب" : "Request sent",
      description: lang === 'ar' ? "جاري معالجة طلب إنشاء الحساب" : "Processing registration request",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {lang === 'ar' ? "إنشاء حساب جديد" : "Create new account"}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                {lang === 'ar' ? "البريد الإلكتروني" : "Email address"}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={lang === 'ar' ? "البريد الإلكتروني" : "Email address"}
                dir={lang === 'ar' ? "rtl" : "ltr"}
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                {lang === 'ar' ? "رقم الهاتف" : "Phone number"}
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={lang === 'ar' ? "رقم الهاتف (يبدأ بـ 09)" : "Phone number (starts with 09)"}
                dir="ltr"
                className="text-left"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                {lang === 'ar' ? "كلمة المرور" : "Password"}
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={lang === 'ar' ? "كلمة المرور" : "Password"}
                dir={lang === 'ar' ? "rtl" : "ltr"}
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700"
            >
              {lang === 'ar' ? "إنشاء حساب" : "Sign up"}
            </Button>
          </div>
        </form>

        <div className="text-center">
          <Link
            to="/login"
            className="font-medium text-green-600 hover:text-green-500"
          >
            {lang === 'ar'
              ? "لديك حساب بالفعل؟ سجل دخول"
              : "Already have an account? Sign in"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
import { useState } from "react";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const { lang } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا سيتم إضافة منطق تسجيل الدخول لاحقاً
    toast({
      title: lang === 'ar' ? "تم إرسال الطلب" : "Request sent",
      description: lang === 'ar' ? "جاري معالجة طلب تسجيل الدخول" : "Processing login request",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {lang === 'ar' ? "تسجيل الدخول" : "Sign in to your account"}
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
              {lang === 'ar' ? "تسجيل الدخول" : "Sign in"}
            </Button>
          </div>
        </form>

        <div className="text-center">
          <Link
            to="/register"
            className="font-medium text-green-600 hover:text-green-500"
          >
            {lang === 'ar'
              ? "ليس لديك حساب؟ سجل الآن"
              : "Don't have an account? Sign up"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
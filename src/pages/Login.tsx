import { useState } from "react";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, ArrowRight, Mail, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  const { lang } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: lang === 'ar' ? "جاري المعالجة" : "Processing",
      description: lang === 'ar' ? "جاري التحقق من بياناتك" : "Verifying your credentials",
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
            {lang === 'ar' ? "تسجيل الدخول" : "Sign in"}
          </CardTitle>
          <CardDescription>
            {lang === 'ar' 
              ? "قم بتسجيل الدخول للوصول إلى حسابك"
              : "Sign in to access your account"
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
              {lang === 'ar' ? "تسجيل الدخول" : "Sign in"}
              <Arrow className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-center text-sm text-gray-600">
              {lang === 'ar' ? "ليس لديك حساب؟" : "Don't have an account?"}{" "}
              <Link
                to="/register"
                className="font-medium text-green-600 hover:text-green-500"
              >
                {lang === 'ar' ? "سجل الآن" : "Sign up"}
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;
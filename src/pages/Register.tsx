import { useState } from "react";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, ArrowRight, Mail, Lock, Phone, User, Store, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Register = () => {
  const { lang } = useLanguage();
  const [step, setStep] = useState<1 | 2>(1);
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  // تعريف مخطط التحقق للبريد الإلكتروني
  const emailFormSchema = z.object({
    email: z.string().email({
      message: lang === 'ar' ? "يرجى إدخال بريد إلكتروني صحيح" : "Please enter a valid email",
    }),
    password: z.string().min(8, {
      message: lang === 'ar' 
        ? "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل"
        : "Password must be at least 8 characters long",
    }),
    storeName: z.string().min(3, {
      message: lang === 'ar' 
        ? "يجب أن يتكون اسم المتجر من 3 أحرف على الأقل"
        : "Store name must be at least 3 characters long",
    }),
    ownerName: z.string().min(3, {
      message: lang === 'ar' 
        ? "يجب أن يتكون اسم المالك من 3 أحرف على الأقل"
        : "Owner name must be at least 3 characters long",
    }),
  });

  // تعريف مخطط التحقق لرقم الهاتف
  const phoneFormSchema = z.object({
    phone: z.string().regex(/^09\d{8}$/, {
      message: lang === 'ar' 
        ? "يجب أن يبدأ رقم الهاتف بـ 09 ويتكون من 10 أرقام" 
        : "Phone number must start with 09 and be 10 digits long",
    }),
    password: z.string().min(8, {
      message: lang === 'ar' 
        ? "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل"
        : "Password must be at least 8 characters long",
    }),
    storeName: z.string().min(3, {
      message: lang === 'ar' 
        ? "يجب أن يتكون اسم المتجر من 3 أحرف على الأقل"
        : "Store name must be at least 3 characters long",
    }),
    ownerName: z.string().min(3, {
      message: lang === 'ar' 
        ? "يجب أن يتكون اسم المالك من 3 أحرف على الأقل"
        : "Owner name must be at least 3 characters long",
    }),
  });

  const emailForm = useForm<z.infer<typeof emailFormSchema>>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      email: "",
      password: "",
      storeName: "",
      ownerName: "",
    },
  });

  const phoneForm = useForm<z.infer<typeof phoneFormSchema>>({
    resolver: zodResolver(phoneFormSchema),
    defaultValues: {
      phone: "",
      password: "",
      storeName: "",
      ownerName: "",
    },
  });

  const onSubmit = (values: any) => {
    if (step === 1) {
      setStep(2);
      return;
    }

    toast({
      title: lang === 'ar' ? "تم إنشاء الحساب بنجاح" : "Account created successfully",
      description: lang === 'ar' 
        ? "سيتم توجيهك إلى لوحة التحكم"
        : "You will be redirected to the dashboard",
    });
    console.log(values);
  };

  const steps = [
    {
      title: lang === 'ar' ? "معلومات الحساب" : "Account Information",
      description: lang === 'ar' 
        ? "أدخل معلومات حسابك الأساسية"
        : "Enter your basic account information",
    },
    {
      title: lang === 'ar' ? "معلومات المتجر" : "Store Information",
      description: lang === 'ar'
        ? "أدخل معلومات متجرك"
        : "Enter your store information",
    },
  ];

  const currentStep = steps[step - 1];

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
          
          <div className="flex justify-center items-center gap-4 mb-6">
            {steps.map((s, index) => (
              <div
                key={index}
                className="flex items-center"
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors",
                    step > index + 1 
                      ? "bg-green-600 border-green-600 text-white"
                      : step === index + 1
                      ? "border-green-600 text-green-600"
                      : "border-gray-300 text-gray-300"
                  )}
                >
                  {step > index + 1 ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    index + 1
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "w-12 h-0.5 mx-2",
                      step > index + 1 ? "bg-green-600" : "bg-gray-300"
                    )}
                  />
                )}
              </div>
            ))}
          </div>

          <CardTitle className="text-2xl font-bold">
            {currentStep.title}
          </CardTitle>
          <CardDescription>
            {currentStep.description}
          </CardDescription>
        </CardHeader>

        <Tabs defaultValue="phone" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="phone">
              {lang === 'ar' ? "رقم الهاتف" : "Phone"}
            </TabsTrigger>
            <TabsTrigger value="email">
              {lang === 'ar' ? "البريد الإلكتروني" : "Email"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="phone">
            <Form {...phoneForm}>
              <form onSubmit={phoneForm.handleSubmit(onSubmit)} className="space-y-6">
                <CardContent className="space-y-4">
                  {step === 1 && (
                    <>
                      <FormField
                        control={phoneForm.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{lang === 'ar' ? "رقم الهاتف" : "Phone number"}</FormLabel>
                            <div className="relative">
                              <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                              <FormControl>
                                <Input
                                  placeholder={lang === 'ar' ? "أدخل رقم الهاتف (يبدأ بـ 09)" : "Enter phone number (starts with 09)"}
                                  className="pl-10"
                                  dir="ltr"
                                  {...field}
                                />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={phoneForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{lang === 'ar' ? "كلمة المرور" : "Password"}</FormLabel>
                            <div className="relative">
                              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                              <FormControl>
                                <Input
                                  type="password"
                                  placeholder={lang === 'ar' ? "أدخل كلمة المرور" : "Enter your password"}
                                  className="pl-10"
                                  {...field}
                                />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <FormField
                        control={phoneForm.control}
                        name="storeName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{lang === 'ar' ? "اسم المتجر" : "Store name"}</FormLabel>
                            <div className="relative">
                              <Store className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                              <FormControl>
                                <Input
                                  placeholder={lang === 'ar' ? "أدخل اسم المتجر" : "Enter store name"}
                                  className="pl-10"
                                  {...field}
                                />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={phoneForm.control}
                        name="ownerName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{lang === 'ar' ? "اسم المالك" : "Owner name"}</FormLabel>
                            <div className="relative">
                              <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                              <FormControl>
                                <Input
                                  placeholder={lang === 'ar' ? "أدخل اسم المالك" : "Enter owner name"}
                                  className="pl-10"
                                  {...field}
                                />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                </CardContent>

                <CardFooter className="flex flex-col space-y-4">
                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300"
                  >
                    {step === 1 
                      ? lang === 'ar' ? "التالي" : "Next"
                      : lang === 'ar' ? "إنشاء الحساب" : "Create Account"
                    }
                    <Arrow className="ml-2 h-5 w-5" />
                  </Button>

                  {step === 2 && (
                    <Button
                      type="button"
                      variant="ghost"
                      className="w-full"
                      onClick={() => setStep(1)}
                    >
                      {lang === 'ar' ? "العودة" : "Back"}
                    </Button>
                  )}

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
            </Form>
          </TabsContent>

          <TabsContent value="email">
            <Form {...emailForm}>
              <form onSubmit={emailForm.handleSubmit(onSubmit)} className="space-y-6">
                <CardContent className="space-y-4">
                  {step === 1 && (
                    <>
                      <FormField
                        control={emailForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{lang === 'ar' ? "البريد الإلكتروني" : "Email"}</FormLabel>
                            <div className="relative">
                              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                              <FormControl>
                                <Input
                                  placeholder={lang === 'ar' ? "أدخل بريدك الإلكتروني" : "Enter your email"}
                                  className="pl-10"
                                  {...field}
                                />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={emailForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{lang === 'ar' ? "كلمة المرور" : "Password"}</FormLabel>
                            <div className="relative">
                              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                              <FormControl>
                                <Input
                                  type="password"
                                  placeholder={lang === 'ar' ? "أدخل كلمة المرور" : "Enter your password"}
                                  className="pl-10"
                                  {...field}
                                />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <FormField
                        control={emailForm.control}
                        name="storeName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{lang === 'ar' ? "اسم المتجر" : "Store name"}</FormLabel>
                            <div className="relative">
                              <Store className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                              <FormControl>
                                <Input
                                  placeholder={lang === 'ar' ? "أدخل اسم المتجر" : "Enter store name"}
                                  className="pl-10"
                                  {...field}
                                />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={emailForm.control}
                        name="ownerName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{lang === 'ar' ? "اسم المالك" : "Owner name"}</FormLabel>
                            <div className="relative">
                              <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                              <FormControl>
                                <Input
                                  placeholder={lang === 'ar' ? "أدخل اسم المالك" : "Enter owner name"}
                                  className="pl-10"
                                  {...field}
                                />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                </CardContent>

                <CardFooter className="flex flex-col space-y-4">
                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300"
                  >
                    {step === 1 
                      ? lang === 'ar' ? "التالي" : "Next"
                      : lang === 'ar' ? "إنشاء الحساب" : "Create Account"
                    }
                    <Arrow className="ml-2 h-5 w-5" />
                  </Button>

                  {step === 2 && (
                    <Button
                      type="button"
                      variant="ghost"
                      className="w-full"
                      onClick={() => setStep(1)}
                    >
                      {lang === 'ar' ? "العودة" : "Back"}
                    </Button>
                  )}

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
            </Form>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default Register;
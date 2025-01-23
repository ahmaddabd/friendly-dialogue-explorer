import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Mail, Lock, Store, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const emailFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  storeName: z.string().min(3),
  ownerName: z.string().min(3),
});

type EmailFormData = z.infer<typeof emailFormSchema>;

interface EmailRegistrationFormProps {
  onSubmit: (data: EmailFormData) => void;
  step: 1 | 2;
  loading?: boolean;
}

export const EmailRegistrationForm = ({ onSubmit, step, loading }: EmailRegistrationFormProps) => {
  const { lang } = useLanguage();
  
  const form = useForm<EmailFormData>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      email: "",
      password: "",
      storeName: "",
      ownerName: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {step === 1 && (
          <>
            <FormField
              control={form.control}
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
              control={form.control}
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

            <Button 
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700"
              disabled={loading}
            >
              {loading 
                ? (lang === 'ar' ? "جاري المعالجة..." : "Processing...")
                : (lang === 'ar' ? "التالي" : "Next")
              }
            </Button>
          </>
        )}

        {step === 2 && (
          <>
            <FormField
              control={form.control}
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
              control={form.control}
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

            <Button 
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700"
              disabled={loading}
            >
              {loading 
                ? (lang === 'ar' ? "جاري المعالجة..." : "Processing...")
                : (lang === 'ar' ? "إنشاء الحساب" : "Create Account")
              }
            </Button>
          </>
        )}
      </form>
    </Form>
  );
};
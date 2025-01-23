import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLanguage } from "@/hooks/useLanguage";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const emailFormSchema = z.object({
  email: z.string()
    .email("البريد الإلكتروني غير صالح")
    .min(1, "البريد الإلكتروني مطلوب"),
  password: z.string()
    .min(8, "كلمة المرور يجب أن تكون 8 أحرف على الأقل")
    .regex(/[A-Z]/, "يجب أن تحتوي كلمة المرور على حرف كبير واحد على الأقل")
    .regex(/[a-z]/, "يجب أن تحتوي كلمة المرور على حرف صغير واحد على الأقل")
    .regex(/[0-9]/, "يجب أن تحتوي كلمة المرور على رقم واحد على الأقل"),
});

type EmailFormData = z.infer<typeof emailFormSchema>;

interface EmailFormProps {
  onSubmit: (data: EmailFormData) => void;
  loading?: boolean;
}

export const EmailForm = ({ onSubmit, loading }: EmailFormProps) => {
  const { lang } = useLanguage();
  
  const form = useForm<EmailFormData>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange"
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                    type="email"
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
          disabled={loading || !form.formState.isValid}
        >
          {loading 
            ? (lang === 'ar' ? "جاري المعالجة..." : "Processing...")
            : (lang === 'ar' ? "التالي" : "Next")
          }
        </Button>
      </form>
    </Form>
  );
};
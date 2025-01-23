import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Phone, Lock, Store, User } from "lucide-react";

const phoneFormSchema = z.object({
  phone: z.string().regex(/^09\d{8}$/),
  password: z.string().min(8),
  storeName: z.string().min(3),
  ownerName: z.string().min(3),
});

type PhoneFormData = z.infer<typeof phoneFormSchema>;

interface PhoneRegistrationFormProps {
  onSubmit: (data: PhoneFormData) => void;
  step: 1 | 2;
}

export const PhoneRegistrationForm = ({ onSubmit, step }: PhoneRegistrationFormProps) => {
  const { lang } = useLanguage();
  
  const form = useForm<PhoneFormData>({
    resolver: zodResolver(phoneFormSchema),
    defaultValues: {
      phone: "",
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
          </>
        )}
      </form>
    </Form>
  );
};
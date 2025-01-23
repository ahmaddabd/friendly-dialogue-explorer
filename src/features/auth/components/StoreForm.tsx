import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLanguage } from "@/hooks/useLanguage";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Store, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const storeFormSchema = z.object({
  storeName: z.string()
    .min(3, "اسم المتجر يجب أن يكون 3 أحرف على الأقل")
    .max(50, "اسم المتجر يجب أن لا يتجاوز 50 حرف"),
  ownerName: z.string()
    .min(3, "اسم المالك يجب أن يكون 3 أحرف على الأقل")
    .max(50, "اسم المالك يجب أن لا يتجاوز 50 حرف"),
});

type StoreFormData = z.infer<typeof storeFormSchema>;

interface StoreFormProps {
  onSubmit: (data: StoreFormData) => void;
  onBack: () => void;
  loading?: boolean;
}

export const StoreForm = ({ onSubmit, onBack, loading }: StoreFormProps) => {
  const { lang } = useLanguage();
  
  const form = useForm<StoreFormData>({
    resolver: zodResolver(storeFormSchema),
    defaultValues: {
      storeName: "",
      ownerName: "",
    },
    mode: "onChange"
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

        <div className="flex flex-col space-y-2">
          <Button 
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700"
            disabled={loading || !form.formState.isValid}
          >
            {loading 
              ? (lang === 'ar' ? "جاري المعالجة..." : "Processing...")
              : (lang === 'ar' ? "إنشاء المتجر" : "Create Store")
            }
          </Button>

          <Button
            type="button"
            variant="ghost"
            className="w-full hover:bg-green-50"
            onClick={onBack}
          >
            {lang === 'ar' ? "رجوع" : "Back"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
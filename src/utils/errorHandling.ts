import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/useLanguage";

export const handleError = (error: any) => {
  const { lang } = useLanguage();
  
  console.error('Error:', error);

  // Handle Supabase errors
  if (error?.code === 'PGRST301') {
    toast({
      title: lang === 'ar' ? "خطأ في الصلاحيات" : "Permission Error",
      description: lang === 'ar' 
        ? "ليس لديك صلاحية للقيام بهذا الإجراء" 
        : "You don't have permission to perform this action",
      variant: "destructive"
    });
    return;
  }

  // Handle network errors
  if (error?.message === 'Failed to fetch') {
    toast({
      title: lang === 'ar' ? "خطأ في الاتصال" : "Network Error",
      description: lang === 'ar'
        ? "يرجى التحقق من اتصالك بالإنترنت"
        : "Please check your internet connection",
      variant: "destructive"
    });
    return;
  }

  // Handle validation errors
  if (error?.validation) {
    toast({
      title: lang === 'ar' ? "خطأ في البيانات" : "Validation Error",
      description: error.message,
      variant: "destructive"
    });
    return;
  }

  // Default error message
  toast({
    title: lang === 'ar' ? "خطأ" : "Error",
    description: error?.message || (
      lang === 'ar' 
        ? "حدث خطأ غير متوقع"
        : "An unexpected error occurred"
    ),
    variant: "destructive"
  });
};
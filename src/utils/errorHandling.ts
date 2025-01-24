import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/hooks/useLanguage";

export const useErrorHandler = () => {
  const { toast } = useToast();
  const { lang } = useLanguage();

  const handleError = (error: unknown) => {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    
    toast({
      variant: "destructive",
      title: lang === 'ar' ? "حدث خطأ" : "Error occurred",
      description: errorMessage,
    });

    console.error("Error details:", error);
  };

  return { handleError };
};

export const formatErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  
  if (typeof error === 'string') {
    return error;
  }
  
  return 'An unknown error occurred';
};
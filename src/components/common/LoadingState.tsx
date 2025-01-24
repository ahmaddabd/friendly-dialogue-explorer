import { LoadingSpinner } from "./LoadingSpinner";
import { useLanguage } from "@/hooks/useLanguage";

interface LoadingStateProps {
  message?: string;
}

export const LoadingState = ({ message }: LoadingStateProps) => {
  const { lang } = useLanguage();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] space-y-4">
      <LoadingSpinner size="lg" className="text-green-600" />
      <p className="text-gray-600">
        {message || (lang === 'ar' ? "جاري التحميل..." : "Loading...")}
      </p>
    </div>
  );
};
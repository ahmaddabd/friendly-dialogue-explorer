import { Component, ErrorInfo, ReactNode } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-50 p-4">
          <div className="text-center space-y-4">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto" />
            <h1 className="text-2xl font-bold text-gray-900">
              {useLanguage().lang === 'ar' ? "حدث خطأ غير متوقع" : "Something went wrong"}
            </h1>
            <p className="text-gray-600 max-w-md mx-auto">
              {this.state.error?.message}
            </p>
            <Button
              onClick={() => window.location.reload()}
              variant="destructive"
            >
              {useLanguage().lang === 'ar' ? "إعادة تحميل الصفحة" : "Reload page"}
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
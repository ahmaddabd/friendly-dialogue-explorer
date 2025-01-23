import React from 'react';
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { useLanguage } from './LanguageSwitcher';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback onReset={() => this.setState({ hasError: false })} />;
    }

    return this.props.children;
  }
}

const ErrorFallback = ({ onReset }: { onReset: () => void }) => {
  const { lang } = useLanguage();
  
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center p-6 text-center animate-fade-in">
      <AlertTriangle className="w-16 h-16 text-red-500 mb-4 animate-bounce" />
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        {lang === 'ar' ? "عذراً، حدث خطأ ما" : "Oops, something went wrong"}
      </h2>
      <p className="text-gray-600 mb-6">
        {lang === 'ar' 
          ? "نواجه بعض المشاكل. يرجى المحاولة مرة أخرى."
          : "We're experiencing some issues. Please try again."
        }
      </p>
      <Button 
        onClick={onReset}
        className="bg-green-600 hover:bg-green-700"
      >
        {lang === 'ar' ? "حاول مرة أخرى" : "Try Again"}
      </Button>
    </div>
  );
};
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./components/LanguageSwitcher";
import { lazy, Suspense, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load pages with prefetching
const Index = lazy(() => import("./pages/Index"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

// Configure QueryClient with performance optimizations
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <Skeleton className="w-[300px] h-[400px]" />
  </div>
);

const App = () => {
  // Prefetch routes
  useEffect(() => {
    const prefetchRoutes = async () => {
      if ('requestIdleCallback' in window) {
        // @ts-ignore - requestIdleCallback is not in TypeScript's lib
        window.requestIdleCallback(() => {
          import('./pages/Login');
          import('./pages/Register');
        });
      }
    };
    prefetchRoutes();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
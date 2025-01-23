import { MainLayout } from "@/layouts/MainLayout";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-green-50/50 via-white to-green-50/50 animate-gradient-x relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <Hero />
          <Suspense fallback={<Skeleton className="h-40 bg-green-100/20 animate-pulse" />}>
            <Stats />
          </Suspense>
          <Suspense fallback={<Skeleton className="h-96 bg-green-100/20 animate-pulse" />}>
            <Features />
          </Suspense>
          <Suspense fallback={<Skeleton className="h-96 bg-green-100/20 animate-pulse" />}>
            <Testimonials />
          </Suspense>
          <Suspense fallback={<Skeleton className="h-96 bg-green-100/20 animate-pulse" />}>
            <FAQ />
          </Suspense>
          <CTA />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
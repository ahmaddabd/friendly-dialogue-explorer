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
      <div className="min-h-screen bg-gradient-to-br from-green-50/50 via-white to-green-50/50 animate-gradient-x">
        <Hero />
        <Suspense fallback={<Skeleton className="h-40 bg-green-100/20" />}>
          <Stats />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-96 bg-green-100/20" />}>
          <Features />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-96 bg-green-100/20" />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-96 bg-green-100/20" />}>
          <FAQ />
        </Suspense>
        <CTA />
      </div>
    </MainLayout>
  );
};

export default Index;
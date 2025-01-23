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
      <div className="min-h-screen bg-gradient-to-b from-green-50/50">
        <Hero />
        <Suspense fallback={<Skeleton className="h-40" />}>
          <Stats />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-96" />}>
          <Features />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-96" />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-96" />}>
          <FAQ />
        </Suspense>
        <CTA />
      </div>
    </MainLayout>
  );
};

export default Index;
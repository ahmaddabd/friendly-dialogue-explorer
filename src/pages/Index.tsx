import { MainLayout } from "@/layouts/MainLayout";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { FeaturedStores } from "@/components/sections/FeaturedStores";
import { LatestStores } from "@/components/sections/LatestStores";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-green-50/80 via-white to-green-50/80 animate-gradient-x relative overflow-hidden">
        {/* Decorative arabesque patterns */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[url('/arabesque-pattern.svg')] opacity-5 transform -rotate-45" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[url('/arabesque-pattern.svg')] opacity-5 transform rotate-135" />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute top-0 -left-4 w-72 h-72 bg-green-200/50 rounded-full mix-blend-multiply filter blur-xl"
            style={{
              backgroundImage: "radial-gradient(circle at center, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.1))"
            }}
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute top-0 -right-4 w-72 h-72 bg-green-300/50 rounded-full mix-blend-multiply filter blur-xl"
            style={{
              backgroundImage: "radial-gradient(circle at center, rgba(34, 197, 94, 0.3), rgba(34, 197, 94, 0.1))"
            }}
          />
        </div>

        <div className="relative z-10">
          <Suspense 
            fallback={
              <div className="pt-32 px-4">
                <Skeleton className="h-[400px] w-full max-w-4xl mx-auto rounded-2xl animate-pulse bg-green-100/20" />
              </div>
            }
          >
            <Hero />
          </Suspense>

          <Suspense 
            fallback={
              <div className="py-20 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-40 rounded-xl animate-pulse bg-green-100/20" />
                  ))}
                </div>
              </div>
            }
          >
            <Stats />
          </Suspense>

          <Suspense 
            fallback={
              <div className="py-20 px-4">
                <Skeleton className="h-[600px] w-full max-w-6xl mx-auto rounded-2xl animate-pulse bg-green-100/20" />
              </div>
            }
          >
            <Features />
          </Suspense>

          <Suspense 
            fallback={
              <div className="py-20 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-64 rounded-xl animate-pulse bg-green-100/20" />
                  ))}
                </div>
              </div>
            }
          >
            <FeaturedStores />
          </Suspense>

          <Suspense 
            fallback={
              <div className="py-20 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-64 rounded-xl animate-pulse bg-green-100/20" />
                  ))}
                </div>
              </div>
            }
          >
            <LatestStores />
          </Suspense>

          <Suspense 
            fallback={
              <div className="py-20 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-64 rounded-xl animate-pulse bg-green-100/20" />
                  ))}
                </div>
              </div>
            }
          >
            <Testimonials />
          </Suspense>

          <Suspense 
            fallback={
              <div className="py-20 px-4">
                <Skeleton className="h-[400px] w-full max-w-4xl mx-auto rounded-2xl animate-pulse bg-green-100/20" />
              </div>
            }
          >
            <FAQ />
          </Suspense>

          <CTA />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
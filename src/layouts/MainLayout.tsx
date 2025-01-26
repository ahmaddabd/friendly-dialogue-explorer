import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

interface MainLayoutProps {
  children: React.ReactNode;
  showAnnouncement?: boolean;
}

export const MainLayout = ({ children, showAnnouncement = true }: MainLayoutProps) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 via-white to-amber-50 relative overflow-hidden">
      {/* Enhanced decorative background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Animated geometric patterns */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-br from-amber-200/30 via-amber-100/20 to-transparent rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-0 -right-4 w-96 h-96 bg-gradient-to-bl from-amber-300/30 via-amber-200/20 to-transparent rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-tr from-amber-100/30 via-amber-50/20 to-transparent rounded-full mix-blend-multiply filter blur-xl"
        />
      </div>

      {/* Decorative arabesque patterns */}
      <div className="absolute inset-0 bg-[url('/arabesque-pattern.svg')] opacity-5" />

      {showAnnouncement && <AnnouncementBar />}
      <Navigation />
      
      <main className="flex-grow animate-fade-in relative z-10">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};
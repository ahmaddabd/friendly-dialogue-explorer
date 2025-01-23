import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-green-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {showAnnouncement && <AnnouncementBar />}
      <Navigation />
      
      <main className="flex-grow animate-fade-in relative z-10">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};
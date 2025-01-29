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
    <div className="min-h-screen flex flex-col salla-theme">
      {/* Salla-style top bar */}
      {showAnnouncement && <AnnouncementBar />}
      <Navigation />
      
      <main className="flex-grow animate-fade-in relative z-10">
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
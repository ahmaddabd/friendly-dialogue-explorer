import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar";

interface MainLayoutProps {
  children: React.ReactNode;
  showAnnouncement?: boolean;
}

export const MainLayout = ({ children, showAnnouncement = true }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-green-50">
      {showAnnouncement && <AnnouncementBar />}
      <Navigation />
      <main className="flex-grow animate-fade-in">
        {children}
      </main>
      <Footer />
    </div>
  );
};
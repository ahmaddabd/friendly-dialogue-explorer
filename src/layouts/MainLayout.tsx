import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar";

interface MainLayoutProps {
  children: React.ReactNode;
  showAnnouncement?: boolean;
}

export const MainLayout = ({ children, showAnnouncement = true }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {showAnnouncement && <AnnouncementBar />}
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
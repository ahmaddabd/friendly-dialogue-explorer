import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FeatureCard } from "@/components/FeatureCard";
import { content, theme } from "@/config/content";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl font-bold text-green-800 mb-4 animate-fade-in">
            <span className="font-arabic text-6xl block mb-2 hover:scale-105 transition-transform duration-300">
              {content.hero.title.ar}
            </span>
            <span className="text-4xl text-gray-700">
              {content.hero.title.en}
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            <span className="block font-arabic mb-2 animate-fade-in">
              {content.hero.subtitle.ar}
            </span>
            <span className="block animate-fade-in">
              {content.hero.subtitle.en}
            </span>
          </p>
          
          <p className="text-lg text-gray-700 mb-8">
            <span className="block font-arabic mb-2 animate-fade-in">
              {content.hero.description.ar}
            </span>
            <span className="block animate-fade-in">
              {content.hero.description.en}
            </span>
          </p>

          <div className="flex justify-center gap-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105">
              ابدأ الآن
              <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
            <span className="block font-arabic mb-2">مميزات دكان تك</span>
            <span className="block text-2xl text-gray-600">Dikantek Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {content.features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                titleAr={feature.title.ar}
                titleEn={feature.title.en}
                descriptionAr={feature.description.ar}
                descriptionEn={feature.description.en}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
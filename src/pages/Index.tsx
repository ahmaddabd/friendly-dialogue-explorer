import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FeatureCard } from "@/components/FeatureCard";
import { content, theme } from "@/config/content";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-white">
      <Card className="w-[90%] max-w-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold mb-2 text-green-800 animate-fade-in">
            <span className="font-arabic text-5xl block mb-2 hover:scale-105 transition-transform duration-300">
              {content.hero.title.ar}
            </span>
            <span className="text-3xl text-gray-700">
              {content.hero.title.en}
            </span>
          </CardTitle>
          <CardDescription className="text-xl text-gray-600">
            <span className="block font-arabic mb-1 animate-fade-in">
              {content.hero.subtitle.ar}
            </span>
            {content.hero.subtitle.en}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center p-6">
          <p className="text-lg text-gray-700 mb-4 font-arabic animate-fade-in">
            {content.hero.description.ar}
          </p>
          <p className="text-lg text-gray-700 mb-4 animate-fade-in">
            {content.hero.description.en}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
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
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
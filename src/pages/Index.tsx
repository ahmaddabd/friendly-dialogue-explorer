import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, ShieldCheck, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-white">
      <Card className="w-[90%] max-w-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold mb-2 text-green-800 animate-fade-in">
            <span className="font-arabic text-5xl block mb-2 hover:scale-105 transition-transform duration-300">دكان تك</span>
            <span className="text-3xl text-gray-700">Dikantek</span>
          </CardTitle>
          <CardDescription className="text-xl text-gray-600">
            <span className="block font-arabic mb-1 animate-fade-in">منصتك لإدارة المتجر الرقمي</span>
            Your Digital Store Management Platform
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center p-6">
          <p className="text-lg text-gray-700 mb-4 font-arabic animate-fade-in">
            منصة موثوقة لإدارة متجرك بكفاءة عالية
          </p>
          <p className="text-lg text-gray-700 mb-4 animate-fade-in">
            A trusted platform for efficient store management
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-md">
              <Store className="w-8 h-8 text-green-700 mx-auto mb-3" />
              <h3 className="font-semibold text-green-800 mb-2">جميع أنواع المتاجر</h3>
              <h3 className="font-semibold text-green-800 mb-2">All Store Types</h3>
              <p className="text-gray-600">تجارية، صناعية، خدمية</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-md">
              <ShieldCheck className="w-8 h-8 text-green-700 mx-auto mb-3" />
              <h3 className="font-semibold text-green-800 mb-2">سوق موثوق</h3>
              <h3 className="font-semibold text-green-800 mb-2">Trusted Market</h3>
              <p className="text-gray-600">متاجر موثقة رسمياً</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-md">
              <MapPin className="w-8 h-8 text-green-700 mx-auto mb-3" />
              <h3 className="font-semibold text-green-800 mb-2">متوفر في دمشق</h3>
              <h3 className="font-semibold text-green-800 mb-2">Available in Damascus</h3>
              <p className="text-gray-600">قريباً في جميع أنحاء سوريا</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
      <Card className="w-[90%] max-w-3xl shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold mb-2 text-green-800">
            <span className="font-arabic text-5xl block mb-2">دكان تك</span>
            <span className="text-3xl text-gray-700">Dikantek</span>
          </CardTitle>
          <CardDescription className="text-xl text-gray-600">
            <span className="block font-arabic mb-1">منصتك لإدارة المتجر الرقمي</span>
            Your Digital Store Management Platform
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center p-6">
          <p className="text-lg text-gray-700 mb-4 font-arabic">
            منصة موثوقة لإدارة متجرك بكفاءة عالية
          </p>
          <p className="text-lg text-gray-700 mb-4">
            A trusted platform for efficient store management
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">جميع أنواع المتاجر</h3>
              <h3 className="font-semibold text-green-800 mb-2">All Store Types</h3>
              <p className="text-gray-600">تجارية، صناعية، خدمية</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">سوق موثوق</h3>
              <h3 className="font-semibold text-green-800 mb-2">Trusted Market</h3>
              <p className="text-gray-600">متاجر موثقة رسمياً</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
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
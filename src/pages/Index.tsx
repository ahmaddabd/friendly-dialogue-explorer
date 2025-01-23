import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white">
      <Card className="w-[90%] max-w-3xl shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold mb-2 text-[#9b87f5]">
            <span className="font-arabic text-5xl block mb-2">دكان تك</span>
            <span className="text-3xl text-gray-700">Dilantek</span>
          </CardTitle>
          <CardDescription className="text-xl text-gray-600">
            Your Digital Store Management Platform
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center p-6">
          <p className="text-lg text-gray-700 mb-4">
            Empower your business with our comprehensive merchant services platform
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-[#7E69AB] mb-2">Easy Management</h3>
              <p className="text-gray-600">Manage your store with powerful tools</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-[#7E69AB] mb-2">Growth Focus</h3>
              <p className="text-gray-600">Focus on growing your business</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
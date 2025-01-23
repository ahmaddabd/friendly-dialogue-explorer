import { useState } from "react";
import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Store } from "lucide-react";

const CreateStore = () => {
  const { lang } = useLanguage();
  const { toast } = useToast();
  const [storeName, setStoreName] = useState("");
  const [storeDescription, setStoreDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // هنا سيتم إضافة منطق إنشاء المتجر لاحقاً
    toast({
      title: lang === 'ar' ? "تم إنشاء المتجر بنجاح" : "Store created successfully",
      description: storeName,
      className: "bg-green-50 border-green-200",
    });
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Store className="w-12 h-12 mx-auto text-green-600 mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {lang === 'ar' ? "إنشاء متجر جديد" : "Create New Store"}
            </h1>
            <p className="text-gray-600">
              {lang === 'ar' 
                ? "قم بإنشاء متجرك الإلكتروني في دقائق"
                : "Create your online store in minutes"
              }
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-sm">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                {lang === 'ar' ? "اسم المتجر" : "Store Name"}
              </label>
              <Input
                type="text"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                placeholder={lang === 'ar' ? "أدخل اسم المتجر" : "Enter store name"}
                className="w-full"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                {lang === 'ar' ? "وصف المتجر" : "Store Description"}
              </label>
              <Input
                type="text"
                value={storeDescription}
                onChange={(e) => setStoreDescription(e.target.value)}
                placeholder={lang === 'ar' ? "أدخل وصف المتجر" : "Enter store description"}
                className="w-full"
                required
              />
            </div>

            <Button 
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700"
            >
              {lang === 'ar' ? "إنشاء المتجر" : "Create Store"}
            </Button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default CreateStore;
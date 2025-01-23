import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/components/auth/AuthProvider";
import { MainLayout } from "@/layouts/MainLayout";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Products = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { lang } = useLanguage();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            {lang === 'ar' ? "المنتجات" : "Products"}
          </h1>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="w-4 h-4 mr-2" />
            {lang === 'ar' ? "إضافة منتج" : "Add Product"}
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500 text-center py-8">
            {lang === 'ar' ? "لا توجد منتجات حالياً" : "No products yet"}
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Products;
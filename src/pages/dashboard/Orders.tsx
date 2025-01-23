import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/components/auth/AuthProvider";
import { MainLayout } from "@/layouts/MainLayout";
import { useLanguage } from "@/components/LanguageSwitcher";

const Orders = () => {
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
        <h1 className="text-3xl font-bold mb-8">
          {lang === 'ar' ? "الطلبات" : "Orders"}
        </h1>

        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500 text-center py-8">
            {lang === 'ar' ? "لا توجد طلبات حالياً" : "No orders yet"}
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Orders;
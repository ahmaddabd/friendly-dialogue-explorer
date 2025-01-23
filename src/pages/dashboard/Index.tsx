import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/components/auth/AuthProvider";
import { MainLayout } from "@/layouts/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Store, Package, ShoppingCart, Users } from "lucide-react";

const Dashboard = () => {
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

  const stats = [
    {
      title: lang === 'ar' ? "المنتجات" : "Products",
      value: "0",
      icon: Package,
      color: "text-blue-600",
    },
    {
      title: lang === 'ar' ? "الطلبات" : "Orders",
      value: "0",
      icon: ShoppingCart,
      color: "text-green-600",
    },
    {
      title: lang === 'ar' ? "العملاء" : "Customers",
      value: "0",
      icon: Users,
      color: "text-purple-600",
    },
    {
      title: lang === 'ar' ? "المبيعات" : "Sales",
      value: "0 ريال",
      icon: Store,
      color: "text-orange-600",
    },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">
          {lang === 'ar' ? "لوحة التحكم" : "Dashboard"}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
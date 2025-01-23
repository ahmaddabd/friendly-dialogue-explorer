import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/components/auth/AuthProvider";
import { MainLayout } from "@/layouts/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Store, Package, ShoppingCart, Users, TrendingUp, DollarSign, BarChart2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

const Dashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { lang } = useLanguage();

  // Fetch store data
  const { data: stores } = useQuery({
    queryKey: ["stores", user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("stores")
        .select("id, name")
        .eq("owner_id", user?.id);

      if (error) throw error;
      return data;
    },
    enabled: !!user?.id,
  });

  // Fetch orders data for KPIs
  const { data: kpiData, isLoading: loadingKPIs } = useQuery({
    queryKey: ["orders-kpi", stores?.map(store => store.id)],
    queryFn: async () => {
      if (!stores?.length) return null;

      const { data: orders, error } = await supabase
        .from("orders")
        .select("total, created_at, status")
        .in("store_id", stores.map(store => store.id))
        .order("created_at", { ascending: false });

      if (error) throw error;

      // Calculate KPIs
      const totalSales = orders?.reduce((sum, order) => sum + Number(order.total), 0) || 0;
      const totalOrders = orders?.length || 0;
      const averageOrderValue = totalOrders > 0 ? totalSales / totalOrders : 0;

      // Calculate growth (comparing current month with previous month)
      const now = new Date();
      const currentMonth = orders?.filter(order => {
        const orderDate = new Date(order.created_at);
        return orderDate.getMonth() === now.getMonth();
      });
      const previousMonth = orders?.filter(order => {
        const orderDate = new Date(order.created_at);
        return orderDate.getMonth() === now.getMonth() - 1;
      });

      const currentMonthSales = currentMonth?.reduce((sum, order) => sum + Number(order.total), 0) || 0;
      const previousMonthSales = previousMonth?.reduce((sum, order) => sum + Number(order.total), 0) || 0;
      
      const growthRate = previousMonthSales > 0 
        ? ((currentMonthSales - previousMonthSales) / previousMonthSales) * 100 
        : 0;

      return {
        totalSales,
        totalOrders,
        averageOrderValue,
        growthRate
      };
    },
    enabled: !!stores?.length,
  });

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
      title: lang === 'ar' ? "إجمالي المبيعات" : "Total Sales",
      value: loadingKPIs 
        ? <Skeleton className="h-7 w-24" /> 
        : `${kpiData?.totalSales?.toFixed(2) || 0} ${lang === 'ar' ? 'ريال' : 'SAR'}`,
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: lang === 'ar' ? "عدد الطلبات" : "Total Orders",
      value: loadingKPIs 
        ? <Skeleton className="h-7 w-16" /> 
        : kpiData?.totalOrders || 0,
      icon: ShoppingCart,
      color: "text-blue-600",
    },
    {
      title: lang === 'ar' ? "متوسط قيمة الطلب" : "Average Order Value",
      value: loadingKPIs 
        ? <Skeleton className="h-7 w-24" /> 
        : `${kpiData?.averageOrderValue?.toFixed(2) || 0} ${lang === 'ar' ? 'ريال' : 'SAR'}`,
      icon: BarChart2,
      color: "text-purple-600",
    },
    {
      title: lang === 'ar' ? "نسبة النمو الشهري" : "Monthly Growth",
      value: loadingKPIs 
        ? <Skeleton className="h-7 w-16" /> 
        : `${kpiData?.growthRate?.toFixed(1) || 0}%`,
      icon: TrendingUp,
      color: kpiData?.growthRate >= 0 ? "text-green-600" : "text-red-600",
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
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
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
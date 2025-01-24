import { DashboardLayout } from "@/layouts/DashboardLayout";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Overview } from "@/components/dashboard/Overview";
import { RecentSales } from "@/components/dashboard/RecentSales";
import { 
  DollarSign, 
  Users, 
  CreditCard, 
  Activity,
  Package,
  ShoppingCart,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

const Dashboard = () => {
  const { lang } = useLanguage();

  const stats = [
    {
      title: lang === 'ar' ? "إجمالي الإيرادات" : "Total Revenue",
      value: "$45,231.89",
      description: lang === 'ar' ? "↗︎ 20.1% من الشهر الماضي" : "↗︎ 20.1% from last month",
      icon: DollarSign,
      trend: "up",
    },
    {
      title: lang === 'ar' ? "المبيعات" : "Sales",
      value: "+2350",
      description: lang === 'ar' ? "↘︎ 4% من الشهر الماضي" : "↘︎ 4% from last month",
      icon: CreditCard,
      trend: "down",
    },
    {
      title: lang === 'ar' ? "العملاء النشطون" : "Active Users",
      value: "+12,234",
      description: lang === 'ar' ? "↗︎ 11% من الشهر الماضي" : "↗︎ 11% from last month",
      icon: Users,
      trend: "up",
    },
    {
      title: lang === 'ar' ? "معدل النشاط" : "Activity Rate",
      value: "573",
      description: lang === 'ar' ? "↗︎ 7% من الشهر الماضي" : "↗︎ 7% from last month",
      icon: Activity,
      trend: "up",
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            {lang === 'ar' ? "لوحة التحكم" : "Dashboard"}
          </h2>
          <div className="flex items-center space-x-2">
            <Button>
              {lang === 'ar' ? "تحميل التقرير" : "Download Report"}
            </Button>
          </div>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>
                {lang === 'ar' ? "نظرة عامة" : "Overview"}
              </CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>
                {lang === 'ar' ? "آخر المبيعات" : "Recent Sales"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RecentSales />
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
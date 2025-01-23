import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/components/auth/AuthProvider";
import { MainLayout } from "@/layouts/MainLayout";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Settings = () => {
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
          {lang === 'ar' ? "الإعدادات" : "Settings"}
        </h1>

        <Tabs defaultValue="general" className="space-y-4">
          <TabsList>
            <TabsTrigger value="general">
              {lang === 'ar' ? "عام" : "General"}
            </TabsTrigger>
            <TabsTrigger value="appearance">
              {lang === 'ar' ? "المظهر" : "Appearance"}
            </TabsTrigger>
            <TabsTrigger value="shipping">
              {lang === 'ar' ? "الشحن" : "Shipping"}
            </TabsTrigger>
            <TabsTrigger value="payment">
              {lang === 'ar' ? "الدفع" : "Payment"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>
                  {lang === 'ar' ? "الإعدادات العامة" : "General Settings"}
                </CardTitle>
                <CardDescription>
                  {lang === 'ar' 
                    ? "إدارة الإعدادات الأساسية لمتجرك"
                    : "Manage your store's basic settings"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* سيتم إضافة نموذج الإعدادات العامة هنا */}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appearance">
            <Card>
              <CardHeader>
                <CardTitle>
                  {lang === 'ar' ? "إعدادات المظهر" : "Appearance Settings"}
                </CardTitle>
                <CardDescription>
                  {lang === 'ar'
                    ? "تخصيص مظهر متجرك"
                    : "Customize your store's appearance"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* سيتم إضافة نموذج إعدادات المظهر هنا */}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shipping">
            <Card>
              <CardHeader>
                <CardTitle>
                  {lang === 'ar' ? "إعدادات الشحن" : "Shipping Settings"}
                </CardTitle>
                <CardDescription>
                  {lang === 'ar'
                    ? "إدارة طرق وتكاليف الشحن"
                    : "Manage shipping methods and costs"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* سيتم إضافة نموذج إعدادات الشحن هنا */}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment">
            <Card>
              <CardHeader>
                <CardTitle>
                  {lang === 'ar' ? "إعدادات الدفع" : "Payment Settings"}
                </CardTitle>
                <CardDescription>
                  {lang === 'ar'
                    ? "إدارة طرق الدفع وبوابات الدفع"
                    : "Manage payment methods and gateways"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* سيتم إضافة نموذج إعدادات الدفع هنا */}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Settings;
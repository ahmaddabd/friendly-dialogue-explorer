import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/components/auth/AuthProvider";
import { MainLayout } from "@/layouts/MainLayout";
import { useLanguage } from "@/components/LanguageSwitcher";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

const Orders = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const { toast } = useToast();
  const [selectedStore, setSelectedStore] = useState<string | null>(null);

  // Fetch user's stores
  const { data: stores, isLoading: loadingStores } = useQuery({
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

  // Set first store as default when stores are loaded
  useEffect(() => {
    if (stores?.length > 0 && !selectedStore) {
      setSelectedStore(stores[0].id);
    }
  }, [stores, selectedStore]);

  // Fetch orders for selected store
  const { data: orders, isLoading: loadingOrders } = useQuery({
    queryKey: ["orders", selectedStore],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("store_id", selectedStore)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
    enabled: !!selectedStore,
  });

  // Update order status
  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    const { error } = await supabase
      .from("orders")
      .update({ status: newStatus })
      .eq("id", orderId);

    if (error) {
      toast({
        title: lang === "ar" ? "خطأ" : "Error",
        description:
          lang === "ar"
            ? "حدث خطأ أثناء تحديث حالة الطلب"
            : "Error updating order status",
        variant: "destructive",
      });
    } else {
      toast({
        title: lang === "ar" ? "تم التحديث" : "Updated",
        description:
          lang === "ar"
            ? "تم تحديث حالة الطلب بنجاح"
            : "Order status updated successfully",
      });
    }
  };

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  if (loading || loadingStores) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </MainLayout>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            {lang === "ar" ? "الطلبات" : "Orders"}
          </h1>

          {stores && stores.length > 0 && (
            <Select
              value={selectedStore || ""}
              onValueChange={(value) => setSelectedStore(value)}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue
                  placeholder={lang === "ar" ? "اختر المتجر" : "Select store"}
                />
              </SelectTrigger>
              <SelectContent>
                {stores.map((store) => (
                  <SelectItem key={store.id} value={store.id}>
                    {store.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>

        {loadingOrders ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : orders && orders.length > 0 ? (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    {lang === "ar" ? "رقم الطلب" : "Order Number"}
                  </TableHead>
                  <TableHead>{lang === "ar" ? "العميل" : "Customer"}</TableHead>
                  <TableHead>{lang === "ar" ? "المجموع" : "Total"}</TableHead>
                  <TableHead>{lang === "ar" ? "الحالة" : "Status"}</TableHead>
                  <TableHead>
                    {lang === "ar" ? "تاريخ الطلب" : "Order Date"}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.order_number}</TableCell>
                    <TableCell>{order.customer_name}</TableCell>
                    <TableCell>
                      {order.total} {lang === "ar" ? "ريال" : "SAR"}
                    </TableCell>
                    <TableCell>
                      <Select
                        value={order.status || "pending"}
                        onValueChange={(value) => updateOrderStatus(order.id, value)}
                      >
                        <SelectTrigger
                          className={`w-[140px] ${getStatusColor(
                            order.status || "pending"
                          )}`}
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">
                            {lang === "ar" ? "قيد الانتظار" : "Pending"}
                          </SelectItem>
                          <SelectItem value="processing">
                            {lang === "ar" ? "قيد المعالجة" : "Processing"}
                          </SelectItem>
                          <SelectItem value="completed">
                            {lang === "ar" ? "مكتمل" : "Completed"}
                          </SelectItem>
                          <SelectItem value="cancelled">
                            {lang === "ar" ? "ملغي" : "Cancelled"}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      {new Date(order.created_at).toLocaleDateString(
                        lang === "ar" ? "ar-SA" : "en-US"
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-500 text-center py-8">
              {lang === "ar" ? "لا توجد طلبات حالياً" : "No orders yet"}
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Orders;
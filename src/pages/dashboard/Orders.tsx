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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Printer, Eye } from "lucide-react";
import { sendOrderNotification } from "@/utils/orderNotifications";

// Add the getStatusColor function
const getStatusColor = (status: string) => {
  switch (status) {
    case "pending":
      return "text-yellow-600 bg-yellow-100";
    case "processing":
      return "text-blue-600 bg-blue-100";
    case "completed":
      return "text-green-600 bg-green-100";
    case "cancelled":
      return "text-red-600 bg-red-100";
    default:
      return "text-gray-600 bg-gray-100";
  }
};

const Orders = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const { toast } = useToast();
  const [selectedStore, setSelectedStore] = useState<string | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);

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

  // Enhanced orders query to include store details
  const { data: orders, isLoading: loadingOrders } = useQuery({
    queryKey: ["orders", selectedStore],
    queryFn: async () => {
      const { data: ordersData, error } = await supabase
        .from("orders")
        .select(`
          *,
          store:stores(
            name,
            email
          )
        `)
        .eq("store_id", selectedStore)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return ordersData;
    },
    enabled: !!selectedStore,
  });

  // Update order status with notification
  const updateOrderStatus = async (orderId: string, newStatus: string, order: any) => {
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
      // Send notification email if customer email exists
      if (order.customer_email) {
        const notificationResult = await sendOrderNotification({
          to: order.customer_email,
          orderNumber: order.order_number,
          status: newStatus,
          customerName: order.customer_name,
          storeName: order.store.name,
          lang,
        });

        if (notificationResult.success) {
          toast({
            title: lang === "ar" ? "تم التحديث" : "Updated",
            description:
              lang === "ar"
                ? "تم تحديث حالة الطلب وإرسال إشعار للعميل"
                : "Order status updated and notification sent",
          });
        }
      } else {
        toast({
          title: lang === "ar" ? "تم التحديث" : "Updated",
          description:
            lang === "ar"
              ? "تم تحديث حالة الطلب"
              : "Order status updated successfully",
        });
      }
    }
  };

  const printOrder = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const orderDetails = selectedOrder;
    const storeInfo = orderDetails.store;

    const printContent = `
      <html dir="${lang === "ar" ? "rtl" : "ltr"}">
        <head>
          <title>${lang === "ar" ? "فاتورة طلب" : "Order Invoice"} #${
      orderDetails.order_number
    }</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            .header { text-align: center; margin-bottom: 30px; }
            .details { margin-bottom: 20px; }
            .table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            .table th, .table td { border: 1px solid #ddd; padding: 8px; text-align: ${
              lang === "ar" ? "right" : "left"
            }; }
            .total { text-align: ${lang === "ar" ? "left" : "right"}; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>${storeInfo.name}</h1>
            <p>${
              lang === "ar" ? "رقم الطلب" : "Order Number"
            }: ${orderDetails.order_number}</p>
            <p>${
              lang === "ar" ? "تاريخ الطلب" : "Order Date"
            }: ${new Date(orderDetails.created_at).toLocaleDateString(
      lang === "ar" ? "ar-SA" : "en-US"
    )}</p>
          </div>
          
          <div class="details">
            <h3>${lang === "ar" ? "تفاصيل العميل" : "Customer Details"}</h3>
            <p>${lang === "ar" ? "الاسم" : "Name"}: ${
      orderDetails.customer_name
    }</p>
            <p>${lang === "ar" ? "الهاتف" : "Phone"}: ${
      orderDetails.customer_phone
    }</p>
            ${
              orderDetails.customer_email
                ? `<p>${lang === "ar" ? "البريد الإلكتروني" : "Email"}: ${
                    orderDetails.customer_email
                  }</p>`
                : ""
            }
          </div>

          <table class="table">
            <thead>
              <tr>
                <th>${lang === "ar" ? "المنتج" : "Product"}</th>
                <th>${lang === "ar" ? "الكمية" : "Quantity"}</th>
                <th>${lang === "ar" ? "السعر" : "Price"}</th>
                <th>${lang === "ar" ? "المجموع" : "Total"}</th>
              </tr>
            </thead>
            <tbody>
              ${orderDetails.items
                .map(
                  (item: any) => `
                <tr>
                  <td>${item.name}</td>
                  <td>${item.quantity}</td>
                  <td>${item.price} ${lang === "ar" ? "ريال" : "SAR"}</td>
                  <td>${item.quantity * item.price} ${
                    lang === "ar" ? "ريال" : "SAR"
                  }</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>

          <div class="total">
            <p>${lang === "ar" ? "المجموع الفرعي" : "Subtotal"}: ${
      orderDetails.subtotal
    } ${lang === "ar" ? "ريال" : "SAR"}</p>
            <p>${lang === "ar" ? "الشحن" : "Shipping"}: ${
      orderDetails.shipping_cost
    } ${lang === "ar" ? "ريال" : "SAR"}</p>
            <p>${lang === "ar" ? "الضريبة" : "Tax"}: ${orderDetails.tax} ${
      lang === "ar" ? "ريال" : "SAR"
    }</p>
            <h3>${lang === "ar" ? "المجموع الكلي" : "Total"}: ${
      orderDetails.total
    } ${lang === "ar" ? "ريال" : "SAR"}</h3>
          </div>
        </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
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
                  <TableHead>
                    {lang === "ar" ? "الإجراءات" : "Actions"}
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
                        onValueChange={(value) => updateOrderStatus(order.id, value, order)}
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
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => setSelectedOrder(order)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => {
                            setSelectedOrder(order);
                            printOrder();
                          }}
                        >
                          <Printer className="h-4 w-4" />
                        </Button>
                      </div>
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

      <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>
              {lang === "ar" ? "تفاصيل الطلب" : "Order Details"} #{selectedOrder?.order_number}
            </DialogTitle>
          </DialogHeader>
          {selectedOrder && (
            <div className="mt-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">
                    {lang === "ar" ? "معلومات العميل" : "Customer Information"}
                  </h3>
                  <p>{selectedOrder.customer_name}</p>
                  <p>{selectedOrder.customer_phone}</p>
                  {selectedOrder.customer_email && (
                    <p>{selectedOrder.customer_email}</p>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    {lang === "ar" ? "عنوان الشحن" : "Shipping Address"}
                  </h3>
                  <p>
                    {typeof selectedOrder.shipping_address === "string"
                      ? selectedOrder.shipping_address
                      : Object.values(selectedOrder.shipping_address).join(", ")}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  {lang === "ar" ? "المنتجات" : "Products"}
                </h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>
                        {lang === "ar" ? "المنتج" : "Product"}
                      </TableHead>
                      <TableHead>
                        {lang === "ar" ? "الكمية" : "Quantity"}
                      </TableHead>
                      <TableHead>
                        {lang === "ar" ? "السعر" : "Price"}
                      </TableHead>
                      <TableHead>
                        {lang === "ar" ? "المجموع" : "Total"}
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {selectedOrder.items.map((item: any, index: number) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>
                          {item.price} {lang === "ar" ? "ريال" : "SAR"}
                        </TableCell>
                        <TableCell>
                          {item.quantity * item.price}{" "}
                          {lang === "ar" ? "ريال" : "SAR"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="text-right">
                <p>
                  {lang === "ar" ? "المجموع الفرعي" : "Subtotal"}:{" "}
                  {selectedOrder.subtotal} {lang === "ar" ? "ريال" : "SAR"}
                </p>
                <p>
                  {lang === "ar" ? "الشحن" : "Shipping"}:{" "}
                  {selectedOrder.shipping_cost} {lang === "ar" ? "ريال" : "SAR"}
                </p>
                <p>
                  {lang === "ar" ? "الضريبة" : "Tax"}: {selectedOrder.tax}{" "}
                  {lang === "ar" ? "ريال" : "SAR"}
                </p>
                <p className="font-bold">
                  {lang === "ar" ? "المجموع الكلي" : "Total"}:{" "}
                  {selectedOrder.total} {lang === "ar" ? "ريال" : "SAR"}
                </p>
              </div>

              <div className="flex justify-end space-x-2">
                <Button onClick={printOrder}>
                  <Printer className="h-4 w-4 mr-2" />
                  {lang === "ar" ? "طباعة الفاتورة" : "Print Invoice"}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
};

export default Orders;

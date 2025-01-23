import { supabase } from "@/integrations/supabase/client";

export const sendOrderNotification = async ({
  to,
  orderNumber,
  status,
  customerName,
  storeName,
  lang,
}: {
  to: string;
  orderNumber: string;
  status: string;
  customerName: string;
  storeName: string;
  lang: string;
}) => {
  try {
    const { data, error } = await supabase.functions.invoke("send-order-notification", {
      body: {
        to,
        orderNumber,
        status,
        customerName,
        storeName,
        lang,
      },
    });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error("Error sending order notification:", error);
    return { success: false, error };
  }
};
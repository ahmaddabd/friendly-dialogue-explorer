import { useState } from "react";
import { useLanguage } from "@/components/LanguageSwitcher";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const useProductForm = (initialData?: any, onSuccess?: () => void) => {
  const { lang } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    description: initialData?.description || "",
    price: initialData?.price || "",
    stock_quantity: initialData?.stock_quantity || "",
    sku: initialData?.sku || "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setImages(Array.from(files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const imageUrls = [];
      for (const image of images) {
        const fileName = `${Date.now()}-${image.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('product-images')
          .upload(fileName, image);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('product-images')
          .getPublicUrl(fileName);

        imageUrls.push(publicUrl);
      }

      const productData = {
        ...formData,
        images: imageUrls,
        status: 'active',
      };

      const { error } = initialData
        ? await supabase
            .from('products')
            .update(productData)
            .eq('id', initialData.id)
        : await supabase
            .from('products')
            .insert([productData]);

      if (error) throw error;

      toast({
        title: initialData
          ? (lang === 'ar' ? "تم تحديث المنتج" : "Product updated")
          : (lang === 'ar' ? "تم إضافة المنتج" : "Product added"),
        description: formData.name,
      });

      if (onSuccess) onSuccess();
    } catch (error: any) {
      toast({
        title: lang === 'ar' ? "حدث خطأ" : "Error occurred",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    images,
    handleChange,
    handleImageUpload,
    handleSubmit,
  };
};
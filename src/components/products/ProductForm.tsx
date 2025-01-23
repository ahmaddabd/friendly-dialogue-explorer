import { useState } from "react";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Upload, X } from "lucide-react";

interface ProductFormProps {
  initialData?: any;
  onSuccess?: () => void;
}

export const ProductForm = ({ initialData, onSuccess }: ProductFormProps) => {
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

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setImages(Array.from(files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Upload images first
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

      // Create or update product
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {initialData
            ? (lang === 'ar' ? "تعديل المنتج" : "Edit Product")
            : (lang === 'ar' ? "إضافة منتج جديد" : "Add New Product")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label>{lang === 'ar' ? "اسم المنتج" : "Product Name"}</Label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>{lang === 'ar' ? "الوصف" : "Description"}</Label>
            <Textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>{lang === 'ar' ? "السعر" : "Price"}</Label>
              <Input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                required
                min="0"
                step="0.01"
              />
            </div>

            <div className="space-y-2">
              <Label>{lang === 'ar' ? "الكمية" : "Stock Quantity"}</Label>
              <Input
                type="number"
                value={formData.stock_quantity}
                onChange={(e) => setFormData({ ...formData, stock_quantity: e.target.value })}
                required
                min="0"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>{lang === 'ar' ? "رمز المنتج" : "SKU"}</Label>
            <Input
              value={formData.sku}
              onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label>{lang === 'ar' ? "صور المنتج" : "Product Images"}</Label>
            <div className="flex items-center gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => document.getElementById('image-upload')?.click()}
              >
                <Upload className="h-4 w-4 mr-2" />
                {lang === 'ar' ? "رفع الصور" : "Upload Images"}
              </Button>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImageUpload}
              />
              {images.length > 0 && (
                <span className="text-sm text-gray-500">
                  {images.length} {lang === 'ar' ? "صور محددة" : "images selected"}
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => window.history.back()}
            >
              {lang === 'ar' ? "إلغاء" : "Cancel"}
            </Button>
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700"
              disabled={loading}
            >
              {loading
                ? (lang === 'ar' ? "جاري الحفظ..." : "Saving...")
                : (initialData
                    ? (lang === 'ar' ? "حفظ التغييرات" : "Save Changes")
                    : (lang === 'ar' ? "إضافة المنتج" : "Add Product")
                  )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
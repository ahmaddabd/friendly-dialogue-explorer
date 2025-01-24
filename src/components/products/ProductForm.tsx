import { useLanguage } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductBasicInfo } from "@/features/products/components/ProductBasicInfo";
import { ProductPricing } from "@/features/products/components/ProductPricing";
import { ProductImages } from "@/features/products/components/ProductImages";
import { useProductForm } from "@/features/products/hooks/useProductForm";

interface ProductFormProps {
  initialData?: any;
  onSuccess?: () => void;
}

export const ProductForm = ({ initialData, onSuccess }: ProductFormProps) => {
  const { lang } = useLanguage();
  const {
    formData,
    loading,
    images,
    handleChange,
    handleImageUpload,
    handleSubmit,
  } = useProductForm(initialData, onSuccess);

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
          <ProductBasicInfo formData={formData} onChange={handleChange} />
          <ProductPricing formData={formData} onChange={handleChange} />
          <ProductImages images={images} onImageUpload={handleImageUpload} />

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
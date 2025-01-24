import { useLanguage } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Upload, X } from "lucide-react";
import { FormSection } from "./FormSection";

interface ProductImagesProps {
  images: File[];
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProductImages = ({ images, onImageUpload }: ProductImagesProps) => {
  const { lang } = useLanguage();

  return (
    <FormSection>
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
            onChange={onImageUpload}
          />
          {images.length > 0 && (
            <span className="text-sm text-gray-500">
              {images.length} {lang === 'ar' ? "صور محددة" : "images selected"}
            </span>
          )}
        </div>
      </div>
    </FormSection>
  );
};
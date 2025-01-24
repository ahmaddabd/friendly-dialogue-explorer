import { useLanguage } from "@/components/LanguageSwitcher";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FormSection } from "./FormSection";

interface ProductBasicInfoProps {
  formData: {
    name: string;
    description: string;
    sku: string;
  };
  onChange: (field: string, value: string) => void;
}

export const ProductBasicInfo = ({ formData, onChange }: ProductBasicInfoProps) => {
  const { lang } = useLanguage();

  return (
    <FormSection>
      <div className="space-y-2">
        <Label>{lang === 'ar' ? "اسم المنتج" : "Product Name"}</Label>
        <Input
          value={formData.name}
          onChange={(e) => onChange('name', e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label>{lang === 'ar' ? "الوصف" : "Description"}</Label>
        <Textarea
          value={formData.description}
          onChange={(e) => onChange('description', e.target.value)}
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <Label>{lang === 'ar' ? "رمز المنتج" : "SKU"}</Label>
        <Input
          value={formData.sku}
          onChange={(e) => onChange('sku', e.target.value)}
        />
      </div>
    </FormSection>
  );
};
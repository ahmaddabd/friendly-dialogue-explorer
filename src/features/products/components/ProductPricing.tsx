import { useLanguage } from "@/components/LanguageSwitcher";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormSection } from "./FormSection";

interface ProductPricingProps {
  formData: {
    price: string;
    stock_quantity: string;
  };
  onChange: (field: string, value: string) => void;
}

export const ProductPricing = ({ formData, onChange }: ProductPricingProps) => {
  const { lang } = useLanguage();

  return (
    <FormSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>{lang === 'ar' ? "السعر" : "Price"}</Label>
          <Input
            type="number"
            value={formData.price}
            onChange={(e) => onChange('price', e.target.value)}
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
            onChange={(e) => onChange('stock_quantity', e.target.value)}
            required
            min="0"
          />
        </div>
      </div>
    </FormSection>
  );
};
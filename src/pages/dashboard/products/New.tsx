import { MainLayout } from "@/layouts/MainLayout";
import { ProductForm } from "@/components/products/ProductForm";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <ProductForm onSuccess={() => navigate('/dashboard/products')} />
      </div>
    </MainLayout>
  );
};

export default NewProduct;
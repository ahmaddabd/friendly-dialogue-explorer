import { MainLayout } from "@/layouts/MainLayout";
import { ProductForm } from "@/components/products/ProductForm";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    }
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <ProductForm 
          initialData={product} 
          onSuccess={() => navigate('/dashboard/products')} 
        />
      </div>
    </MainLayout>
  );
};

export default EditProduct;
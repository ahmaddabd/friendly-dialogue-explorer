import { useState } from "react";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

export const ProductList = () => {
  const { lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const filteredProducts = products?.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder={lang === 'ar' ? "البحث عن منتج..." : "Search products..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 w-full"
          />
        </div>
        <Link to="/dashboard/products/new">
          <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
            <Plus className="h-4 w-4 mr-2" />
            {lang === 'ar' ? "إضافة منتج" : "Add Product"}
          </Button>
        </Link>
      </div>

      {isLoading ? (
        <div className="text-center py-8">
          {lang === 'ar' ? "جاري التحميل..." : "Loading..."}
        </div>
      ) : filteredProducts?.length === 0 ? (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-gray-500">
              {lang === 'ar' ? "لا توجد منتجات" : "No products found"}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts?.map((product) => (
            <Link key={product.id} to={`/dashboard/products/${product.id}`}>
              <Card className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium truncate">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100 mb-4">
                    {product.images && product.images[0] ? (
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-400">
                        {lang === 'ar' ? "لا توجد صورة" : "No image"}
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-green-600">
                      {product.price} {lang === 'ar' ? "ريال" : "SAR"}
                    </span>
                    <span className="text-sm text-gray-500">
                      {lang === 'ar' ? "المخزون: " : "Stock: "}
                      {product.stock_quantity}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
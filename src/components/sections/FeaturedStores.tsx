import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Store } from "@/components/ui/store-card";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Skeleton } from "@/components/ui/skeleton";
import { Store as StoreIcon, Star } from "lucide-react";

export const FeaturedStores = () => {
  const { lang } = useLanguage();
  
  const { data: stores, isLoading } = useQuery({
    queryKey: ['featured-stores'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('stores')
        .select('*')
        .eq('status', 'active')
        .eq('featured', true)
        .order('created_at', { ascending: false })
        .limit(6);
      
      if (error) throw error;
      return data;
    }
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-48 rounded-xl" />
        ))}
      </div>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-white via-green-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-4">
            <Star className="w-4 h-4 mr-2" />
            {lang === 'ar' ? "المتاجر المميزة" : "Featured Stores"}
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {lang === 'ar' ? "أفضل المتاجر المميزة" : "Top Featured Stores"}
          </h2>
          <p className="text-xl text-gray-600">
            {lang === 'ar' 
              ? "اكتشف أفضل المتاجر المميزة على منصتنا"
              : "Discover the best featured stores on our platform"
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stores?.map((store) => (
            <Store key={store.id} store={store} />
          ))}
        </div>
      </div>
    </section>
  );
};
import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "@/components/LanguageSwitcher";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Store, ShoppingBag, Star, MapPin, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const FeaturedStores = () => {
  const { lang } = useLanguage();

  const { data: stores, isLoading } = useQuery({
    queryKey: ["featured-stores"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("stores")
        .select("*")
        .eq("status", "active")
        .eq("featured", true)
        .order("created_at", { ascending: false })
        .limit(6);

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="h-64 animate-pulse bg-green-100/20" />
        ))}
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <TrendingUp className="w-8 h-8 text-green-600" />
            {lang === "ar" ? "المتاجر المميزة" : "Featured Stores"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {lang === "ar"
              ? "اكتشف أفضل المتاجر المميزة في منصتنا"
              : "Discover our platform's top featured stores"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stores?.map((store, index) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/store/${store.store_url}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden bg-white/80 backdrop-blur-sm border-green-100/20">
                  <div className="p-6">
                    <div className="relative">
                      {/* Store Logo */}
                      <div className="w-20 h-20 bg-green-50 rounded-xl mb-4 overflow-hidden">
                        {store.logo_url ? (
                          <img
                            src={store.logo_url}
                            alt={store.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Store className="w-10 h-10 text-green-600" />
                          </div>
                        )}
                      </div>

                      {/* Featured Badge */}
                      <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {lang === "ar" ? "مميز" : "Featured"}
                      </div>

                      {/* Store Info */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {store.name}
                      </h3>
                      <p className="text-gray-600 line-clamp-2 mb-4">
                        {store.description}
                      </p>

                      {/* Store Stats */}
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <ShoppingBag className="w-4 h-4" />
                          <span>{store.products_count || 0}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          <span>{store.rating || "0.0"}</span>
                        </div>
                        {store.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span className="truncate max-w-[100px]">
                              {store.location}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
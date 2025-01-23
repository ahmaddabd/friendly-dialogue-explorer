import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star, MapPin, ShoppingBag } from "lucide-react";
import { useLanguage } from "@/components/LanguageSwitcher";

export interface Store {
  id: string;
  name: string;
  description: string | null;
  logo_url: string | null;
  category: string;
  location: string | null;
  rating: number | null;
  products_count: number | null;
}

export const Store = ({ store }: { store: Store }) => {
  const { lang } = useLanguage();
  
  return (
    <Link to={`/store/${store.id}`}>
      <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4 rtl:space-x-reverse">
            <div className="w-16 h-16 rounded-lg bg-gray-100 flex-shrink-0 overflow-hidden">
              {store.logo_url ? (
                <img 
                  src={store.logo_url} 
                  alt={store.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-green-100 text-green-600">
                  <ShoppingBag className="w-8 h-8" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {store.name}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                {store.description}
              </p>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                {store.location && (
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    {store.location}
                  </div>
                )}
                {store.rating && (
                  <div className="flex items-center text-sm text-yellow-500">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    {store.rating}
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-6 py-4 bg-gray-50 flex justify-between items-center">
          <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
            {store.category}
          </Badge>
          {store.products_count !== null && (
            <span className="text-sm text-gray-600">
              {store.products_count} {lang === 'ar' ? "منتج" : "products"}
            </span>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
};
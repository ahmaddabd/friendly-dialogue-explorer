import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageSwitcher";

export const CTA = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-20 bg-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {lang === 'ar' 
              ? "ابدأ رحلتك في التجارة الإلكترونية اليوم"
              : "Start Your E-commerce Journey Today"
            }
          </h2>
          <p className="text-xl mb-8 text-green-50">
            {lang === 'ar'
              ? "انضم إلى آلاف التجار الناجحين واستفد من خدماتنا المتكاملة"
              : "Join thousands of successful merchants and benefit from our integrated services"
            }
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50 text-lg">
            {lang === 'ar' ? "سجل الآن مجاناً" : "Register Now for Free"}
          </Button>
        </div>
      </div>
    </section>
  );
};
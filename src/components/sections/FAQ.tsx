import { useLanguage } from "@/components/LanguageSwitcher";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    questionAr: "كيف يمكنني البدء باستخدام المنصة؟",
    questionEn: "How can I start using the platform?",
    answerAr: "يمكنك البدء بالتسجيل مجاناً من خلال النقر على زر 'ابدأ الآن' وملء النموذج البسيط. بعد ذلك، ستتمكن من إنشاء متجرك الإلكتروني خلال دقائق.",
    answerEn: "You can start by registering for free by clicking the 'Start Now' button and filling out the simple form. After that, you'll be able to create your e-commerce store within minutes."
  },
  {
    questionAr: "ما هي تكلفة استخدام المنصة؟",
    questionEn: "What is the cost of using the platform?",
    answerAr: "نقدم باقات متنوعة تناسب جميع الاحتياجات، تبدأ من الباقة المجانية وحتى الباقات المتقدمة. يمكنك الاطلاع على تفاصيل الأسعار في صفحة الباقات.",
    answerEn: "We offer various packages to suit all needs, starting from the free package to advanced packages. You can view pricing details on the packages page."
  },
  {
    questionAr: "هل يمكنني تخصيص تصميم متجري؟",
    questionEn: "Can I customize my store design?",
    answerAr: "نعم، نوفر مجموعة واسعة من القوالب القابلة للتخصيص. يمكنك تعديل الألوان والخطوط والتصميم بما يتناسب مع هويتك التجارية.",
    answerEn: "Yes, we provide a wide range of customizable templates. You can modify colors, fonts, and design to match your brand identity."
  },
  {
    questionAr: "كيف يمكنني الحصول على المساعدة؟",
    questionEn: "How can I get help?",
    answerAr: "نوفر دعماً فنياً على مدار الساعة عبر الدردشة المباشرة والبريد الإلكتروني والهاتف. كما نوفر مركز مساعدة شامل يحتوي على أدلة وفيديوهات تعليمية.",
    answerEn: "We provide 24/7 technical support via live chat, email, and phone. We also have a comprehensive help center with guides and tutorials."
  },
  {
    questionAr: "هل يمكنني ربط متجري مع وسائل الدفع المحلية؟",
    questionEn: "Can I integrate local payment methods with my store?",
    answerAr: "نعم، نوفر تكاملاً مع جميع وسائل الدفع المحلية الرئيسية في سوريا، بالإضافة إلى وسائل الدفع العالمية.",
    answerEn: "Yes, we provide integration with all major local payment methods in Syria, in addition to global payment methods."
  }
];

export const FAQ = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            {lang === 'ar' ? "الأسئلة الشائعة" : "FAQ"}
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {lang === 'ar' ? "الأسئلة الأكثر شيوعاً" : "Frequently Asked Questions"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {lang === 'ar' 
              ? "إجابات على الأسئلة الشائعة حول خدماتنا ومنصتنا"
              : "Answers to common questions about our services and platform"
            }
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg border shadow-sm px-4"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-medium text-gray-900">
                    {lang === 'ar' ? faq.questionAr : faq.questionEn}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {lang === 'ar' ? faq.answerAr : faq.answerEn}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
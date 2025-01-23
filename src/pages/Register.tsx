import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { RegistrationForm } from "@/components/auth/RegistrationForm";

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<any>(null);

  const handleSubmit = async (values: any) => {
    console.log("Form submitted with values:", values);
    
    if (step === 1) {
      console.log("Step 1: Moving to step 2");
      // Store form data and move to next step
      setFormData(values);
      setStep(2);
      return;
    }

    // Combine data from both steps
    const finalData = {
      ...formData,
      ...values
    };
    
    console.log("Step 2: Submitting final data:", finalData);

    setLoading(true);
    try {
      console.log("Attempting to register user with email:", finalData.email);
      
      // Register the user
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: finalData.email,
        password: finalData.password,
        options: {
          data: {
            full_name: finalData.ownerName,
          }
        }
      });

      if (signUpError) {
        console.error("Registration error:", signUpError);
        
        if (signUpError.message.includes("User already registered")) {
          toast({
            title: "خطأ في التسجيل",
            description: "البريد الإلكتروني مسجل مسبقاً",
            variant: "destructive"
          });
        } else {
          toast({
            title: "خطأ",
            description: signUpError.message,
            variant: "destructive"
          });
        }
        return;
      }

      console.log("User registered successfully:", signUpData);

      // Create the store
      const { error: storeError } = await supabase
        .from('stores')
        .insert({
          name: finalData.storeName,
          owner_id: signUpData.user?.id,
          category: 'general',
          status: 'pending',
          store_settings: {
            theme: "default",
            colors: {
              primary: "#22c55e",
              secondary: "#64748b"
            },
            layout: "default",
            features: {
              reviews: true,
              wishlist: true,
              compare: true,
              chat: false
            }
          },
          settings: {
            cod_enabled: true,
            tax_enabled: true,
            invoice_enabled: true,
            shipping_enabled: true
          }
        });

      if (storeError) {
        console.error("Store creation error:", storeError);
        toast({
          title: "خطأ",
          description: "حدث خطأ أثناء إنشاء المتجر",
          variant: "destructive"
        });
        return;
      }

      console.log("Store created successfully");
      
      toast({
        title: "تم إنشاء الحساب بنجاح",
        description: "سيتم توجيهك إلى لوحة التحكم",
      });

      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error: any) {
      console.error("Unexpected error:", error);
      toast({
        title: "خطأ",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <RegistrationForm 
        onSubmit={handleSubmit}
        loading={loading}
        step={step}
        onStepChange={handleBack}
      />
    </div>
  );
};

export default Register;
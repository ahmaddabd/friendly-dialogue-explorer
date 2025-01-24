import { useState } from "react";
import { EmailStepData } from "../components/forms/EmailStepForm";
import { StoreStepData } from "../components/forms/StoreStepForm";

export const useRegistrationForm = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<{
    email?: string;
    password?: string;
    storeName?: string;
    ownerName?: string;
  }>({});

  const handleEmailStep = (data: EmailStepData) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(2);
  };

  const handleStoreStep = (data: StoreStepData) => {
    setFormData((prev) => ({ ...prev, ...data }));
    return formData;
  };

  const handleBack = () => {
    setStep(1);
  };

  return {
    step,
    formData,
    handleEmailStep,
    handleStoreStep,
    handleBack,
  };
};
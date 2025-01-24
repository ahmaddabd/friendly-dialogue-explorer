import { z } from "zod";

export const emailSchema = z.string()
  .email("البريد الإلكتروني غير صالح")
  .min(1, "البريد الإلكتروني مطلوب");

export const passwordSchema = z.string()
  .min(8, "كلمة المرور يجب أن تكون 8 أحرف على الأقل")
  .regex(/[A-Z]/, "يجب أن تحتوي كلمة المرور على حرف كبير واحد على الأقل")
  .regex(/[a-z]/, "يجب أن تحتوي كلمة المرور على حرف صغير واحد على الأقل")
  .regex(/[0-9]/, "يجب أن تحتوي كلمة المرور على رقم واحد على الأقل");

export const phoneSchema = z.string()
  .regex(/^09\d{8}$/, "رقم الهاتف غير صالح");

export const storeNameSchema = z.string()
  .min(3, "اسم المتجر يجب أن يكون 3 أحرف على الأقل")
  .max(50, "اسم المتجر يجب أن لا يتجاوز 50 حرف");

export const ownerNameSchema = z.string()
  .min(3, "اسم المالك يجب أن يكون 3 أحرف على الأقل")
  .max(50, "اسم المالك يجب أن لا يتجاوز 50 حرف");

export const validateEmail = (email: string) => {
  try {
    emailSchema.parse(email);
    return true;
  } catch {
    return false;
  }
};

export const validatePassword = (password: string) => {
  try {
    passwordSchema.parse(password);
    return true;
  } catch {
    return false;
  }
};

export const validatePhone = (phone: string) => {
  try {
    phoneSchema.parse(phone);
    return true;
  } catch {
    return false;
  }
};
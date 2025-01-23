/**
 * وثائق المشروع
 * @module Documentation
 */

/**
 * أنواع البيانات الرئيسية
 */
export interface UserData {
  id: string;
  name: string;
  email: string;
}

export interface StoreData {
  id: string;
  name: string;
  owner: UserData;
}

/**
 * الثوابت الرئيسية
 */
export const APP_CONFIG = {
  API_VERSION: 'v1',
  MAX_RETRIES: 3,
  CACHE_DURATION: 1000 * 60 * 5, // 5 minutes
  DEFAULT_LANGUAGE: 'ar'
};

/**
 * رسائل الخطأ
 */
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'حدث خطأ في الاتصال',
  VALIDATION_ERROR: 'البيانات غير صحيحة',
  AUTH_ERROR: 'خطأ في المصادقة'
};
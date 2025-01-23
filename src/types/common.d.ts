export type Direction = 'ltr' | 'rtl';
export type Language = 'ar' | 'en';
export type Theme = 'light' | 'dark' | 'system';

export interface User {
  id: string;
  email?: string;
  phone?: string;
  storeName: string;
  ownerName: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
  status: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T> {
  page: number;
  limit: number;
  total: number;
  hasMore: boolean;
}
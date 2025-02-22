export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      coupons: {
        Row: {
          code: string
          created_at: string | null
          expires_at: string | null
          id: string
          min_order_amount: number | null
          starts_at: string | null
          status: string | null
          store_id: string | null
          type: string
          updated_at: string | null
          usage_limit: number | null
          used_count: number | null
          value: number
        }
        Insert: {
          code: string
          created_at?: string | null
          expires_at?: string | null
          id?: string
          min_order_amount?: number | null
          starts_at?: string | null
          status?: string | null
          store_id?: string | null
          type: string
          updated_at?: string | null
          usage_limit?: number | null
          used_count?: number | null
          value: number
        }
        Update: {
          code?: string
          created_at?: string | null
          expires_at?: string | null
          id?: string
          min_order_amount?: number | null
          starts_at?: string | null
          status?: string | null
          store_id?: string | null
          type?: string
          updated_at?: string | null
          usage_limit?: number | null
          used_count?: number | null
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "coupons_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      featured_products: {
        Row: {
          created_at: string | null
          end_date: string | null
          id: string
          product_id: string | null
          start_date: string | null
          store_id: string | null
        }
        Insert: {
          created_at?: string | null
          end_date?: string | null
          id?: string
          product_id?: string | null
          start_date?: string | null
          store_id?: string | null
        }
        Update: {
          created_at?: string | null
          end_date?: string | null
          id?: string
          product_id?: string | null
          start_date?: string | null
          store_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "featured_products_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "featured_products_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string
          customer_email: string | null
          customer_name: string
          customer_phone: string
          id: string
          items: Json
          notes: string | null
          order_number: string
          payment_method: string | null
          payment_status: string | null
          shipping_address: Json
          shipping_cost: number | null
          status: string | null
          store_id: string | null
          subtotal: number
          tax: number | null
          total: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          customer_email?: string | null
          customer_name: string
          customer_phone: string
          id?: string
          items: Json
          notes?: string | null
          order_number: string
          payment_method?: string | null
          payment_status?: string | null
          shipping_address: Json
          shipping_cost?: number | null
          status?: string | null
          store_id?: string | null
          subtotal: number
          tax?: number | null
          total: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          customer_email?: string | null
          customer_name?: string
          customer_phone?: string
          id?: string
          items?: Json
          notes?: string | null
          order_number?: string
          payment_method?: string | null
          payment_status?: string | null
          shipping_address?: Json
          shipping_cost?: number | null
          status?: string | null
          store_id?: string | null
          subtotal?: number
          tax?: number | null
          total?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          attributes: Json | null
          category: string | null
          created_at: string
          description: string | null
          id: string
          images: Json | null
          name: string
          price: number
          sale_price: number | null
          sku: string | null
          status: string | null
          stock_quantity: number | null
          store_id: string | null
          updated_at: string
          variations: Json | null
        }
        Insert: {
          attributes?: Json | null
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          images?: Json | null
          name: string
          price?: number
          sale_price?: number | null
          sku?: string | null
          status?: string | null
          stock_quantity?: number | null
          store_id?: string | null
          updated_at?: string
          variations?: Json | null
        }
        Update: {
          attributes?: Json | null
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          images?: Json | null
          name?: string
          price?: number
          sale_price?: number | null
          sku?: string | null
          status?: string | null
          stock_quantity?: number | null
          store_id?: string | null
          updated_at?: string
          variations?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "products_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          is_merchant: boolean | null
          phone_number: string | null
          phone_verified: boolean | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          is_merchant?: boolean | null
          phone_number?: string | null
          phone_verified?: boolean | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          is_merchant?: boolean | null
          phone_number?: string | null
          phone_verified?: boolean | null
          updated_at?: string
        }
        Relationships: []
      }
      store_visits: {
        Row: {
          id: string
          ip_address: string | null
          referrer: string | null
          store_id: string | null
          user_agent: string | null
          visited_at: string | null
          visitor_id: string | null
        }
        Insert: {
          id?: string
          ip_address?: string | null
          referrer?: string | null
          store_id?: string | null
          user_agent?: string | null
          visited_at?: string | null
          visitor_id?: string | null
        }
        Update: {
          id?: string
          ip_address?: string | null
          referrer?: string | null
          store_id?: string | null
          user_agent?: string | null
          visited_at?: string | null
          visitor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "store_visits_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "store_visits_visitor_id_fkey"
            columns: ["visitor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      stores: {
        Row: {
          bank_account: Json | null
          business_type: string | null
          category: string
          cover_url: string | null
          created_at: string
          currency: string | null
          description: string | null
          email: string | null
          featured: boolean | null
          id: string
          is_verified: boolean | null
          location: string | null
          logo_url: string | null
          merchant_code: string | null
          name: string
          owner_id: string
          payment_methods: Json | null
          phone: string | null
          products_count: number | null
          rating: number | null
          reviews_count: number | null
          settings: Json | null
          shipping_zones: Json | null
          social_media: Json | null
          status: string | null
          store_domain: string | null
          store_settings: Json | null
          store_type: string | null
          store_url: string | null
          subscription_end_date: string | null
          subscription_plan: string | null
          subscription_start_date: string | null
          subscription_status: string | null
          tags: string[] | null
          tax_settings: Json | null
          theme_settings: Json | null
          updated_at: string
          verification_documents: Json | null
          views: number | null
          working_hours: Json | null
        }
        Insert: {
          bank_account?: Json | null
          business_type?: string | null
          category: string
          cover_url?: string | null
          created_at?: string
          currency?: string | null
          description?: string | null
          email?: string | null
          featured?: boolean | null
          id?: string
          is_verified?: boolean | null
          location?: string | null
          logo_url?: string | null
          merchant_code?: string | null
          name: string
          owner_id: string
          payment_methods?: Json | null
          phone?: string | null
          products_count?: number | null
          rating?: number | null
          reviews_count?: number | null
          settings?: Json | null
          shipping_zones?: Json | null
          social_media?: Json | null
          status?: string | null
          store_domain?: string | null
          store_settings?: Json | null
          store_type?: string | null
          store_url?: string | null
          subscription_end_date?: string | null
          subscription_plan?: string | null
          subscription_start_date?: string | null
          subscription_status?: string | null
          tags?: string[] | null
          tax_settings?: Json | null
          theme_settings?: Json | null
          updated_at?: string
          verification_documents?: Json | null
          views?: number | null
          working_hours?: Json | null
        }
        Update: {
          bank_account?: Json | null
          business_type?: string | null
          category?: string
          cover_url?: string | null
          created_at?: string
          currency?: string | null
          description?: string | null
          email?: string | null
          featured?: boolean | null
          id?: string
          is_verified?: boolean | null
          location?: string | null
          logo_url?: string | null
          merchant_code?: string | null
          name?: string
          owner_id?: string
          payment_methods?: Json | null
          phone?: string | null
          products_count?: number | null
          rating?: number | null
          reviews_count?: number | null
          settings?: Json | null
          shipping_zones?: Json | null
          social_media?: Json | null
          status?: string | null
          store_domain?: string | null
          store_settings?: Json | null
          store_type?: string | null
          store_url?: string | null
          subscription_end_date?: string | null
          subscription_plan?: string | null
          subscription_start_date?: string | null
          subscription_status?: string | null
          tags?: string[] | null
          tax_settings?: Json | null
          theme_settings?: Json | null
          updated_at?: string
          verification_documents?: Json | null
          views?: number | null
          working_hours?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "stores_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      wishlists: {
        Row: {
          created_at: string | null
          id: string
          product_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          product_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          product_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "wishlists_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wishlists_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_merchant_code: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      increment_store_views: {
        Args: {
          store_id: string
        }
        Returns: undefined
      }
      track_store_visit: {
        Args: {
          p_store_id: string
          p_visitor_id: string
          p_ip_address: string
          p_user_agent: string
          p_referrer: string
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

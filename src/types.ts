import { UrlObject } from "url";
export type Url = string | UrlObject;

/* SUPABASE_TYPES_START */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          created_at: string;
          id: string;
          is_public: boolean;
          post_content_link: string;
          post_image_link: string;
          post_title: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          is_public?: boolean;
          post_content_link?: string;
          post_image_link?: string;
          post_title?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          is_public?: boolean;
          post_content_link?: string;
          post_image_link?: string;
          post_title?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

/* SUPABASE_TYPES_END */

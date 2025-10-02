export interface ResponsePricing {
  success: boolean;
  message: string;
  data: Pricing[];
  meta: Meta;
}

export interface Pricing {
  id: number;
  name: string;
  sku: string;
  short_description: string;
  description: string;
  price: number;
  status: string;
  type: string;
  category: string;
  is_visible: boolean;
  tax_rate: number;
  attributes: Attributes;
  created_at: Date;
  updated_at: Date;
  OrderItems: null;
  Subscriptions: null;
}

export interface Attributes {
  limit: Limit;
  service: Service;
}

export interface Limit {
  max_user: number;
  document_size: number;
  storage_limit: string;
  upload_document: number;
}

export interface Service {
  tier: string;
  cycle_type: string;
  cycle_period: number;
}

export interface Meta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

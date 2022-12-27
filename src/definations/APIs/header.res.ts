export interface _StoreMenu {
  id: number;
  topicid: number;
  type: 'custom' | 'dynamic' | 'none';
  openinnewtab: null;
  menuinfo: null | string;
  storeid: number;
  createdby: null;
  createddate: null;
  modifiedby: null;
  modifieddate: null;
  category: 'topic' | 'category';
  sename: null | string;
  title?: string;
  menu_type: 'Brands';
}

export interface _Brands {
  id: number;
  brandName: string;
  seName: string;
  brandColorImageUrl: string;
}

export interface _t_Brands {
  dataType: 'BRANDS';
  brands: _Brands[] | null;
}
export interface _MenuCategory {
  id: number;
  categoryName: string;
  seName: string;
  customSEName: null;
}

export interface _t_MenuCategory {
  dataType: 'CATEGORIES';
  categories: _MenuCategory[] | null;
}

export interface _MenuTopic {
  id: number;
  title: string;
  page_type: string;
  pass_required: string;
  password: null;
  pass_expiry_period: null;
  status: string;
  tag: string;
  author: string;
  preview_as: string;
  store_id: number;
  slug: string;
  topic_title: string;
  meta_description: string;
  meta_keywords: string;
  template_id: number;
  head_html: null;
  footer_html: null;
  canonical_url: null;
  publish_duration: string;
  publish_date: null;
  publish_time: null;
  unpublish_date: null;
  unpublish_time: null;
  schedule_unpublish: string;
  redirect_page_id: null;
  publish_status: string;
  created_by: null;
  updated_by: null;
  created_at: string;
  updated_at: string;
  template: Template;
}

export interface _t_MenuTopic {
  dataType: 'TOPIC';
  topic: _MenuTopic | null;
}

export interface Template {
  id: number;
  title: string;
  image_src: null;
}

export type _ThemeConfigsAvailable = 'header_config';

export interface _ThemeConfigRes {
  id: number;
  store_id: number;
  config_name: string;
  config_value: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}

export interface _TransformedThemeConfig {
  id: number;
  store_id: number;
  config_name: string;
  config_value: { [key: string]: string };
}

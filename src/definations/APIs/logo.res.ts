export interface _Logo {
  header_layout: string;
  enable_sticky_header: boolean;
  enable_fullwidth: boolean;
  overlay_header: boolean;
  header_bg_color: string;
  header_text_color: string;
  logo_resize: string;
  desktop_image: string;
  desktop_logo_alt: string;
  desktop_logo_resize: string;
  mobile_image: string;
  mobile_logo_alt: string;
  mobile_logo_resize: string;
  desktop_logo_alignment: string;
  mobile_logo_alignment: string;
  image_title: string;
  image_link: string;
  navigation_link: NavigationLink[];
}

export interface NavigationLink {
  title: string;
  url: string;
  visible: boolean;
}

export type SubRow = {
  logoLocationDetailId: number;
  name: string;
  image: string;
  threeDImage: string;
  threeDLogoLocationClass: string;
  price: number;
  cost: number;
  brandGuideLines: boolean;
};

export type LogoList = {
  isFirstLogoFree: boolean;
  productId: number;
  subRow: SubRow[];
};

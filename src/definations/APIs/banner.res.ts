export interface Welcome {
  success: boolean;
  data: _BannerRes[];
  errors: Errors;
  otherData: null;
}

export interface _BannerRes {
  id: number;
  brandLogo: string | null;
  description: string;
  banner: string;
  seTitle: null;
  seKeyWords: null;
  seDescription: null;
}

export interface Errors {}

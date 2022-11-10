export interface ProductReviewImage {
  id: number;
  rowVersion: string;
  location: string;
  ipAddress: string;
  macAddress: string;
  reviewId: number;
  imageName: string;
  displayOrder: number;
  recStatus: string;
}

export interface ReviewModel {
  id: number;
  rowVersion: string;
  location: string;
  ipAddress: string;
  macAddress: string;
  productId: string | number;
  customerId: number;
  storeId: number;
  commentHeading: string;
  rating: number;
  helpFullCount: number;
  notHelpFullCount: number;
  recStatus: string;
  images: ProductReviewImage[];
}

export interface ProductReviewType {
  reviewModel: ReviewModel;
}

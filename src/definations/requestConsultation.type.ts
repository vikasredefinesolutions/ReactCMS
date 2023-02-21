export interface _SubmitConsultationPayload {
  consultationModel: {
    id: number;
    rowVersion: string;
    location: string;
    ipAddress: string;
    macAddress: string;
    storeId: number;
    productId: number;
    firstname: string;
    lastname: string;
    company: string;
    email: string;
    phone: string;
    contactMethod: number;
    desiredQuantity: number;
    inHandsDate: string;
    logoUrl: string;
    message: string;
    recStatus: 'A';
  };
}

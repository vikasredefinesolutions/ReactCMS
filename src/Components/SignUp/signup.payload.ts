export interface _Signup_Payload {
  showIndustries: boolean;
  id: number;
  details: string;
  rowVersion: string;
  location: string;
  ipAddress: string;
  macAddress: string;
  firstname: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  companyName: string;
  companyId: number;
  sharedCustomerId: number;
  customerType: 'corporate';
  storeId: number;
  isTaxableuser: boolean;
  storeCustomerAddress: [
    {
      id: number;
      rowVersion: string;
      location: string;
      ipAddress: string;
      macAddress: string;
      customerId: number;
      firstname: string;
      lastName: string;
      email: string;
      address1: string;
      address2: string;
      suite: string;
      city: string;
      state: string;
      postalCode: string;
      phone: string;
      fax: string;
      countryName: string;
      countryCode: string;
      addressType: string;
      isDefault: boolean;
      recStatus: 'A';
    },
  ];
  recStatus: 'A';
}

export const signup_payload: _Signup_Payload = {
  showIndustries: false,
  id: 0,
  details: '',
  rowVersion: '',
  location: '',
  ipAddress: '',
  macAddress: '',
  firstname: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  companyName: '',
  companyId: 0,
  sharedCustomerId: 0,
  customerType: 'corporate',
  storeId: 0,
  isTaxableuser: false,
  storeCustomerAddress: [
    {
      id: 0,
      rowVersion: '',
      location: '',
      ipAddress: '',
      macAddress: '',
      customerId: 0,
      firstname: '',
      lastName: '',
      email: '',
      address1: '',
      address2: '',
      suite: '',
      city: '',
      state: '',
      postalCode: '',
      phone: '',
      fax: '',
      countryName: '',
      countryCode: '',
      addressType: '',
      isDefault: false,
      recStatus: 'A',
    },
  ],
  recStatus: 'A',
};

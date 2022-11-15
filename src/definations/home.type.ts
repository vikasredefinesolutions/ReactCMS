export interface Welcome {
  success: boolean;
  data: _storeData;
  message: string;
}

export interface _storeData {
  id: number;
  name: string;
  code: string;
  prefix: string;
  url: string;
  navcode: string;
  logourl: string;
  createdby: number;
  createddate: Date;
  modifiedby: number;
  modifieddate: Date;
  recstatus: string;
  attributeid: number;
  storetypeid: number;
  ipaddress: string;
  location: string;
  macaddress: string;
  isattributesaparateproduct: boolean;
  isblogpage: boolean;
  isleadingpage: boolean;
  isreviewmaster: boolean;
  isseomarketing: boolean;
}

export interface _SizeChartRes {
  success: boolean;
  data: _SizeChart;
  errors: Errors;
  otherData: null;
}

export interface _SizeChart {
  id: number;
  name: string;
  brandId: number;
  sizeChartRange: string;
  description: string;
  measurements: string;
  toogleDisplay: boolean;
  sizeChartView: string;
  recStatus: string;
  createdDate: Date;
  createdBy: number;
  modifiedDate: Date;
  modifiedBy: number;
  rowVersion: string;
  location: string;
  ipAddress: string;
  macAddress: string;
}

export interface _SizeChartTransformed {
  id: number;
  name: string;
  brandId: number;
  sizeChartRange: string[];
  measurements: string[];
  description: string;
  toogleDisplay: boolean;
  recStatus: string;
  createdDate: Date;
  createdBy: number;
  modifiedDate: Date;
  modifiedBy: number;
  rowVersion: string;
  location: string;
  ipAddress: string;
  macAddress: string;
  sizeChartView: { [key: string]: string };
}

export interface Errors {}

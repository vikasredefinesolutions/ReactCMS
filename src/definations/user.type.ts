export interface _signIn {
  storeId: number;
  email: string;
  password: string;
}

export interface _Country {
  id: number;
  name: string;
}

export interface _State {
  id: number;
  name: string;
}

export interface _Industry {
  id: number;
  name: string;
}

export type User = {
  email: string;
  createdDate?: Date;
  role: string;
  lastLoggedIn?: Date;
  firstName: string;
  lastName: string;
};

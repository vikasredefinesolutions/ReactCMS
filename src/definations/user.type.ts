export interface _SignIn {
  storeId: number;
  userName: string;
  password: string;
}

export interface _User {
  firstName: string;
  lastName: string;
  email: string;
  role: number;
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

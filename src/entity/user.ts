export interface auth {
  email: string;
  password: string;
}

export interface user {
  id: string;
  email: string;
  name: string;
}

export interface authResponse {
  success: boolean;
  token: string;
  user: user;
}
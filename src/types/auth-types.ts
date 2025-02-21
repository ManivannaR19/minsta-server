export interface RegisterPayload {
  username: string;
  email_address: string;
  password: string;
}

export interface LoginPayload {
  email_address: string;
  password: string;
}

export interface JWTPayload {
  user_id: number;
  email_address: string;
}

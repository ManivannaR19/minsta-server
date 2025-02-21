export interface User {
  user_id: number;
  username: string;
  email_address: string;
  password: string;
  bio: string;
  profile_picture: string;
  created_at: Date;
  updated_at: Date;
}

/** PAYLOADS **/
export interface CreateUserPayload {
  username: string;
  email_address: string;
  password: string;
}

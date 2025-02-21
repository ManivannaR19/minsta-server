export interface Post {
  post_id: number;
  user_id: number;
  content: string;
  image_url: string;
  created_at: Date;
}

export interface Like {
  like_id: number;
  post_id: number;
  user_id: number;
  created_at: Date;
}

export interface Comment {
  comment_id: number;
  post_id: number;
  user_id: number;
  content: string;
  created_at: Date;
}

/** PAYLOADS **/
export interface CreatePostPayload {
  user_id: number;
  content: string;
  image_url: string;
}

export interface UpdatePostPayload {
  post_id: number;
  user_id: number;
  content: string;
  image_url: string;
}

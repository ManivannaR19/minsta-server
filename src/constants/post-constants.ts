export const ERROR_MAP_GET_ALL_POSTS: Record<string, number> = {
  "Failed to get all posts": 500,
};

export const ERROR_MAP_GET_POST_BY_ID: Record<string, number> = {
  "Post id is required": 400,
  "Inavlid post id": 400,
  "Invalid post id format": 422,
  "Post not found": 404,
};

export const ERROR_MAP_CREATE_POST: Record<string, number> = {
  "User id and content are required": 400,
};

export const ERROR_MAP_UPDATE_POST: Record<string, number> = {
  "Post id, user id and content are required": 400,
};

export const ERROR_MAP_DELETE_POST: Record<string, number> = {
  "Failed to delete post": 500,
  "Post id is required": 400,
  "Inavlid post id": 400,
};

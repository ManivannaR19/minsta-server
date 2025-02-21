import db from "@db";
import {
  CreatePostPayload,
  Post,
  UpdatePostPayload,
} from "src/types/post-types";
import { DatabaseError } from "pg";

const getAllPosts = async () => {
  try {
    const result = await db.query("SELECT * FROM posts");
    return result.rows as Post[];
  } catch (err) {
    const error = err as DatabaseError;
    console.log(`Error in getAllPostsModel: ${error.message}`);
    throw new Error(error.message);
  }
};

const getPostById = async (post_id: number) => {
  try {
    const result = await db.query("SELECT * FROM posts WHERE post_id = $1", [
      post_id,
    ]);

    if (result.rows.length === 0) {
      throw new Error("Post not found");
    }

    return result.rows[0] as Post;
  } catch (err) {
    const error = err as DatabaseError;
    if (error.code === "22P02") {
      throw new Error("Invalid post id format");
    }
    console.log(`Error in getPostByIdModel: ${error.message}`);
    throw new Error(error.message);
  }
};

const createPost = async (payload: CreatePostPayload) => {
  try {
    const { user_id, content, image_url } = payload;
    const result = await db.query(
      "INSERT INTO posts (user_id, content, image_url) VALUES ($1, $2, $3) RETURNING *",
      [user_id, content, image_url]
    );
    return result.rows[0] as Post;
  } catch (err) {
    const error = err as DatabaseError;
    console.log(`Error in createPostModel: ${error.message}`);
    throw new Error(error.message);
  }
};

const updatePost = async (payload: UpdatePostPayload) => {
  try {
    const { post_id, user_id, content, image_url } = payload;
    const result = await db.query(
      "UPDATE posts SET user_id = $1, content = $2, image_url = $3 WHERE post_id = $4 RETURNING *",
      [user_id, content, image_url, post_id]
    );
    return result.rows[0] as Post;
  } catch (err) {
    const error = err as DatabaseError;
    console.log(`Error in updatePostModel: ${error.message}`);
    throw new Error(error.message);
  }
};

const deletePost = async (post_id: number) => {
  try {
    const result = await db.query("DELETE FROM posts WHERE post_id = $1", [
      post_id,
    ]);
    console.log(result);

    return "Post deleted successfully";
  } catch (err) {
    const error = err as DatabaseError;
    console.log(`Error in deletePostModel: ${error.message}`);
    throw new Error(error.message);
  }
};

const likeUnlikePost = async () => {};

const commentOnPost = async () => {};

const editComment = async () => {};

const deleteComment = async () => {};

export default {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  likeUnlikePost,
  commentOnPost,
  editComment,
  deleteComment,
};

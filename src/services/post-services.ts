import PostModels from "../models/post-models";
import { CreatePostPayload, UpdatePostPayload } from "src/types/post-types";

const getAllPosts = async () => {
  try {
    const result = await PostModels.getAllPosts();
    return result;
  } catch (err) {
    const error = err as Error;
    console.log(`Error in getAllPostsService: ${error.message}`);
    throw new Error(error.message);
  }
};

const getPostById = async (post_id: number) => {
  try {
    if (!post_id) throw new Error("Post id is required");
    if (typeof post_id !== "number") throw new Error("Inavlid post id");
    const result = await PostModels.getPostById(post_id);
    return result;
  } catch (err) {
    const error = err as Error;
    console.log(`Error in getPostByIdService: ${error.message}`);
    throw new Error(error.message);
  }
};

const createPost = async (payload: CreatePostPayload) => {
  try {
    const { user_id, content, image_url } = payload;
    if (!user_id || !content)
      throw new Error("User id and content are required");
    const result = await PostModels.createPost({ user_id, content, image_url });
    return result;
  } catch (err) {
    const error = err as Error;
    console.log(`Error in createPostService: ${error.message}`);
    throw new Error(error.message);
  }
};

const updatePost = async (payload: UpdatePostPayload) => {
  try {
    const { post_id, user_id, content, image_url } = payload;
    if (!post_id || !user_id || !content) {
      throw new Error("Post id, user id and content are required");
    }
    const result = await PostModels.updatePost(payload);
    return result;
  } catch (err) {
    const error = err as Error;
    console.log(`Error in updatePostService: ${error.message}`);
    throw new Error(error.message);
  }
};

const deletePost = async (post_id: number) => {
  try {
    if (!post_id) throw new Error("Post id is required");
    if (typeof post_id !== "number") throw new Error("Inavlid post id");
    const result = await PostModels.deletePost(post_id);
    return result;
  } catch (err) {
    const error = err as Error;
    console.log(`Error in deletePostService: ${error.message}`);
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

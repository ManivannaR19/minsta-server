import { Request, Response } from "express";
import PostServices from "../services/post-services";
import { CreatePostPayload, UpdatePostPayload } from "src/types/post-types";
import {
  ERROR_MAP_CREATE_POST,
  ERROR_MAP_DELETE_POST,
  ERROR_MAP_GET_ALL_POSTS,
  ERROR_MAP_GET_POST_BY_ID,
  ERROR_MAP_UPDATE_POST,
} from "src/constants/post-constants";

const getAllPosts = async (req: Request, res: Response) => {
  try {
    const result = await PostServices.getAllPosts();
    res.status(200).json({ message: result });
  } catch (err) {
    const error = err as Error;
    const status = ERROR_MAP_GET_ALL_POSTS[error.message] || 500;
    console.log(`Error in getAllPostsController: ${error.message}`);

    res
      .status(status)
      .json({ message: error.message || "Internal server error" });
  }
};

/**
 * NEED TO ALTER THIS LATER. A DB FUNCTION SHOULD BE CREATED
 * THAT WILL RETURN THE POST DETAILS ALONG WITH ALL IT'S 
 * LIKES AND COMMENTS
 */
const getPostById = async (req: Request, res: Response) => {
  try {
    const { post_id } = req.params;
    const result = await PostServices.getPostById(Number(post_id));
    res.status(200).json({ message: result });
  } catch (err) {
    const error = err as Error;
    const status = ERROR_MAP_GET_POST_BY_ID[error.message] || 500;
    console.log(`Error in getPostByIdController: ${error.message}`);

    res
      .status(status)
      .json({ message: error.message || "Internal server error" });
  }
};

const createPost = async (req: Request, res: Response) => {
  try {
    const { user_id, content, image_url } = req.body as CreatePostPayload;
    const result = await PostServices.createPost({
      user_id,
      content,
      image_url,
    });
    res.status(201).json({ message: result });
  } catch (err) {
    const error = err as Error;
    const status = ERROR_MAP_CREATE_POST[error.message] || 500;
    console.log(`Error in createPostController: ${error.message}`);

    res
      .status(status)
      .json({ message: error.message || "Internal server error" });
  }
};

/**
 * NEED TO ALTER THIS LATER. A DB FUNCTION SHOULD BE CREATED
 * THAT WILL CHECK IF THE POST EXISTS OR NOT AND THEN 
 * PROCEEDS TO UPDATE THE POST
 */
const updatePost = async (req: Request, res: Response) => {
  try {
    const { post_id } = req.params;
    const { user_id, content, image_url } = req.body as UpdatePostPayload;
    const result = await PostServices.updatePost({
      post_id: Number(post_id),
      user_id,
      content,
      image_url,
    });
    res.status(200).json({
      message: result,
    });
  } catch (err) {
    const error = err as Error;
    const status = ERROR_MAP_UPDATE_POST[error.message] || 500;
    console.log(`Error in updatePostController: ${error.message}`);

    res
      .status(status)
      .json({ message: error.message || "Internal server error" });
  }
};

/**
 * NEED TO ALTER THIS LATER. A DB FUNCTION SHOULD BE CREATED
 * THAT WILL CHECK IF THE POST EXISTS OR NOT AND THEN 
 * PROCEED TO DELETE THE POST
 */
const deletePost = async (req: Request, res: Response) => {
  try {
    const { post_id } = req.params;
    const result = await PostServices.deletePost(Number(post_id));
    res.status(200).json({ message: result });
  } catch (err) {
    const error = err as Error;
    const status = ERROR_MAP_DELETE_POST[error.message] || 500;
    console.log(`Error in deletePostController: ${error.message}`);

    res
      .status(status)
      .json({ message: error.message || "Internal server error" });
  }
};

const likeUnlikePost = async (req: Request, res: Response) => {};

const commentOnPost = async (req: Request, res: Response) => {};

const editComment = async (req: Request, res: Response) => {};

const deleteComment = async (req: Request, res: Response) => {};

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

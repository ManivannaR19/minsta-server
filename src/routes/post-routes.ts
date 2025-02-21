import { Router } from "express";
import PostControllers from "../controllers/post-controllers";
import verifyToken from "src/middlewares/verify-token";

const router = Router();

router.get("/", PostControllers.getAllPosts);

router.get("/:post_id", PostControllers.getPostById);

router.post("/", verifyToken, PostControllers.createPost);

router.put("/:post_id", verifyToken, PostControllers.updatePost);

router.delete("/:post_id", verifyToken, PostControllers.deletePost);

router.post("/:post_id/like", verifyToken, PostControllers.likeUnlikePost);

router.post("/:post_id/comment", verifyToken, PostControllers.commentOnPost);

router.put(
  "/:post_id/comment/:comment_id",
  verifyToken,
  PostControllers.editComment
);

router.delete(
  "/:post_id/comment/:comment_id",
  verifyToken,
  PostControllers.deleteComment
);

export default router;

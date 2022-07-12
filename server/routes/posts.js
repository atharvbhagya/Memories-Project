import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  getPost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.get("/:id", getPost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);
router.patch("/:id", updatePost);

export default router;

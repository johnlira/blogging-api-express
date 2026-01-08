import { Response, Request } from "express";
import { createPost } from "./services/create-post";
import { InputPost } from "./posts.interfaces";
import { getAllPosts } from "./services/get-all-posts";
import { getPostById } from "./services/get-post-by-id";
import { updatePost } from "./services/update-post";
import { deletePost } from "./services/delete-post";

export const postsController = {
  create: async (req: Request, res: Response) => {
    const body = req.body as InputPost;
    const post = await createPost(body);
    res.status(200).send({
      message: "Post successfully created.",
      post,
    });
  },
  getAll: async (req: Request, res: Response) => {
    const posts = await getAllPosts();
    res.status(200).send({
      posts,
    });
  },
  getById: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const post = await getPostById(id);
    res.status(200).send({
      post,
    });
  },
  update: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const body = req.body as InputPost;
    const post = await updatePost(id, body);
    res.status(200).send({
      message: "Post successfully updated.",
      post,
    });
  },
  delete: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await deletePost(id);
    res.status(200).send({
      message: "Post successfully deleted.",
    });
  },
};

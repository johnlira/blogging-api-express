import { InputPost } from "../posts.interfaces";
import { postsRepository } from "../posts.repository";
import { getPostById } from "./get-post-by-id";

export const updatePost = async (id: number, input: InputPost) => {
  await getPostById(id);
  const post = await postsRepository.update(id, input);
  return post;
};

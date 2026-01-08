import { postsRepository } from "../posts.repository";
import { getPostById } from "./get-post-by-id";

export const deletePost = async (id: number) => {
  await getPostById(id);
  await postsRepository.delete(id);
};

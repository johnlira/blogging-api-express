import { postsRepository } from "../posts.repository";

export const getAllPosts = async () => {
  const posts = await postsRepository.getAll();
  return posts;
};

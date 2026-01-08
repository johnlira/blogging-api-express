import { postsRepository } from "../posts.repository";

export const getPostById = async (id: number) => {
  const post = await postsRepository.getById(id);
  return post;
};

import AppError from "../../../errors/app-error";
import { InputPost } from "../posts.interfaces";
import { postsRepository } from "../posts.repository";

export const createPost = async (input: InputPost) => {
  const post = await postsRepository.create(input);
  return post;
};

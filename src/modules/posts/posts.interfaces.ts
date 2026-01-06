import z from "zod";

export const inputPostSchema = z.object({
  title: z
    .string()
    .min(2, "Title must have at least 2 characters.")
    .max(50, "Title can't be longer than 50 characters."),
  content: z.string().min(100, "Content must have at least 100 characters."),
  category: z
    .string()
    .min(2, "Category must have at least 2 characters.")
    .max(25, "Category can't be longer than 25 characters."),
  tags: z.array(
    z
      .string()
      .min(2, "Tag must have at least 2 letters.")
      .max(20, "Tag must be at most 20 letters long.")
  ),
});
export type InputPost = z.infer<typeof inputPostSchema>;

export const responsePostSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  category: z.string(),
  tags: z.array(z.string()),
  created_at: z.string(),
  updated_at: z.string(),
});
export type ResponsePost = z.infer<typeof responsePostSchema>;

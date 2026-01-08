import AppError, { NotFoundError } from "../../errors/app-error";
import { pool } from "../../lib/database";
import { InputPost } from "./posts.interfaces";

export const postsRepository = {
  create: async (body: InputPost) => {
    const result = await pool.query(
      `
      INSERT INTO posts (title, content, category, tags)
      VALUES ($1, $2, $3, $4)
      RETURNING id, title, content, category, tags, created_at, updated_at
    `,
      [body.title, body.content, body.category, body.tags]
    );

    if (result.rowCount === 0) {
      throw new AppError("Error on create post in Database", 500);
    }

    return result.rows[0];
  },
  getAll: async () => {
    const result = await pool.query(
      `
      SELECT * FROM posts
      `
    );
    return result.rows;
  },
  getById: async (id: number) => {
    const result = await pool.query(
      `
      SELECT * FROM posts WHERE id = $1
      `,
      [id]
    );

    if (result.rowCount === 0) {
      throw new NotFoundError("Post");
    }

    return result.rows[0];
  },
  update: async (id: number, body: InputPost) => {
    const result = await pool.query(
      `
      UPDATE posts 
      SET title = $1, content = $2, category = $3, tags = $4, updated_at = NOW()
      WHERE id = $5
      RETURNING id, title, content, category, tags, created_at, updated_at
      `,
      [body.title, body.content, body.category, body.tags, id]
    );

    return result.rows[0];
  },
  delete: async (id: number) => {
    await pool.query(
      `
      DELETE FROM posts WHERE id = $1
      `,
      [id]
    );
  },
};

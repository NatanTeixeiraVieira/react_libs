import { z } from 'zod';
import { postSchema } from '../validations/schemas';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type FormPostDatas = z.infer<typeof postSchema>;

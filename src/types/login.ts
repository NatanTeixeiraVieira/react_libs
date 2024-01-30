import { z } from 'zod';
import { loginFormSchema } from '../validations/schemas';

export type LoginDatas = z.infer<typeof loginFormSchema>;

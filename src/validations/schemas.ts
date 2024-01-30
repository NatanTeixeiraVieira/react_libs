import { z } from 'zod';
import { regexEmail } from './regex';

export const loginFormSchema = z.object({
  email: z
    .string({ required_error: 'O email é obrigatório' })
    .trim()
    .min(1, 'O email é obrigatório')
    .email('Email inválido')
    .regex(regexEmail, 'Email inválido'),

  password: z
    .string({ required_error: 'A senha é obrigatória' })
    .trim()
    .min(1, 'A senha é obrigatória')
    .min(8, 'A senha deve conter ao menos 8 caracteres'),
});

export const postSchema = z.object({
  title: z
    .string({ required_error: 'O título é obrigatório' })
    .trim()
    .min(1, 'O título é obrigatório'),
  content: z
    .string({ required_error: 'O conteúdo é obrigatório' })
    .trim()
    .min(1, 'O conteúdo é obrigatório'),
});

import { z } from 'zod';
import { USER_Role } from './user.constants';

const createUserValidations = z.object({
  body: z.object({
    _id: z.string(),
    name: z.string(),
    role: z.nativeEnum(USER_Role).default(USER_Role.user),
    email: z.string().email(),
    password: z.string(),
    phone: z.string(),
  }),
});

const updateUserValidations = z.object({
  body: z.object({
    _id: z.string(),
    name: z.string().optional(),
    role: z.nativeEnum(USER_Role).optional(),
    email: z.string().email().optional(),
    password: z.string().optional(),
    phone: z.string().optional(),
  }),
});

export const UserValidations = {
  createUserValidations,
  updateUserValidations,
};

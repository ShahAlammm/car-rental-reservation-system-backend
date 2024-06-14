import { z } from 'zod';
import { USER_Role } from './user.constants';

const createUserValidations = z.object({
  body: z.object({
    name: z.string(),
    role: z.nativeEnum(USER_Role).default(USER_Role.admin),
    email: z.string().email(),
    password: z.string(),
    phone: z.string(),
    address: z.string(),
  }),
});

const updateUserValidations = z.object({
  body: z.object({
    name: z.string().optional(),
    role: z.nativeEnum(USER_Role).optional(),
    email: z.string().email().optional(),
    password: z.string().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
  }),
});

export const UserValidations = {
  createUserValidations,
  updateUserValidations,
};

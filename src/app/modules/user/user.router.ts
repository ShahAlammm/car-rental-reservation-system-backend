import express from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidations } from './user.validation';
import { auth } from '../../middlewares/auth';
import { USER_Role } from './user.constants';

const router = express.Router();

router.post(
  '/create-admin',
  validateRequest(UserValidations.createUserValidations),
  auth(USER_Role.admin, USER_Role.user),
  UserControllers.cerateAdmin,
);
router.get('/', UserControllers.getAllUser);
router.get('/:email', UserControllers.getSingleUser);
router.get('/:userId', UserControllers.getSingleUserById);

router.put(
  '/:userId',
  validateRequest(UserValidations.updateUserValidations),
  auth(USER_Role.admin, USER_Role.user),
  UserControllers.updateUser,
);

export const UserRoutes = router;

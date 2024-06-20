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
  auth(USER_Role.admin),
  UserControllers.cerateAdmin,
);
router.get('/:userId', UserControllers.getSingleUser);

router.put(
  '/:userId',
  validateRequest(UserValidations.updateUserValidations),
  auth(USER_Role.admin, USER_Role.user),
  UserControllers.updateUser,
);

export const UserRoutes = router;

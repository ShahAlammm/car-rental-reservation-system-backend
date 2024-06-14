import express from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidations } from './user.validation';

const router = express.Router();

router.post(
  '/create-admin',
  validateRequest(UserValidations.createUserValidations),
  UserControllers.cerateAdmin,
);
router.get('/:userId', UserControllers.getSingleUser);


router.put(
  '/:userId',
  validateRequest(UserValidations.updateUserValidations),
  UserControllers.updateUser,
);

export const UserRoutes = router;

import express from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidations } from './user.validation';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(UserValidations.createUserValidations),
  UserControllers.cerateUser,
);
router.get('/:userId', UserControllers.getSingleCar);


router.put(
  '/:userId',
  validateRequest(UserValidations.updateUserValidations),
  UserControllers.updateUser,
);

export const UserRoutes = router;

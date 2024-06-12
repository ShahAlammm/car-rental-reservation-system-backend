import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/', UserControllers.cerateUser);

export const UserRoutes = router;

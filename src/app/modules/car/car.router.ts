import express from 'express';
import { CarControllers } from './car.controller';

const router = express.Router();

router.post('/', CarControllers.cerateCar);

export const CarRoutes = router;

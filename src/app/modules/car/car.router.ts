import express from 'express';
import { CarControllers } from './car.controller';

const router = express.Router();

router.post('/', CarControllers.cerateCar);
router.get('/', CarControllers.getAllCar);
router.get('/:id', CarControllers.getSingleCar);

export const CarRoutes = router;

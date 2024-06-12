import express from 'express';
import { BookingControllers } from './booking.controller';

const router = express.Router();

router.post('/', BookingControllers.cerateBooking);

export const BookingRoutes = router;

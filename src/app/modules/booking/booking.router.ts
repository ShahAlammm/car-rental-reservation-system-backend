import express from 'express';
import { BookingControllers } from './booking.controller';

const router = express.Router();

router.post('/', BookingControllers.cerateBooking);
router.get('/', BookingControllers.getAllBooking);

export const BookingRoutes = router;

import express from 'express';
import { BookingControllers } from './booking.controller';

const router = express.Router();

router.post('/', BookingControllers.cerateBooking);
router.get('/', BookingControllers.getAllBooking);
router.get('/:bookingId', BookingControllers.getSingleBooking);
router.put('/:bookingId', BookingControllers.updateBooking);

export const BookingRoutes = router;

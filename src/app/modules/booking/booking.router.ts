import express from 'express';
import { BookingControllers } from './booking.controller';
import validateRequest from '../../middlewares/validateRequest';
import { BookingValidations } from './booking.validation';

const router = express.Router();

router.post('/',
    validateRequest(BookingValidations.bookingValidation),
    BookingControllers.cerateBooking);
router.get('/', BookingControllers.getAllBooking);
router.get('/:bookingId', BookingControllers.getSingleBooking);
router.put('/:bookingId',
    validateRequest(BookingValidations.updateBookingValidation),
    BookingControllers.updateBooking);

export const BookingRoutes = router;

import { z } from 'zod';

const bookingValidation = z.object({
  body: z.object({
    startDate: z.string(),
    endDate: z.string(),
    pickupLocation: z.string(),
    dropOffLocation: z.string(),
    user: z.string(),
    car: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    totalCost: z.number(),
    isBooked: z.enum(['pending', 'confirmed']),
  }),
});

const updateBookingValidation = z.object({
  body: z.object({
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    pickupLocation: z.string().optional(),
    dropOffLocation: z.string().optional(),
    user: z.string().optional(),
    car: z.string().optional(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
    totalCost: z.number().optional(),
    isBooked: z.enum(['pending', 'confirmed']).optional(),
  }),
});

export const BookingValidations = {
  bookingValidation,
  updateBookingValidation,
};

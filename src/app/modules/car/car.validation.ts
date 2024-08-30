import { z } from 'zod';

const carValidation = z.object({
  name: z.string().min(1, "Car name is required"),
  description: z.string().min(1, "Description is required"),
  color: z.string().min(1, "Color is required"),
  isElectric: z.boolean(),
  status: z.enum(['available', 'unavailable']),
  features: z.array(z.string()).min(1, "At least one feature is required"),
  pricePerHour: z.number().min(0, "Price per hour must be a positive number"),
  image: z.string().url("Invalid image URL"),
  category: z.string().min(1, "Category is required"),
  isDeleted: z.boolean(),
});

export const CarValidations = {
  carValidation,
};
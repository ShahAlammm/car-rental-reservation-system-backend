/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Request, Response } from 'express';
import cors from 'cors';
import { CarRoutes } from './app/modules/car/car.router';
import { BookingRoutes } from './app/modules/booking/booking.router';
import notFound from './app/middlewares/notFound';
import { UserRoutes } from './app/modules/user/user.router';
import { AuthRoutes } from './app/modules/auth/auth.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import cookieParser from 'cookie-parser';
const app = express();

// CORS configuration
const corsOptions = {
  origin: (origin: any, callback: any) => {
    const allowedOrigins = [
      'http://localhost:5173',
      'https://car-rental-client-two.vercel.app',
    ];
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

app.use(cookieParser());
// Parsers

app.use('/api/auth', AuthRoutes);
app.use('/api/users', UserRoutes);
app.use('/api/cars', CarRoutes);
app.use('/api/bookings', BookingRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running perfectly......');
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;

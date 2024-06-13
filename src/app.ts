import express, { Request, Response } from 'express';
import { CarRoutes } from './app/modules/car/car.router';
import { BookingRoutes } from './app/modules/booking/booking.router';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import { AuthRoutes } from './app/modules/auth/auth.route';

const app = express();
//parsers
app.use(express.json());



app.use("/api/auth", AuthRoutes);
app.use('/api/cars', CarRoutes);
app.use('/api/bookings', BookingRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running perfectly......');
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;

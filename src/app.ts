import express, { Request, Response } from 'express';
import { CarRoutes } from './app/modules/car/car.router';
import { UserRoutes } from './app/modules/user/user.router';
import { BookingRoutes } from './app/modules/booking/booking.router';

const app = express();
//parsers
app.use(express.json());



app.use('/api/cars', CarRoutes);
app.use('/api/users', UserRoutes);
app.use('/api/bookings', BookingRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running perfectly......');
});

export default app;

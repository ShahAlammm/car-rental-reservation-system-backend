import express, { Request, Response } from 'express';
import { CarRoutes } from './app/modules/car/car.router';

const app = express();
//parsers
app.use(express.json());



app.use('/api/cars', CarRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running perfectly......');
});

export default app;

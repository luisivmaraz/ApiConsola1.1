import express from 'express';
import morgan from 'morgan';
import { config } from "dotenv";
config();
import routerTickets from './routes/ticketsRoutes.js'; // Cambiado a las rutas de tickets

const app = express();

// configuración
app.set('view engine', 'ejs');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/api/tickets', routerTickets); // Cambiado a utilizar las rutas de tickets

export default app;


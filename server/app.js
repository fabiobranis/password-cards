import express, { json, urlencoded } from 'express';
import cors from 'cors';
import routes from './routes/password-cards.routes.js';
import { CLIENT_ADDRESS, CLIENT_PORT } from './constants.js';

const app = express();

app.use(cors({ origin: `http://${CLIENT_ADDRESS}:${CLIENT_PORT}` }));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use('/api', routes);

export default app;

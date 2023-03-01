import 'reflect-metadata';
import 'dotenv/config';
import '@domain/database/index';
import '@shared/container/index';
import express from "express";
import { routes } from './routes';
import { errorHandling } from '@shared/middlewares/errorHandling';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.use(errorHandling);

export { app };

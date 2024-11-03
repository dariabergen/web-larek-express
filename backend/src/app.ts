import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';
import routers from './routers';
import { errorLogger, requestLogger } from './middleware/logger';
import errorHandler from './middleware/error';

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/weblarek')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(requestLogger);
app.use('/', routers);
app.use(errorHandler);
app.use(errorLogger);
app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
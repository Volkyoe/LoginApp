import mongoose from 'mongoose';

import express from 'express';
import cors from 'cors';
import { createServer } from 'http';

import _ from './config/env.js';
import router from './routes.js';

// Connect to MongoDB Atlas
const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((conn) => {
    conn.set('toJSON', { virtuals: true });
    console.log(`Successfully connected to the database.`);
  })
  .catch((err) => console.error(err))
  .finally();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);

const PORT = process.env.PORT;
const server = createServer(app);
server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

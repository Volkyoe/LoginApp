import express from 'express';
import userRouter from './users/users.route.js';
//* Add more routers here.

const router = express.Router();
router.use('/users', userRouter);
//* Add more routes here.

export default router;

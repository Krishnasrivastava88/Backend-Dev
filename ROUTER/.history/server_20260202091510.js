import express from 'express';
import userRouter from './router/userRouter.js';
const port=3000;
app.use('/api', userRouter);
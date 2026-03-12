import express from 'express';
import userRouter from './router/userRouter.js';
const port=3000;
const app=express();
app.use('/api', userRouter);

app.listen(port,()=>{
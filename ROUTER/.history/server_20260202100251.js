import express from 'express';
import userRouter from './router/userRouter.js';
import registrationRouter from './router/registrationRout.js';
import dashboardRoute from './router/dashboardRoute.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', userRouter);
app.use('/api', dashboardRoute);
app.use('/api', registrationRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

});

import express from 'express';
import { PORT } from './config/env.js';

import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionsRouter from "./routes/subscriptions.routes.js";

const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/subscriptions', subscriptionsRouter);
app.use('/api/v1/users', userRouter);

app.get('/', (req, res) =>{
    res.send( 'Welcome to the Subscriptions Tracker API!')
});

app.listen( PORT, () => {
   console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);
})

export default app;
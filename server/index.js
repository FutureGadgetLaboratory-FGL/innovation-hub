import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/database.js';
import authRouter from './routes/authRouter.js';
import superAdminRouter from './routes/superAdminRouter.js';
import spocRouter from './routes/spocRouter.js';
import universityRouter from './routes/universityRouter.js';
import universityAdminRouter from './routes/universityAdminRouter.js';
import studentRouter from './routes/studentRouter.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb", extended: false }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: false }));
app.use(cors());

app.use('/auth', authRouter);
app.use('/superAdmin', superAdminRouter);
app.use('/spoc', spocRouter);
app.use('/university', universityRouter);
app.use('/universityAdmin', universityAdminRouter);
app.use('/student', studentRouter);

dbConnect();

app.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}`)
})
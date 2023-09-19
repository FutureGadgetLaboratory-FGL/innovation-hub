import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/database.js';
import authRouter from './routes/authRouter.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb", extended: false }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: false }));
app.use(cors());

dbConnect();

app.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}`)
})
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';
import { v2 as cloudinary } from 'cloudinary';
import dbConnect from './config/database.js';
import authRouter from './routes/authRouter.js';
import superAdminRouter from './routes/superAdminRouter.js';
import spocRouter from './routes/spocRouter.js';
import universityRouter from './routes/universityRouter.js';
import universityAdminRouter from './routes/universityAdminRouter.js';
import studentRouter from './routes/studentRouter.js';
import projectRouter from './routes/projectRouter.js';
import collaborationRouter from './routes/collaborationRouter.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: false }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: false }));
app.use(cors());

app.use(fileUpload({
    useTempFiles: true,
    limits: { fileSize: 500 * 2024 * 1024 }
}));

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

app.post("/upload/cloud", async (req, res) => {
    const file = req.files.file;
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
        public_id: `${Date.now()}`,
        resource_type: "auto",
        folder: "files"
    });
    res.json(result.url);
});
app.use('/auth', authRouter);
app.use('/superAdmin', superAdminRouter);
app.use('/spoc', spocRouter);
app.use('/university', universityRouter);
app.use('/universityAdmin', universityAdminRouter);
app.use('/student', studentRouter);
app.use('/project', projectRouter);
app.use('/collaboration', collaborationRouter);

dbConnect();

app.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}`)
});

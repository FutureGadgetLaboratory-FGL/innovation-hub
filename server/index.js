import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/database.js';
import fileUpload from 'express-fileupload';
import { v2 as cloudinary } from 'cloudinary';

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

dbConnect();

app.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}`)
});

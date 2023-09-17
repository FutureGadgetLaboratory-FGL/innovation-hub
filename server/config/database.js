import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbConnect = () => {
    mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("Database Connected"))
        .catch((err) => console.log(err.message));
}

export default dbConnect;
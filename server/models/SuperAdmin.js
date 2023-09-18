import mongoose from "mongoose";

const superAdminSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    password: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female"], required: true },
    profilePhoto: { type: String, required: false },
}, { timestamps: true });

const SuperAdmin = mongoose.model("SuperAdmin", superAdminSchema);

export default SuperAdmin;
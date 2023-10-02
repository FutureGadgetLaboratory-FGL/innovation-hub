import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female"], required: true },
    profilePhoto: { type: String, required: false },
    role: { type: String, enum: ["Student", "SPOC", "UniversityAdmin", "SuperAdmin", "Recruiter"], required: true },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
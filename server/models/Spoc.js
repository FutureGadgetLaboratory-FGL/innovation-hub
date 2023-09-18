import mongoose from "mongoose";

const spocSchema = mongoose.Schema({
    name: { type: String, required: true },
    university: { type: mongoose.Schema.Types.ObjectId, ref: "University", required: true },
    workEmail: {
        type: String,
        required: false,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    personalEmail: {
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
    idCardFront: { type: String, required: true },
    idCardBack: { type: String, required: true },
    enrollment: { type: String, required: true },
}, { timestamps: true });

const Spoc = mongoose.model("Spoc", spocSchema);

export default Spoc;
import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    name: { type: String, required: true },
    university: { type: mongoose.Schema.Types.ObjectId, ref: "University", required: true },
    branch: { type: String, enum: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Other"], required: true },
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
    startYear: { type: Number, required: true },
    endYear: { type: Number, required: true },
    profilePhoto: { type: String, required: false },
    idCardFront: { type: String, required: true },
    idCardBack: { type: String, required: true },
    enrollment: { type: String, required: true },
    sihGems: { type: Number, default: 0 },
    popularity: { type: Number, default: 0 },
}, { timestamps: true });

const Student = mongoose.model("Student", studentSchema);

export default Student;
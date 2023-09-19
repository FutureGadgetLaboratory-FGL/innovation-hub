import mongoose from "mongoose";
import userSchema from "./User";

const studentSchema = mongoose.Schema({
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
    startYear: { type: Number, required: true },
    endYear: { type: Number, required: true },
    idCardFront: { type: String, required: true },
    idCardBack: { type: String, required: true },
    enrollment: { type: String, required: true },
    sihGems: { type: Number, default: 0 },
    popularity: { type: Number, default: 0 },
    status: {
        type: String,
        enum: ['pending', 'verified', 'rejected'],
        required: true,
    },
    verifiedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spoc',
        required: function () {
            return this.status === 'verified';
        },
    },
});

const spocSchema = mongoose.Schema({
    university: { type: mongoose.Schema.Types.ObjectId, ref: "University", required: true },
    workEmail: {
        type: String,
        required: false,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    idCardFront: { type: String, required: true },
    idCardBack: { type: String, required: true },
    enrollment: { type: String, required: true },
    status: {
        type: String,
        enum: ['pending', 'verified', 'rejected'],
        required: true,
    },
    verifiedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SuperAdmin',
        required: function () {
            return this.status === 'verified';
        },
    },
});

const universityAdminSchema = mongoose.Schema({
    university: { type: mongoose.Schema.Types.ObjectId, ref: "University", required: true },
    workEmail: {
        type: String,
        required: false,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    idCardFront: { type: String, required: true },
    idCardBack: { type: String, required: true },
    enrollment: { type: String, required: true },
    status: {
        type: String,
        enum: ['pending', 'verified', 'rejected'],
        required: true,
    },
    verifiedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spoc',
        required: function () {
            return this.status === 'verified';
        },
    },
});

const superAdminSchema = mongoose.Schema({
});

const recruiterSchema = mongoose.Schema({
    
})

const SuperAdmin = userSchema.discriminator('SuperAdmin', superAdminSchema);
const Spoc = userSchema.discriminator('Spoc', spocSchema);
const UniversityAdmin = userSchema.discriminator('UniversityAdmin', universityAdminSchema);
const Student = userSchema.discriminator('Student', studentSchema);
const Recruiter = userSchema.discriminator('Recruiter', recruiterSchema);

export default { SuperAdmin, Spoc, UniversityAdmin, Student, Recruiter };
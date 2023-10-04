import mongoose from "mongoose";
import userSchema from "./User.js";

const studentSchema = mongoose.Schema({
    university: { type: mongoose.Schema.Types.ObjectId, ref: "University", required: true },
    course: { type: String, enum: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Other"], required: true },
    workEmail: {
        type: String,
        required: false,
        unique: true,
        trim: true,
        lowercase: true,
    },
    startYear: { type: Number, required: true },
    endYear: { type: Number, required: true },
    idCardFront: { type: String, required: false },
    idCardBack: { type: String, required: false },
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
        ref: 'SPOC',
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
        unique: false,
        trim: true,
        lowercase: true,
    },
    idCardFront: { type: String, required: false },
    idCardBack: { type: String, required: false },
    enrollment: { type: String, required: true },
    status: {
        type: String,
        enum: ['pending', 'verified', 'rejected'],
        required: true,
        default: "pending"
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
    },
    idCardFront: { type: String, required: false },
    idCardBack: { type: String, required: false },
    enrollment: { type: String, required: true },
    status: {
        type: String,
        enum: ['pending', 'verified', 'rejected'],
        required: true,
    },
});

const superAdminSchema = mongoose.Schema({
});

const recruiterSchema = mongoose.Schema({

})

export const SuperAdmin = userSchema.discriminator('SuperAdmin', superAdminSchema);
export const SPOC = userSchema.discriminator('SPOC', spocSchema);
export const UniversityAdmin = userSchema.discriminator('UniversityAdmin', universityAdminSchema);
export const Student = userSchema.discriminator('Student', studentSchema);
export const Recruiter = userSchema.discriminator('Recruiter', recruiterSchema);

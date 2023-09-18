import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    methodology: { type: String, default: "" },
    outcome: { type: String, default: "" },
    report: {
        data: Buffer,
        contentType: String,
        filename: String
    },
    files: [{
        data: Buffer,
        contentType: String,
        filename: String
    }],
    owner: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    }],
    collaborators: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: false
    }],
    status: {
        type: String,
        enum: ['pending', 'verified', 'rejected'],
        required: true,
    },
    verifiedBy: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'verifiedByType', 
        required: function () {
            return this.status === 'verified'; 
        },
    },
    verifiedByType: {
        type: String,
        enum: ['Spoc', 'UniversityAdmin'],
        default: null, 
    },
}, { timestamps: true });

const Project = mongoose.model("Project", projectSchema);

export default Project;
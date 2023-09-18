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
    collaborator: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: false
    }],
}, { timestamps: true });

const Project = mongoose.model("Project", projectSchema);

export default Project;
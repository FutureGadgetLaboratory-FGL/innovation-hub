import mongoose from 'mongoose';

const collaborationSchema = mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
    message: { type: String, required: true },
    status: { type: String, enum: ["Pending", "Accepted", "Rejected"], required: true },
}, { timestamps: true });

const Collaboration = mongoose.model("Collaboration", collaborationSchema);

export default Collaboration;
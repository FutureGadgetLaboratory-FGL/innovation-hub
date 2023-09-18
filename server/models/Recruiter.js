import mongoose from "mongoose";

const recruiterSchema = mongoose.Schema({

}, { timestamps: true });

const Recruiter = mongoose.model("recruiter", RecruiterSchema);

export default Recruiter;
import mongoose from "mongoose";

const likeSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
        required: true,
    },
});

const reviewSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
        required: true,
    },
    text: { type: String, required: false },
    rating: { type: Number, enum: [1, 2, 3, 4, 5], required: true },
}, { timestamps: true });

const commentSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
        required: true,
    },
    text: { type: String, required: true },
}, { timestamps: true });

const shareSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
        required: true,
    },
});

const projectSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    methodology: { type: String, default: "" },
    outcome: { type: String, default: "" },
    report: {
        type: String, required: false,
    },
    coverPhoto: { type: String, required: false },
    files: [
        {
            type: String,
        },
    ],
    university: {
        type: mongoose.Schema.Types.ObjectId,   
        ref: "University",
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
    },
    collaborators: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: false,
        },
    ],
    status: {
        type: String,
        enum: ["pending", "verified", "rejected"],
        required: true,
        default: "pending",
    },
    verifiedBy: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: "verifiedByType",
        required: function () {
            return this.status === "verified";
        },
    },
    verifiedByType: {
        type: String,
        enum: ["Spoc", "UniversityAdmin"],
        required: function () {
            return this.status === "verified";
        },
    },
    likes: [likeSchema], 
    reviews: [reviewSchema], 
    comments: [commentSchema], 
    shares: [shareSchema], 
},
    { timestamps: true });

const Project = mongoose.model("Project", projectSchema);

export default Project;

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
    text: { type: String, required: true },
    rating: { type: Number, required: true },
});

const commentSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
        required: true,
    },
    text: { type: String, required: true },
});

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
        data: Buffer,
        contentType: String,
        filename: String,
    },
    files: [
        {
            data: Buffer,
            contentType: String,
            filename: String,
        },
    ],
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
        default: null,
    },
    likes: [likeSchema], 
    reviews: [reviewSchema], 
    comments: [commentSchema], 
    shares: [shareSchema], 
},
    { timestamps: true });

const Project = mongoose.model("Project", projectSchema);

export default Project;

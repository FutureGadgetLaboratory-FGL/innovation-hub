import mongoose from "mongoose";

const universitySchema = mongoose.Schema({
    name: { type: String, required: true },
    area: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    pincode: { type: Number, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    // courses: [{
    //     type: String,
    //     required: true,
    // }],
    status: { type: String, enum: ["verified", "pending", "rejected"], default: "pending" },
    verifiedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SuperAdmin',
        required: function () {
            return this.status === 'verified';
        },
        default: null,
    },
    sihGems: { type: Number, default: 0 },
    popularity: { type: Number, default: 0 },
    ranking: { type: Number, required: true, default: 0 },
}, { timestamps: true });

const University = mongoose.model("University", universitySchema);

export default University;
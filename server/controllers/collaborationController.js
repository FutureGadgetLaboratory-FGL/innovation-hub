import Collaboration from "../models/Collaboration.js";
import Project from "../models/Project.js";
import University from "../models/University.js";
import { Student } from "../models/Roles.js";

export const getCollaborations = async (req, res) => {
    try {
        const collaborations = await Collaboration.find().populate('sender').populate('project').populate('owner').exec();
        res.status(200).json(collaborations);
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Something went wrong. See error message for more details.",
            err
        });
    }
}

export const getCollaborationById = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({
            success: false,
            message: "Collaboration id is required"
        });

        const collaboration = await Collaboration.findById(req.params.id).populate('sender').populate('project').populate('owner').exec();
        if (!collaboration) return res.status(404).json({
            success: false,
            message: "Collaboration not found"
        });

        res.status(200).json({
            success: true,
            message: "Collaboration found successfully",
            data: collaboration
        });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const getCollaborationsByStudentId = async (req, res) => {
    try {
        const studentId = req.params.id;
        if (!studentId) return res.status(400).json({
            success: false,
            message: "Student id is required"
        });

        const requests = await Collaboration.find().populate('sender').populate('project').populate('owner').exec();
        const collaborations = requests.filter(request => request.sender._id == studentId);

        res.status(200).json({
            success: true,
            message: "Collaborations found successfully",
            data: collaborations
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Something went wrong. See error message for more details.",
            err
        });
    }
}

export const getCollaborationsByUniversityId = async (req, res) => {
    try {
        const universityId = req.params.id;
        if (!universityId) return res.status(400).json({
            success: false,
            message: "University id is required"
        });

        const allCollaborations = await Collaboration.find().populate('sender').populate('project').populate('owner').exec();
        const requests = allCollaborations.filter(request => request.sender.university == universityId);

        for (let i = 0; i < requests.length; i++) {
            requests[i].sender.university = await University.findById(requests[i].sender.university);
        }

        res.status(200).json({
            success: true,
            message: "Collaborations found successfully",
            data: requests
        });
    } catch (err) {
        console.log(err);
        res.status(404).json({
            success: false,
            message: "Something went wrong. See error message for more details.",
            err
        });
    }
}

export const createCollaboration = async (req, res) => {
    try {
        const { sender, project, message, owner } = req.body;
        if (!sender || !project || !message || !owner) return res.status(400).json({
            success: false,
            message: "sender, project and message fields are required"
        });

        const student = await Student.findById(sender);
        if (!student) return res.status(404).json({
            success: false,
            message: "Student not found"
        });

        const existingProject = await Project.findById(project);
        if (!existingProject) return res.status(404).json({
            success: false,
            message: "Project not found"
        });

        const collaboration = await Collaboration.create(req.body);
        res.status(201).json({
            success: true,
            message: "Collaboration created successfully",
            data: collaboration
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong. See error message for more details.",
            err
        });
    }
}

export const acceptCollaboration = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({
            success: false,
            message: "Collaboration id is required"
        });

        const collaboration = await Collaboration.findByIdAndUpdate(id, { status: "accepted" }, { new: true });
        if (!collaboration) return res.status(404).json({
            success: false,
            message: "Collaboration not found"
        });

        const project = await Project.findByIdAndUpdate(collaboration.project, { $push: { collaborators: collaboration.sender } }, { new: true });
        if (!project) return res.status(404).json({
            success: false,
            message: "Project not found"
        });

        res.status(200).json({
            success: true,
            message: "Collaboration accepted successfully",
            data: collaboration
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Something went wrong. See error message for more details.",
            err
        });
    }
}

export const rejectCollaboration = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({
            success: false,
            message: "Collaboration id is required"
        });

        const collaboration = await Collaboration.findByIdAndUpdate(id, { status: "rejected" }, { new: true });
        if (!collaboration) return res.status(404).json({
            success: false,
            message: "Collaboration with that id not found"
        });

        res.status(200).json({
            success: true,
            message: "Collaboration rejected successfully",
            data: collaboration
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Something went wrong. See error message for more details.",
            err
        });
    }
}

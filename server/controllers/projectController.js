import Project from '../models/Project.js';

export const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find().populate('owner').populate('university').exec();
        return res.status(200).json({
            success: true,
            data: projects,
            message: "Projects' details fetched successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching project details. Check err for more details.",
            err
        })
    }
}

export const getProjectById = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({
            success: false,
            message: "Project Id not recived from client side."
        });

        const project = await Project.findById(id).populate('owner').populate('verifiedBy').exec();
        if (!project) return res.status(404).json({
            success: false,
            message: "No project found with that id."
        });

        return res.status(200).json({
            success: true,
            data: project,
            message: "Project details fetched successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching project details. Check err for more details.",
            err
        })
    }
}

export const getProjectByUniversityId = async (req, res) => {
    try {
        const university = req.params.id;
        if (!university) return res.status(400).json({
            success: false,
            message: "University Id not recived from client side."
        });

        const projects = await Project.find({ university }).populate('owner').exec();
        if (!projects) return res.status(404).json({
            success: false,
            message: "No project found for university with that id."
        });

        return res.status(200).json({
            success: true,
            data: projects,
            message: "Project details fetched successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching project details of the requested university. Check err for more details.",
            err
        })
    }
}

export const getProjectByStudentId = async (req, res) => {
    try {
        const owner = req.params.id;
        if (!owner) return res.status(400).json({
            success: false,
            message: "Student Id not recived from client side."
        });

        const projects = await Project.find({ owner });
        if (!projects) return res.status(404).json({
            success: false,
            message: "No project found for student with that id."
        });

        return res.status(200).json({
            success: true,
            data: projects,
            message: "Project details fetched successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching project details of the requested student. Check err for more details.",
            err
        })
    }
}

export const updateProject = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, description, methodology, outcome, report, files } = req.body;
        if (!id) return res.status(400).json({
            success: false,
            message: "Project Id not recived from client side."
        });

        const project = await Project.findById(id);
        if (!project) return res.status(404).json({
            success: false,
            message: "No project found with that id."
        });

        if (title) project.title = title;
        if (description) project.description = description;
        if (methodology) project.methodology = methodology;
        if (outcome) project.outcome = outcome;
        if (report) project.report = report;
        if (files) project.files = files;

        const updatedProject = await project.save();

        return res.status(200).json({
            success: true,
            data: updatedProject,
            message: "Project details updated successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while updating project details. Check err for more details.",
            err
        })
    }
}

export const deleteProject = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({
            success: false,
            message: "Project Id not recived from client side."
        });

        const project = await Project.findById(id);
        if (!project) return res.status(404).json({
            success: false,
            message: "No project found with that id."
        });

        await project.delete();

        return res.status(200).json({
            success: true,
            message: "Project deleted successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while deleting project. Check err for more details.",
            err
        })
    }
}

export const updateProjectStatus = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({
            success: false,
            message: "Project Id not recived from client side."
        });

        const { status, verifiedBy, verifiedByType } = req.body;
        if (!status || !verifiedBy || !verifiedByType) return res.status(400).json({
            success: false,
            message: "Bad Request. Required fields not found."
        });
        
        const project = await Project.findByIdAndUpdate(id, { status, verifiedBy, verifiedByType }, { new: true }).populate('owner').populate('verifiedBy').exec();
        if (!project) return res.status(404).json({
            success: false,
            message: "No project found with that id."
        });

        return res.status(200).json({
            success: true,
            data: project,
            message: "Project status updated successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while updating project status. Check err for more details.",
            err
        })
    }
}

export const likeProject = async (req, res) => {
    try {
        const id = req.params.id;
        const { userId } = req.body;
        if (!id) return res.status(400).json({
            success: false,
            message: "Project Id not recived from client side."
        });
        if (!userId) return res.status(400).json({
            success: false,
            message: "User Id not recived from client side."
        });

        const project = await Project.findById(id);
        if (!project) return res.status(404).json({
            success: false,
            message: "No project found with that id."
        });

        const like = {
            userId,
        }

        project.likes.push(like);
        const updatedProject = await project.save();

        return res.status(200).json({
            success: true,
            data: updatedProject,
            message: "Project liked successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong. Check err for more details.",
            err
        })
    }
}

export const unlikeProject = async (req, res) => {
    try {
        const id = req.params.id;
        const { userId } = req.body;
        if (!id) return res.status(400).json({
            success: false,
            message: "Project Id not recived from client side."
        });
        if (!userId) return res.status(400).json({
            success: false,
            message: "User Id not recived from client side."
        });

        const project = await Project.findById(id);
        if (!project) return res.status(404).json({
            success: false,
            message: "No project found with that id."
        });

        const like = project.likes.find(like => like.userId == userId);
        if (!like) return res.status(404).json({
            success: false,
            message: "No like found with that user id."
        });

        project.likes.pull(like);
        const updatedProject = await project.save();

        return res.status(200).json({
            success: true,
            data: updatedProject,
            message: "Project unliked successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong. Check err for more details.",
            err
        })
    }
}

export const reviewProject = async (req, res) => {
    try {
        const id = req.params.id;
        const { userId, text, rating } = req.body;
        if (!id) return res.status(400).json({
            success: false,
            message: "Project Id not recived from client side."
        });
        if (!student) return res.status(400).json({
            success: false,
            message: "User Id not recived from client side."
        });
        if (!rating) return res.status(400).json({
            success: false,
            message: "Rating not recived from client side."
        });

        const project = await Project.findById(id);
        if (!project) return res.status(404).json({
            success: false,
            message: "No project found with that id."
        });

        const newReview = {
            userId,
            text,
            rating
        }

        project.reviews.push(newReview);
        const updatedProject = await project.save();

        return res.status(200).json({
            success: true,
            data: updatedProject,
            message: "Project reviewed successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong. Check err for more details.",
            err
        })
    }
}

export const commentProject = async (req, res) => {
    try {
        const id = req.params.id;
        const { userId, text } = req.body;
        if (!id) return res.status(400).json({
            success: false,
            message: "Project Id not recived from client side."
        });
        if (!student) return res.status(400).json({
            success: false,
            message: "User Id not recived from client side."
        });
        if (!text) return res.status(400).json({
            success: false,
            message: "Text not recived from client side."
        });

        const project = await Project.findById(id);
        if (!project) return res.status(404).json({
            success: false,
            message: "No project found with that id."
        });

        const newComment = {
            userId,
            text,
        }

        project.comments.push(newComment);
        const updatedProject = await project.save();

        return res.status(200).json({
            success: true,
            data: updatedProject,
            message: "Project commented successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong. Check err for more details.",
            err
        })
    }
}

export const shareProject = async (req, res) => {
    try {
        const id = req.params.id;
        const { userId } = req.body;
        if (!id) return res.status(400).json({
            success: false,
            message: "Project Id not recived from client side."
        });
        if (!student) return res.status(400).json({
            success: false,
            message: "User Id not recived from client side."
        });

        const project = await Project.findById(id);
        if (!project) return res.status(404).json({
            success: false,
            message: "No project found with that id."
        });

        const newShare = {
            userId,
        }

        project.shares.push(newShare);
        const updatedProject = await project.save();

        return res.status(200).json({
            success: true,
            data: updatedProject,
            message: "Project shared successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong. Check err for more details.",
            err
        })
    }
}

export const createProject = async (req, res) => {
    try {
        const { title, description, methodology, outcome, report, coverPhoto, files, university, owner } = req.body;
        if (!title || !description || !university || !owner) return res.status(400).json({
            success: false,
            message: "Bad Request. Required fields not found."
        });


        const project = new Project({
            title,
            description,
            methodology,
            outcome,
            report,
            coverPhoto,
            files,
            university,
            owner
        });

        const newProject = await project.save();

        return res.status(200).json({
            success: true,
            data: newProject,
            message: "Project created successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong. Check err for more details.",
            err
        })
    }
}
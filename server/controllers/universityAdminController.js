import { UniversityAdmin } from "../models/Roles.js";
import User from "../models/User.js";

export const getAllUniversityAdmin = async (req, res) => {
    try {
        const universityAdmins = await UniversityAdmin.find();
        return res.status(200).json({
            success: true,
            data: universityAdmins,
            message: "UniversityAdmins' details fetched successfully."
        })
    } catch (err) {
        console.log(err);

        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching UniversityAdmin details. Check err for more details.",    
            err
        })
    }   
}

export const getUniversityAdmin = async (req, res) => {
    try {
        const university = req.params.id;
        if (!university) return res.status(400).json({
            success: false,
            message: "University Id not recived from client side."
        });

        const universityAdmin = await UniversityAdmin.find({ university });
        if (!universityAdmin) return res.status(404).json({
            success: false,
            message: "No UniversityAdmin found for university with that id."
        });

        return res.status(200).json({
            success: true,
            data: universityAdmin,
            message: "UniversityAdmin details fetched successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching UniversityAdmin details of the requested university. Check err for more details.",
            err
        })
    }
}

export const getUniversityAdminById = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({
            success: false,
            message: "UniversityAdmin Id not recived from client side."
        });

        const universityAdmin = await UniversityAdmin.find({_id: id});
        if (!universityAdmin) return res.status(404).json({
            success: false,
            message: "No UniversityAdmin found with that id."
        });

        return res.status(200).json({
            success: true,
            data: universityAdmin,
            message: "UniversityAdmin details fetched successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching UniversityAdmin details. Check err for more details.",
            err
        })
    }
}

export const updateUniversityAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({
            success: false,
            message: "UniversityAdmin Id not recived from client side."
        });

        const { email } = req.body;
        if (email) {
            const user = await User.findOne({ email });
            if (user) return res.status(400).json({
                success: false,
                message: "User with that email already exists."
            });
        }

        const { status, ...rest } = req.body;
        if (!id) return res.status(400).json({
            success: false,
            message: "Id not recived from client side."
        });

        const universityAdmin = await UniversityAdmin.find({ _id: id });
        if (!universityAdmin) return res.status(404).json({
            success: false,
            message: "No UniversityAdmin found with that id."
        });

        const updatedUniversityAdmin = await UniversityAdmin.findByIdAndUpdate(id, { ...rest }, { new: true });
        if (!updatedUniversityAdmin) return res.status(200).json({
            success: false,
            message: "UniversityAdmin details can't be updated. Bad request."
        });

        return res.status(200).json({
            success: true,
            data: updatedUniversityAdmin,
            message: "UniversityAdmin details updated successfully."
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while updating UniversityAdmin details. Check err for more details.",
            err
        })
    }
}

export const updateStatus = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({
            success: false,
            message: "Id not recived from client side."
        });

        const { status } = req.body;
        if (!status) return res.status(400).json({
            success: false,
            message: "Bad Request. Required fields not found."
        });
        
        const universityAdmin = await UniversityAdmin.findByIdAndUpdate(id, { status }, { new: true });
        if (!universityAdmin) return res.status(404).json({
            success: false,
            message: "No UniversityAdmin found with that id."
        });

        return res.status(200).json({
            success: true,
            data: universityAdmin,
            message: "UniversityAdmin status updated successfully."
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while updating UniversityAdmin status. Check err for more details.",
            err
        })
    }
}

export const deleteUniversityAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({
            success: false,
            message: "Id not recived from client side."
        });

        const universityAdmin = await UniversityAdmin.findOne({ _id: id });
        if (!universityAdmin) return res.status(404).json({
            success: false,
            message: "No UniversityAdmin found with that id."
        });

        await UniversityAdmin.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            data: universityAdmin,
            message: "Deleted UniversityAdmin record successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while deleting UniversityAdmin details. Check err for more details.",
            err
        })
    }
}
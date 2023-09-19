import { Spoc } from "../models/Roles.js";
import User from "../models/User.js";

export const getUniversitySpoc = async (req, res) => {
    try {
        const university = req.params.id;
        if (!university) return res.status(400).json({
            success: false,
            message: "University Id not recived from client side."
        });

        const spoc = await Spoc.find({ university });
        if (!spoc) return res.status(404).json({
            success: false,
            message: "No spoc found for university with that id."
        });

        return res.status(200).json({
            success: true,
            data: spoc,
            message: "Spoc details fetched successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching spoc details of the requested university. Check err for more details.",
            err
        })
    }
}

export const getSpocById = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({
            success: false,
            message: "Spoc Id not recived from client side."
        });

        const spoc = await Spoc.find({ _id: id });
        if (!spoc) return res.status(404).json({
            success: false,
            message: "No spoc found with that id."
        });

        return res.status(200).json({
            success: true,
            data: spoc,
            message: "Spoc details fetched successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching spoc details. Check err for more details.",
            err
        })
    }
}

export const updateSpoc = async (req, res) => {
    try {
        const { id, status, verifiedBy, ...rest } = req.body;
        if (!id) return res.status(400).json({
            success: false,
            message: "Id not recived from client side."
        });

        const { email } = req.body;
        if (email) {
            const user = await User.findOne({ email });
            if (user) return res.status(400).json({
                success: false,
                message: "User with that email already exists."
            });
        }

        const spoc = await Spoc.findOne({ _id: id });
        if (!spoc) return res.status(404).json({
            success: false,
            message: "No spoc found with that id."
        });

        const updatedSpoc = await Spoc.findByIdAndUpdate(id, { ...rest }, { new: true });
        if (!updatedSpoc) return res.status(200).json({
            success: false,
            message: "Spoc details can't be updated. Bad request."
        });

        return res.status(200).json({
            success: true,
            data: updatedSpoc,
            message: "Spoc details updated successfully."
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while updating spoc details. Check err for more details.",
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

        const { status, verifiedBy } = req.body;
        if (!status || !verifiedBy) return res.status(400).json({
            success: false,
            message: "Bad Request. Required fields not found."
        });

        const spoc = await Spoc.findByIdAndUpdate(id, { status, verifiedBy });
        if (!spoc) return res.status(404).json({
            success: false,
            message: "No spoc found with that id."
        });

        return res.status(200).json({
            success: true,
            data: spoc,
            message: "Spoc status updated successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while updating spoc status. Check err for more details.",
            err
        })
    }
}

export const deleteSpoc = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({
            success: false,
            message: "Id not recived from client side."
        });

        const spoc = await Spoc.find({ _id: id });
        if (!spoc) return res.status(404).json({
            success: false,
            message: "No spoc found with that id."
        });

        await Spoc.findByIdAndDelete(id);

        return res.status(200).json({
            success: true, 
            message: "Deleted spoc record successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while deleting spoc details. Check err for more details.",
            err
        })
    }
}
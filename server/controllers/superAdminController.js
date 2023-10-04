import bcrypt from 'bcrypt';
import { SuperAdmin } from '../models/Roles.js';

export const getAll = async (req, res) => {
    try {
        const superAdmins = await SuperAdmin.find();
        return res.status(200).json({
            success: true,
            data: superAdmins,
            message: "Data fetched successfully"
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong. Check err for details.",
            err
        })
    }
}

export const getById = async (req, res) => {
    const id = req.params.id;
    try {
        const superAdmin = await SuperAdmin.findOne({ _id: id });
        if (!superAdmin) return res.status(404).json({
            success: false,
            message: "No super admin found with that id."
        });

        return res.status(200).json({
            success: true,
            data: superAdmin,
            message: "Details of super admin fetched successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong. Check err for details.",
            err
        })
    }
}

export const setPassword = async (req, res) => {
    const id = req.params.id;
    if (!id) return res.status(400).json({
        success: false,
        message: "Id not recieved from client side."
    });

    try {
        const superAdmin = await SuperAdmin.findOne({ _id: id });
        if (!superAdmin) return res.status(404).json({
            success: false,
            message: "No super admin found with that id."
        });

        const password = req.body.password;
        const hashedPassword = await bcrypt.hash(password, 10);

        const updatedAdmin = await SuperAdmin.findByIdAndUpdate(id, { password: hashedPassword }, { new: true });
        return res.status(200).json({
            success: true,
            data: updatedAdmin,
            message: "Password successfully added."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong. Check err for details.",
            err
        })
    }
}
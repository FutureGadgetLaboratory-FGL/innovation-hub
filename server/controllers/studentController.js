import { Student } from "../models/Roles.js";
import User from "../models/User.js";

export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        return res.status(200).json({
            success: true,
            data: students,
            message: "Students' details fetched successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching student details. Check err for more details.",
            err
        })
    }
}

export const getStudentById = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({
            success: false,
            message: "Student Id not recived from client side."
        });

        const student = await Student.find({ _id: id });
        if (!student) return res.status(404).json({
            success: false,
            message: "No student found with that id."
        });

        return res.status(200).json({
            success: true,
            data: student,
            message: "Student details fetched successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching student details. Check err for more details.",
            err
        })
    }
}

export const getStudentsByFilter = async (req, res) => {
    try {
        const filter = req.body;
        if (!filter) return res.status(400).json({
            success: false,
            message: "Bad request. Filter not found in request body."
        });

        const students = await Student.find({ ...filter });
        return res.status(200).json({
            success: true,
            data: students,
            message: "Students fetched successfully"
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Server error. See err for more details.",
            err
        });
    }
}

export const updateStudent = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({
            success: false,
            message: "Student Id not recived from client side."
        });

        const { role, sihGems, popularity, status, verifiedBy, email, ...rest } = req.body;
        if (email) {
            const user = await User.findOne({ email });
            if (!user) return rhes.status(404).json({
                success: false,
                message: "No user found with that email."
            });
        }

        const student = await Student.findByIdAndUpdate(id, { ...rest }, { new: true });
        if (!student) return res.status(404).json({
            success: false,
            message: "No student found with that id."
        });

        return res.status(200).json({
            success: true,
            data: student,
            message: "Student details fetched successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching student details. Check err for more details.",
            err
        })
    }
}

export const updateStudentStatus = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({
            success: false,
            message: "Student Id not recived from client side."
        });

        const { status, verifiedBy } = req.body;
        if (!status || !verifiedBy) return res.status(400).json({
            success: false,
            message: "Bad Request. Required fields not found."
        });
        const student = await Student.findByIdAndUpdate(id, { status, verifiedBy }, { new: true });
        if (!student) return res.status(404).json({
            success: false,
            message: "No student found with that id."
        });

        return res.status(200).json({
            success: true,
            data: student,
            message: "Student details fetched successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching student details. Check err for more details.",
            err
        })
    }
}

export const deleteStudent = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({
            success: false,
            message: "Student Id not recived from client side."
        });

        const student = await Student.findByIdAndDelete(id);
        if (!student) return res.status(404).json({
            success: false,
            message: "No student found with that id."
        });

        return res.status(200).json({
            success: true,
            data: student,
            message: "Student deleted successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while deleting student details. Check err for more details.",
            err
        })
    }
}

export const getStudentsByUniversityId = async (req, res) => {
    try {
        const universityId = req.params.id;
        if (!universityId) return res.status(400).json({
            success: false,
            message: "University Id not recived from client side."
        });

        const students = await Student.find({ university: universityId });
        if (!students) return res.status(404).json({
            success: false,
            message: "No student found with that university id."
        });

        return res.status(200).json({
            success: true,
            data: students,
            message: "Student details fetched successfully."
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching student details. Check err for more details.",
            err
        });
    }
}
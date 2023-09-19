import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const signin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and password required"
        });
    }
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) return res.status(404).json({
            success: false,
            message: "No user exists with that email ID"
        });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) return res.status(403).json({
            success: false,
            message: "Invalid credentials"
        });

        let user = null;
        switch (existingUser.role) {
            case "SuperAdmin":
                user = await SuperAdmin.findOne({ email });
                break;
            case "Spoc":
                user = await Spoc.findOne({ email });
                break;
            case "UniversityAdmin":
                user = await UniversityAdmin.findOne({ email });
                break;
            case "Student":
                user = await Student.findOne({ email });
                break;
            case "Recruiter":
                user = await Recruiter.findOne({ email });
                break;
            default:
                return res.status(500).json({
                    success: false,
                    message: "Something went wrong. Profile role cannot be fetched."
                });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1000h' });

        return res.status(200).json({
            success: true,
            data: user,
            token,
            message: "Logged in successfully",
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Server Error",
            err
        });
    }
}

export const signup = async (req, res) => {
    const { email, password, confirmPassword, role } = req.body.role;
    if (!role) {
        return res.status(400).json({
            success: false,
            message: "Bad request. \"role\" field not found"
        });
    } 
    if (role === "SuperAdmin") return res.status(403).json({
        success: false,
        message: "Super Admins can't be added through api calls."
    })

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(403).json({
            success: false,
            message: "An account with this email already exists"
        });

        if (password !== confirmPassword) return res.status(400).json({
            success: false,
            message: "Passwords do not match"
        });

        const { confirmPassword, ...rest } = req.body;
        let user = null;
        const hashedPassword = await bcrypt.hash(password, 10);
        switch (role) {
            case "Student":
                user = await Student.create({ ...rest, password: hashedPassword });
                break;
            case "UniversityAdmin":
                user = await UniversityAdmin.create({ ...rest, password: hashedPassword });
                break;
            case "Spoc":
                user = await Spoc.create({ ...rest, password: hashedPassword });
                break;
            case "Recruiter":
                user = await Recruiter.create({ ...rest, password: hashedPassword });
                break;
        }

        const token = jwt.sign({ id: _id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1000h' });

        return res.status(200).json({
            success: true,
            data: user,
            token,
            message: "Signed up successfully",
        });
    } catch (error) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Server Error",
            err
        });
    }
}
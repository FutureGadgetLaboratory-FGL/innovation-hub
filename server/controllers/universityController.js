import University from '../models/University.js';

export const register = async (req, res) => {
    try {
        const details = req.body;
        if (!details) return res.status(400).json({
            success: false,
            message: "Bad Request. University details not found."
        });

        const university = await University.create({ ...details, status: "pending", verifiedBy: null, sihGems: 0, popularity: 0, ranking: 0 });
        if (!university) return res.status(400).json({
            success: false,
            message: "Unable to create university record. Details recieved are inconsistent."
        });

        res.status(200).json({
            success: true,
            data: university,
            message: "University record created successfully. Verification status pending."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while storing university details. Check err for more details.",
            err
        })
    }
}

export const getAll = async (req, res) => {
    try {
        const universities = await University.find();
        return res.status(200).json({
            success: true,
            data: universities,
            message: "Universities' details fetched successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching university details. Check err for more details.",
            err
        })
    }
}

export const getById = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({
            success: false,
            message: "Id not recieved from the api call."
        });

        const university = await University.findOne({ _id: id });
        if (!university) return res.status(404).json({
            success: false,
            message: "No university found with that Id."
        });

        return res.status(200).json({
            success: true,
            data: university,
            message: "Fetched university details successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching university details. Check err for more details.",
            err
        })
    }
}

export const getUniversitiesByFilter = async (req, res) => {
    try {
        const filter = req.body;
        if (!filter) return res.status(400).json({
            success: false,
            message: "Bad Request. Filter not found."
        });

        const universities = await University.find({ ...filter });
        return res.status(200).json({
            success: true,
            data: universities,
            message: "Universities' details fetched successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching university details. Check err for more details.",
            err
        })
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({
            success: false,
            message: "Id not recieved from the api call."
        });

        const details = req.body;
        if (!details) return res.status(400).json({
            success: false,
            message: "Bad Request. University details not found."
        });

        const university = await University.findOne({ _id: id });
        if (!university) return res.status(404).json({
            success: false,
            message: "No university found with that Id."
        });

        const { status, verifiedBy, sihGems, popularity, ranking, ...rest } = details
        const updatedUniversityDetails = await University.findByIdAndUpdate(id, { ...rest }, { new: true });

        return res.status(200).json({
            success: true,
            data: updatedUniversityDetails,
            message: "Details of the university updated successfully."
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching university details. Check err for more details.",
            err
        })
    }
}

export const deleteRecord = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({
            success: false,
            message: "Id not recieved from the api call."
        });

        const university = await University.findOne({ _id: id });
        if (!university) return res.status(404).json({
            success: false,
            message: "No university found with that Id."
        });

        await University.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            data: university,
            message: "University record deleted successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while deleting university record. Check err for more details.",
            err
        })
    }
}

export const updateUniversityStatus = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({
            success: false,
            message: "Id not recieved from the api call."
        });

        const university = await University.findOne({ _id: id });
        if (!university) return res.status(404).json({
            success: false,
            message: "No university found with that Id."
        });

        const { status, verifiedBy } = req.body;
        if (!status || !verifiedBy) return res.status(400).json({
            success: false,
            message: "Bad Request. Required fields not found."
        });

        const updatedUniversityDetails = await University.findByIdAndUpdate(id, { status, verifiedBy }, { new: true });
        return res.status(200).json({
            success: true,
            data: updatedUniversityDetails,
            message: "University has been verified successfully."
        })


    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while verifying university record. Check err for more details.",
            err
        })
    }
}
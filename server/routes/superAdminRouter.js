import express from "express";
import { getAll, getById, setPassword } from "../controllers/superAdminController.js";

const router = express.Router();

router.get('/getAll', getAll);
router.get('/get/:id', getById);
router.put(`/setpassword/:id`, setPassword);

export default router;
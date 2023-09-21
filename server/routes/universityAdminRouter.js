import express from 'express';
import { getAllUniversityAdmin, getUniversityAdmin, getUniversityAdminById, updateUniversityAdmin, updateStatus, deleteUniversityAdmin } from '../controllers/universityAdminController.js';

const router = express.Router();

router.get('/', getAllUniversityAdmin);
router.get('/get/:id', getUniversityAdminById);
router.get('/university/:id', getUniversityAdmin);
router.put('/update/:id', updateUniversityAdmin);
router.put('/update/status/:id', updateStatus);
router.delete('/delete/:id', deleteUniversityAdmin);

export default router;
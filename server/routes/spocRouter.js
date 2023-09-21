import express from 'express';
import { getAllSpocs, getSpocById, getSpocByUniversityId, updateSpoc, updateSpocStatus, deleteSpoc} from '../controllers/spocController.js';

const router = express.Router();

router.get('/', getAllSpocs);
router.get('/get/:id', getSpocById);
router.get('/university/:id', getSpocByUniversityId);
router.put('/update/:id', updateSpoc);
router.put('/update/status/:id', updateSpocStatus);
router.delete('/delete/:id', deleteSpoc);

export default router;
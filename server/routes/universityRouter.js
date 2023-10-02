import express from 'express';
import { register, getById, getUniversitiesByFilter, update, deleteRecord, getAll, updateUniversityStatus } from '../controllers/universityController.js';

const router = express.Router();

router.get('/', getAll);
router.get('/get/:id', getById);  
router.post('/filter', getUniversitiesByFilter);
router.post('/register', register); 
router.put('/update/:id', update);  
router.put('/update/status/:id', updateUniversityStatus);
router.delete('/delete/:id', deleteRecord);

export default router;
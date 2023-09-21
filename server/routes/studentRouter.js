import express from 'express';
import { getAllStudents, getStudentById, getStudentsByUniversityId, updateStudent, updateStudentStatus, deleteStudent } from '../controllers/studentController.js';

const router = express.Router();

router.get('/', getAllStudents);
router.get('/get/:id', getStudentById);
router.get('/university/:id', getStudentsByUniversityId);
router.put('/update/status/:id', updateStudentStatus);
router.put('/update/:id', updateStudent);
router.delete('/delete/:id', deleteStudent);

export default router;
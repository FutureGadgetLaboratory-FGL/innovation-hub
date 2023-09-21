import express from 'express';
import { createProject, getAllProjects, getProjectById, getProjectByStudentId, getProjectByUniversityId, updateProject, updateProjectStatus, deleteProject, likeProject, unlikeProject, reviewProject, commentProject, shareProject } from '../controllers/projectController.js';

const router = express.Router();

router.post('/create', createProject);
router.get('/all', getAllProjects);
router.get('/student/:id', getProjectByStudentId);
router.get('/university/:id', getProjectByUniversityId);
router.get('/get/:id', getProjectById);
router.put('/update/:id', updateProject);
router.put('/update/status/:id', updateProjectStatus);
router.delete('/delete/:id', deleteProject);
router.put('/like/:id', likeProject);
router.put('/unlike/:id', unlikeProject);
router.put('/review/:id', reviewProject);
router.put('/comment/:id', commentProject);
router.put('/share/:id', shareProject);

export default router;
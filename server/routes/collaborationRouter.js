import express from 'express';
import { getCollaborations, getCollaborationById, getCollaborationsByStudentId, getCollaborationsByUniversityId, createCollaboration, acceptCollaboration, rejectCollaboration } from '../controllers/collaborationController.js';

const router = express.Router();

router.get('/', getCollaborations);
router.get('/get/:id', getCollaborationById);
router.get('/student/:id', getCollaborationsByStudentId);
router.get('/university/:id', getCollaborationsByUniversityId);
router.post('/create', createCollaboration);
router.put('/accept/:id', acceptCollaboration);
router.put('/reject/:id', rejectCollaboration);

export default router;
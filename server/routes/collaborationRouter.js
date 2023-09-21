import express from 'express';
import { getCollaborations, getCollaborationById, getCollaborationsByStudentId, createCollaboration, acceptCollaboration } from '../controllers/collaborationController.js';

const router = express.Router();

router.get('/', getCollaborations);
router.get('/get/:id', getCollaborationById);
router.get('/student/:id', getCollaborationsByStudentId);
router.post('/create', createCollaboration);
router.put('/accept/:id', acceptCollaboration);

export default router;
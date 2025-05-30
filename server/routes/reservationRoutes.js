import express from 'express';
import { 
  getReservations, 
  updateReservation, 
  deleteReservation,
  createReservation,
  decisionReservation
} from '../controllers/reservationController.js';
import { verifyToken, isSuperAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getReservations);
router.put('/:id', verifyToken, updateReservation);
router.delete('/:id', verifyToken, isSuperAdmin, deleteReservation);
router.post('/', createReservation);
router.put('/:id/decision', verifyToken, decisionReservation);

export default router;
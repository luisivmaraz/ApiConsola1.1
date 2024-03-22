import { Router } from "express";
import { deleteTicket, getAllTickets, getOneTicket, insertTicket, updateTicket } from "../controllers/ticketsController.js";

const router = Router();

router.get('/getAll', getAllTickets);
router.get('/getOne/:barcode', getOneTicket);
router.post('/insertTicket', insertTicket);
router.put('/updateTicket/:barcode', updateTicket);
router.delete('/deleteTicket/:barcode', deleteTicket);

export default router;

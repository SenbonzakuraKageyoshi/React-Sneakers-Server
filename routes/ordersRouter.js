import Router from 'express';
import ordersController from '../controllers/ordersController/ordersController.js';

const router = Router();

router.post('/create', ordersController.createOrder);

export default router;
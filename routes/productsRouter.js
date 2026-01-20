import Router from 'express';
import productsController from '../controllers/productsController/productsController.js';

const router = Router();

router.post('/create', productsController.createProduct);

export default router;
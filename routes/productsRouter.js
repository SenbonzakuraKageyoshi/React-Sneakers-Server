import Router from 'express';
import productsController from '../controllers/productsController/productsController.js';

const router = Router();

router.get('/get', productsController.getProducts);

export default router;
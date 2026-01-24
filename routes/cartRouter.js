import Router from 'express';
import cartController from '../controllers/cartController/cartController.js';

const router = Router();

router.post('/add', cartController.addToCart);
router.get('/get', cartController.getCart);
router.post('/remove', cartController.removeFormCart);

export default router;
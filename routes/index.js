import Router from 'express';
import productsRouter from './productsRouter.js'
import cartRouter from './cartRouter.js';

const router = Router();

router.use('/products', productsRouter);
router.use('/cart', cartRouter);

export default router;
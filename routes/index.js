import Router from 'express';
import productsRouter from './productsRouter.js'
import cartRouter from './cartRouter.js';
import ordersRouter from './ordersRouter.js';

const router = Router();

router.use('/products', productsRouter);
router.use('/cart', cartRouter);
router.use('/orders', ordersRouter);

export default router;
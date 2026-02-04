import Router from 'express';
import productsRouter from './productsRouter.js'
import cartRouter from './cartRouter.js';
import ordersRouter from './ordersRouter.js';
import favoritesRouter from './favoritesRouter.js'

const router = Router();

router.use('/products', productsRouter);
router.use('/cart', cartRouter);
router.use('/orders', ordersRouter);
router.use('/favorites', favoritesRouter);

export default router;
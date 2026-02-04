import Router from 'express';
import favoritesController from '../controllers/favoritesController/favoritesController.js';

const router = Router();

router.post('/add', favoritesController.addToFavorites);
router.get('/get', favoritesController.getFavorites);
router.post('/remove', favoritesController.removeFormFavorites);

export default router;
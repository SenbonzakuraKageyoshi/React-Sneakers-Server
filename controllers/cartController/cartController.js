import ApiError from "../../error/apiError.js";
import { CartProduct } from "../../models/CartProduct.js";
import { Product } from "../../models/Product.js";

class ProductsController {
    addToCart = async (req, res, next) => {
        try {
            const { ProductId } = req.body;

            await CartProduct.create({ ProductId });

            res.status(200).json({message: 'Товар добавлен в корзину'})

        } catch (error) {
            console.log(error)
            next(ApiError.internal('Не удалось добавить товар в корзину'));
        };
    };

    getCart = async (req, res, next) => {
        try {
            const cartProducts = await CartProduct.findAll({include: [Product]});

            res.status(200).json(cartProducts);

        } catch (error) {
            console.log(error)
            next(ApiError.internal('Не удалось добавить товар в корзину'));
        };
    };
}

export default new ProductsController();
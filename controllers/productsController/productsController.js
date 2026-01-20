import { Product } from "../../models/Product.js";
import ApiError from "../../error/apiError.js";

class ProductsController {
    createProduct = async (req, res, next) => {
        try {
            const { title, price, image } = req.body;

            const product = await Product.create({ title, price, image });

            res.status(200).json(product)

        } catch (error) {
            console.log(error)
            next(ApiError.internal('Не удалось получить данные о пользователе'));
        };
    };
}

export default new ProductsController();
import { Product } from "../../models/Product.js";
import ApiError from "../../error/apiError.js";

class ProductsController {
    getProducts = async (req, res, next) => {
        try {
            const products = await Product.findAll();

            res.status(200).json(products.reverse())

        } catch (error) {
            console.log(error)
            next(ApiError.internal('Не удалось получить товары'));
        };
    };
}

export default new ProductsController();
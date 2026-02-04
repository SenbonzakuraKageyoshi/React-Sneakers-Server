import ApiError from "../../error/apiError.js";
import { CartProduct } from "../../models/CartProduct.js";
import { Order } from "../../models/Order.js";

class OrdersController {
    createOrder = async (req, res, next) => {
        try {
            const { products } = req.body;

            await Order.create({ products: JSON.stringify(products) }).then(async () => {
                await CartProduct.truncate();
            })

            res.status(200).json({message: 'Заказ создан'})

        } catch (error) {
            next(ApiError.internal('Не удалось создать заказ'));
        };
    };

    getOrders = async (req, res, next) => {
        try {
            const orders = await Order.findAll();
            
            const formattedOrders = orders.map((el) => {
                return {
                    ...el.dataValues,
                    products: JSON.parse(el.dataValues.products)
                }
            })

            res.status(200).json(formattedOrders.reverse())
        } catch (error) {
            next(ApiError.internal('Не удалось получить заказы'));
        }
    }
}

export default new OrdersController();
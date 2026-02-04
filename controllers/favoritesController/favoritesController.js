import ApiError from "../../error/apiError.js";
import { FavoriteProduct } from "../../models/FavoriteProduct.js";
import { Product } from "../../models/Product.js";

class FavoritesController {
    addToFavorites = async (req, res, next) => {
        try {
            const { ProductId } = req.body;

            await FavoriteProduct.create({ ProductId })

            res.status(200).json({message: 'Товар добавлен в отложенные'})

        } catch (error) {
            next(ApiError.internal('Не удалось добавить товар в отложенные'));
        };
    };

    getFavorites = async (req, res, next) => {
        try {
            const favorites = await FavoriteProduct.findAll({include: [Product]});

            const formattedFavorites = favorites.map((el) => {
                return {
                    id: el.dataValues.id,
                    createdAt: el.dataValues.createdAt,
                    updatedAt: el.dataValues.updatedAt,
                    title: el.Product.dataValues.title,
                    price: el.Product.dataValues.price,
                    image: el.Product.dataValues.image
                }
            })

            res.status(200).json(formattedFavorites.reverse())
        } catch (error) {
            console.log(error)
            next(ApiError.internal('Не удалось получить отложенные товары'));
        }
    }

    removeFormFavorites = async (req, res, next) => {
        try {
            const { id } = req.body;

            await FavoriteProduct.destroy({ where: { id } });

            res.status(200).json({message: 'Товар удален из отложенных'})
        } catch (error) {
            next(ApiError.internal('Не удалось удалить товар из отложенных'));
        };
    };
}

export default new FavoritesController();
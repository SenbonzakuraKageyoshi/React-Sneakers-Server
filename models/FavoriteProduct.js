import { DataTypes } from "sequelize";
import sequelize from '../db.js';
import { Product } from "./Product.js";

const FavoriteProduct = sequelize.define('FavoriteProduct', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
});

export { FavoriteProduct }

FavoriteProduct.belongsTo(Product);
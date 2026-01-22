import { DataTypes } from "sequelize";
import sequelize from '../db.js';
import { Product } from "./Product.js";

const CartProduct = sequelize.define('CartProduct', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
});

export { CartProduct }

CartProduct.belongsTo(Product);
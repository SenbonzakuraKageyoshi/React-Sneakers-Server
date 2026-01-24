import { DataTypes } from "sequelize";
import sequelize from '../db.js';

const Order = sequelize.define('Order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    products: {type: DataTypes.TEXT, primaryKey: true, allowNull: false},
});

export { Order }
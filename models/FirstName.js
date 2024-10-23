import sequelize from "../config/db.js"
import { DataTypes } from "sequelize";


const FirstName = sequelize.define('FirstName', {
    first_name_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(32),
        allowNull: false,
        unique: true,
    },
    gender: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
    },
}, {
    tableName: 'first_name',
    timestamps: false,
});

export default FirstName;
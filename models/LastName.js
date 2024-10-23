import sequelize from "../config/db.js"
import { DataTypes } from "sequelize";

const LastName = sequelize.define('LastName', {
    last_name_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true,
    },
}, {
    tableName: 'last_name',
    timestamps: false,
});

export default LastName;

import { DataTypes } from "sequelize";
import sequelize from "../config/db.js"

const Alignment = sequelize.define('Alignment', {
    alignment_id: {
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
    tableName: 'alignment',
    schema: 'dnd_characters',
    timestamps: false,
});

export default Alignment;

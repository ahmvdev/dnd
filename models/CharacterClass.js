import sequelize from "../config/db.js"
import { DataTypes } from "sequelize";

const CharacterClass = sequelize.define('CharacterClass', {
    character_class_id: {
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
    tableName: 'character_class',
    timestamps: false,
});

export default CharacterClass;

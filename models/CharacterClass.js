import { DataTypes } from "sequelize";
import sequelize from "../config/db.js"

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
    schema: 'dnd_characters',
    timestamps: false,
});

export default CharacterClass;

import sequelize from "../config/db.js"
import { DataTypes } from "sequelize";

const Race = sequelize.define('Race', {
    race_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    max_age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'race',
    schema: 'dnd_characters',
    timestamps: false,
});

export default Race;

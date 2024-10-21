import { DataTypes } from "sequelize";
import sequelize from "../config/db.js"


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

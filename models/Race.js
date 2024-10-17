const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

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

module.exports = Race;

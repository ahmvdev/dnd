const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

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
    schema: 'dnd_characters',
    timestamps: false,
});

module.exports = LastName;

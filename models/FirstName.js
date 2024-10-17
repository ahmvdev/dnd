const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

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
    schema: 'dnd_characters',
    timestamps: false,
});

module.exports = FirstName;

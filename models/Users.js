const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    userID: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    firstName: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    middleName: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    passWord: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    Admin: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
    },
}, {
    tableName: 'users',
    schema: 'dnd_characters',
    timestamps: false,
});

module.exports = User;

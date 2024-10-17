const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Universe = sequelize.define('Universe', {
    universeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    userID: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    universeName: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    tableName: 'universe',
    schema: 'dnd_characters',
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['userID', 'universeName'],
        },
        {
            fields: ['userID'],
        },
    ],
});

module.exports = Universe;

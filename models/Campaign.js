const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Campaign = sequelize.define('Campaign', {
    campaignID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    campaignName: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
    },
    universeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    campaignDisabled: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
    },
    campaignChronology: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
    },
    campaignJoinCode: {
        type: DataTypes.STRING(45),
        allowNull: true,
        defaultValue: null,
        unique: true,
    },
}, {
    tableName: 'campaign',
    schema: 'dnd_characters',
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['campaignName', 'universeID'],
        },
        {
            fields: ['universeID'],
        },
    ],
});

module.exports = Campaign;

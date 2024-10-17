const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const CampaignNPC = sequelize.define('CampaignNPC', {
    campain_NPC_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    class: {
        type: DataTypes.STRING(45),
        allowNull: true,
        defaultValue: null,
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
    },
    race: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    gender: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    alignment: {
        type: DataTypes.STRING(45),
        allowNull: true,
        defaultValue: null,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    campaignID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    universeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    NPC_Description: {
        type: DataTypes.STRING(5000),
        allowNull: true,
        defaultValue: null,
    },
}, {
    tableName: 'campain_NPC',
    schema: 'dnd_characters',
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['firstName', 'lastName', 'universeID', 'race'],
        },
        {
            fields: ['campaignID'],
        },
        {
            fields: ['universeID'],
        },
    ],
});

module.exports = CampaignNPC;

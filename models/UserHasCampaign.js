const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const UsersHasCampaign = sequelize.define('UsersHasCampaign', {
    users_userID: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true,
    },
    campaign_campaignID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
}, {
    tableName: 'users_has_campaign',
    schema: 'dnd_characters',
    timestamps: false,
    indexes: [
        {
            fields: ['campaign_campaignID'],
        },
        {
            fields: ['users_userID'],
        },
    ],
});

module.exports = UsersHasCampaign;

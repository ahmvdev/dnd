const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const UserAuth = sequelize.define('UserAuth', {
    users_userID: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    Token: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true,
    },
    created: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    expires: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    ResetPassword: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
    },
}, {
    tableName: 'userAuth',
    schema: 'dnd_characters',
    timestamps: false,
});

module.exports = UserAuth;

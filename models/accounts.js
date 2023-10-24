'use strict';
module.exports = (sequelize, DataTypes) => {
    const Accounts = sequelize.define('Accounts', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        accname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        acctype: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accgroup: {
            type: DataTypes.STRING,
        },
        accsubgroup: {
            type: DataTypes.STRING,
        },
        locked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false, // Default value for 'locked' is false
        },
    },
        { initialAutoIncrement: '1000', }
    );
    Accounts.associate = function (models) {
        // associations can be defined here
    };
    return Accounts;
}; 
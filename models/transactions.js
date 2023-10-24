'use strict';
module.exports = (sequelize, DataTypes) => {
    const Transactions = sequelize.define('Transactions', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            defaultValue: 10000, // Starting value for auto-increment ID
        },
        transactionid: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
        },
        ledgerid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Accounts',
                key: 'id',
            },
        },
        ledname: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        treatment: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        amount: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        debittotal: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        transactiontotal: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        narration: {
            type: DataTypes.TEXT,
        },
    });

    Transactions.associate = function (models) {
        // associations can be defined here
    };
    return Transactions;
};



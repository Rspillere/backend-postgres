'use strict';

const { USER_TABLE} = require('./../models/user.model');
const { DataTypes, Sequelize } = require('sequelize');

const UserSchemaInit = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: { allowNull: false, type: DataTypes.STRING, unique: true },
  password: { allowNull: false, type: DataTypes.STRING },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

module.exports = {
  async up (queryInterface) {
     await queryInterface.createTable(USER_TABLE, UserSchemaInit);

  },

  async down (queryInterface) {
    await queryInterface.dropTable(USER_TABLE);

  }
};

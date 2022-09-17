'use strict';

const { ORDER_TABLE } = require('./../models/order.model');
const { DataTypes, Sequelize } = require('sequelize');
const { CUSTOMER_TABLE } = require('./customer.model');

const OrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  customerId: {
    field: 'customer_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CUSTOMER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  }
};

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(ORDER_TABLE, OrderSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(ORDER_TABLE);
  }
};

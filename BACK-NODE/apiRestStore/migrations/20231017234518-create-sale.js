'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number_invoice: {
        type: Sequelize.STRING,
        unique:true
      },
      date_invoice: {
        type: Sequelize.DATE
      },
      time_invoice: {
        type: Sequelize.TIME
      },
      users_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'users',
          key:'id'
        }
      },
      address_users_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'address_users',
          key:'id'
        }
      },
      type_invoice: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  }
};
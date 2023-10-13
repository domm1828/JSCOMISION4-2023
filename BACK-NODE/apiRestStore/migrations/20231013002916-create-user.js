'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING(45),
        allowNull:false
      },
      password: {
        type: Sequelize.STRING(45),
        allowNull:false
      },
      first_name: {
        type: Sequelize.STRING(45),
        allowNull:false
      },
      last_name: {
        type: Sequelize.STRING(45),
        allowNull:false
      },
      dni: {
        type: Sequelize.INTEGER
      },
      type_user: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('users');
  }
};
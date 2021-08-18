'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      accountNo: {
        type: Sequelize.STRING
      },
      ssn: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATE
      },
      clientName: {
        type: Sequelize.STRING
      },
      subscriberId: {
        type: Sequelize.STRING
      },
      TenantId: {
        type: Sequelize.INTEGER,
        references: { model: 'Tenants', key: 'id' }
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('patients');
  }
};
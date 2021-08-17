'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Users', 'tenantId', 'TenantId');

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Users', 'TenantId', 'tenantId');
  }
};

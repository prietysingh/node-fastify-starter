'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Tenants',
    [
      {
        name: 'physician-b',
        permissions: JSON.stringify({
          "licenses": [
            {
              "doctor": {
                "isActive": false,
                "displayName": 'Search for Doctor'
              },
              "appointment": {
                'isActive': true,
                'displayName': 'Book an appointment'
              },
              "prescription": {
                'isActive': false,
                'displayName': 'Prescriptions and tests'
              },
              "hospital": {
                "isActive": false,
                "displayName": 'Search for hospitals'
              }
            }
          ],
          'theme': 'light',
          'language': 'en'
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'physician-c',
        permissions: JSON.stringify({
          "licenses": [
            {
              "doctor": {
                "isActive": true,
                "displayName": 'Search for Doctor'
              },
              "appointment": {
                'isActive': true,
                'displayName': 'Book an appointment'
              },
              "prescription": {
                'isActive': true,
                'displayName': 'Prescriptions and tests'
              },
              "hospital": {
                "isActive": false,
                "displayName": 'Search for hospitals'
              }
            }
          ],
          'theme': 'dark',
          'language': 'en'
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Tenants', null, {}),
};
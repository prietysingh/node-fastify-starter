const bcrypt = require('bcrypt')
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        password: bcrypt.hashSync(
          'Test123',
          bcrypt.genSaltSync(8)
        ),
        isActive: true,
        company: 'Pythagoras',
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: 2
      },
      {
        firstName: 'Mark',
        lastName: 'Doe',
        email: 'markdoe@example.com',
        password: bcrypt.hashSync(
          'Test123',
          bcrypt.genSaltSync(8)
        ),
        isActive: true,
        company: 'Mandalorian',
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: 3
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
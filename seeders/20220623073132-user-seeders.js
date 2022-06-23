'use strict';

const bcrypt = require('bcrypt');

module.exports = {
 up:async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [
      {
        name: "sunardi",
        profession: "admin mup",
        role: "admin",
        email: "sunardi@gmail.com",
        password: await bcrypt.hash('rahasia123', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "oneng",
        profession: "marketing mup",
        role: "student",
        email: "oneng@gmail.com",
        password: await bcrypt.hash('rahasianya123', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down:async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('users', null, {});
  }
};

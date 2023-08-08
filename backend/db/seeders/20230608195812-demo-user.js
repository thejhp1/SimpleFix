'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Employees';
    return queryInterface.bulkInsert(options, [
      {
        companyId: 1,
        email: 'demo1@user.io',
        username: 'Demo-A',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        companyId: 2,
        email: 'demo2@user.io',
        username: 'Demo-B',
        hashedPassword: bcrypt.hashSync('password')
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Employees';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-A', 'Demo-B'] }
    }, {});
  }
};

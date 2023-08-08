'use strict';

const bcrypt = require("bcryptjs");

let options = {};

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Products';
    return queryInterface.bulkInsert(options, [

    ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Products';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['Samsung', 'GE'] }
    }, {});
  }
};

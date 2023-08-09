'use strict';
let options = {};

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Companys';
    return queryInterface.bulkInsert(options, [
      {
        name: "Samsung"
      },
      {
        name: "GE"
      }
    ], options);
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Companys';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['Samsung', 'GE'] }
    }, {});
  }
};

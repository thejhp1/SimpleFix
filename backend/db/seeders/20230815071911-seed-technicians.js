'use strict';

let options = {};

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = "Technicians";
    return queryInterface.bulkInsert(options, [
      {
        name: "JP",
        companyId: 1
      },
      {
        name: "Zachary",
        companyId: 1
      },
      {
        name: "Jason",
        companyId: 1
      },
      {
        name: "Cathal",
        companyId: 1
      },
      {
        name: "John",
        companyId: 2
      },
      {
        name: "Jane",
        companyId: 2
      },
      {
        name: "Jack",
        companyId: 2
      },
      {
        name: "Jordan",
        companyId: 2
      },

    ], options).catch((err) => {
      throw new Error(err);
    });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = "Technicians";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      companyId: { [Op.in]: ["1", "2"] }
    }, {});
  }
};

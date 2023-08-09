'use strict';

const bcrypt = require("bcryptjs");

let options = {};

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Claims';
    return queryInterface.bulkInsert(options, [
      {
        ticketId: 5,
        number: "H4172218784",
        labor: 100,
        part: 35.62,
        mileage: 40,
        status: "Claim Submitted",
      },
      {
        ticketId: 12,
        number: "H4172115459",
        labor: 100,
        part: 98.96,
        mileage: 55,
        status: "Paid",
      },
      {
        ticketId: 19,
        number: "H4172265546",
        labor: 100,
        part: 168.55,
        mileage: 74,
        status: "Need Submit",
      },
      {
        ticketId: 23,
        number: "H69652757",
        labor: 95,
        part: 95.66,
        mileage: 43,
        status: "Paid",
      },
      {
        ticketId: 35,
        number: "H69757682",
        labor: 95,
        part: 63.44,
        mileage: 96,
        status: "Need Submit",
      },
      {
        ticketId: 40,
        number: "H69768835",
        labor: 95,
        part: 40.66,
        mileage: 33,
        status: "Rejected",
      },
    ], options);
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Claims';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      status: { [Op.in]: ["Claim Submitted", "Need Submit", "Paid", "Rejected"] }
    }, {});
  }
};

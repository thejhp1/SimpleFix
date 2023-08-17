'use strict';

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
        number: "H4172025848",
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
        number: "H68652757",
        labor: 95,
        part: 95.66,
        mileage: 43,
        status: "Paid",
      },
      {
        ticketId: 35,
        number: "H68757682",
        labor: 95,
        part: 63.44,
        mileage: 96,
        status: "Need Submit",
      },
      {
        ticketId: 40,
        number: "H68768835",
        labor: 95,
        part: 40.66,
        mileage: 33,
        status: "Rejected",
      },

      {
        ticketId: 50,
        number: "H4173516338",
        labor: 100,
        part: 0,
        mileage: 44,
        status: "Rejected",
      },
      {
        ticketId: 51,
        number: "H4173554187",
        labor: 100,
        part: 0,
        mileage: 45,
        status: "Claim Submitted",
      },
      {
        ticketId: 52,
        number: "H4173471561",
        labor: 100,
        part: 0,
        mileage: 46,
        status: "Rejected",
      },
      {
        ticketId: 53,
        number: "H4173981661",
        labor: 100,
        part: 0,
        mileage: 47,
        status: "Paid",
      },
      {
        ticketId: 54,
        number: "H4173124126",
        labor: 100,
        part: 0,
        mileage: 0,
        status: "Rejected",
      },
      {
        ticketId: 55,
        number: "H4173795734",
        labor: 100,
        part: 0,
        mileage: 45,
        status: "Paid",
      },
      {
        ticketId: 56,
        number: "H4173234582",
        labor: 100,
        part: 0,
        mileage: 98,
        status: "Paid",
      },
      {
        ticketId: 57,
        number: "H4173252734",
        labor: 100,
        part: 0,
        mileage: 104,
        status: "Need Submit",
      },
    ], options).catch((err) => {
      throw new Error(err);
    });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Claims';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      status: { [Op.in]: ["Claim Submitted", "Need Submit", "Paid", "Rejected"] }
    }, {});
  }
};

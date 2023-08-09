'use strict';

const bcrypt = require("bcryptjs");

let options = {};

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Parts';
    return queryInterface.bulkInsert(options, [
      {
        ticketId: 2,
        number: "DC97-14486A",
        description: "Heater Assembly",
        price: 107.63,
        quantity: 1,
        status: "Need PO"
      },
      {
        ticketId: 5,
        number: "DC97-00634A",
        description: "Idler Pulley",
        price: 35.62,
        quantity: 1,
        status: "Used"
      },
      {
        ticketId: 6,
        number: "DA97-12540G",
        description: "Auger Assembly",
        price: 120.26,
        quantity: 1,
        status: "Part Ready"
      },
      {
        ticketId: 9,
        number: "DA97-15217D",
        description: "Ice Maker",
        price: 105,
        quantity: 1,
        status: "Part Ready"
      },
      {
        ticketId: 10,
        number: "DA97-68996Z",
        description: "Clutch",
        price: 264.25,
        quantity: 1,
        status: "Need PO"
      },
      {
        ticketId: 12,
        number: "DA97-07603B",
        description: "Ice Maker",
        price: 98.96,
        quantity: 1,
        status: "Used"
      },
      {
        ticketId: 13,
        number: "DC97-15459G",
        description: "Water Valve",
        price: 87.55,
        quantity: 1,
        status: "Waiting for Part"
      },
      {
        ticketId: 16,
        number: "DA97-12609C",
        description: "Bake Element",
        price: 110.65,
        quantity: 1,
        status: "Backordered"
      },
      {
        ticketId: 18,
        number: "DC97-00634A",
        description: "Idler Pulley",
        price: 35.62,
        quantity: 1,
        status: "Part Ready"
      },
      {
        ticketId: 18,
        number: "DC97-14486A",
        description: "Heater Assembly",
        price: 107.63,
        quantity: 1,
        status: "Part Ready"
      },
      {
        ticketId: 19,
        number: "DC97-53618B",
        description: "Main Board",
        price: 168.55,
        quantity: 1,
        status: "Used"
      },

      {
        ticketId: 21,
        number: "WE09X27634",
        description: "Water Valve",
        price: 68.66,
        quantity: 1,
        status: "Need PO"
      },
      {
        ticketId: 23,
        number: "WR57X30890",
        description: "Bake Element",
        price: 95.66,
        quantity: 1,
        status: "Used"
      },
      {
        ticketId: 25,
        number: "WR14X34687",
        description: "Main Board",
        price: 124.33,
        quantity: 1,
        status: "Part Ready"
      },
      {
        ticketId: 28,
        number: "WD19X25461",
        description: "Control Board",
        price: 145.63,
        quantity: 1,
        status: "Need PO"
      },
      {
        ticketId: 29,
        number: "WD21X10490",
        description: "Ice Maker",
        price: 105.66,
        quantity: 1,
        status: "Waiting for Part"
      },
      {
        ticketId: 31,
        number: "WR14X40082",
        description: "Drain Pump",
        price: 86.66,
        quantity: 1,
        status: "Part Ready"
      },
      {
        ticketId: 32,
        number: "WR50X10069",
        description: "Compressor",
        price: 324.22,
        quantity: 1,
        status: "Backordered"
      },
      {
        ticketId: 34,
        number: "WR55X34887",
        description: "Damper Assembly",
        price: 25.6,
        quantity: 4,
        status: "Part Ready"
      },
      {
        ticketId: 35,
        number: "WE14M119",
        description: "Timer",
        price: 63.44,
        quantity: 1,
        status: "Used"
      },
      {
        ticketId: 38,
        number: "WR60X10185",
        description: "Regulator",
        price: 35.66,
        quantity: 1,
        status: "Waiting for Part"
      },
      {
        ticketId: 39,
        number: "WH22X35757",
        description: "Door Gasket",
        price: 64.22,
        quantity: 1,
        status: "Need PO"
      },
      {
        ticketId: 40,
        number: "WR87X20798",
        description: "Detergent Dispenser",
        price: 40.66,
        quantity: 1,
        status: "Used"
      },
    ], options);
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Parts';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      status: { [Op.in]: ['Need PO', 'Waitin for Part', 'Part Ready', 'Backordered', 'Used'] }
    }, {});
  }
};

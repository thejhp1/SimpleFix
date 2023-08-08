'use strict';

const bcrypt = require("bcryptjs");

let options = {};

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Tickets';
    return queryInterface.bulkInsert(options, [
      {
        employeeId: 1,
        customerId: 1,
        status: "CSR-Need Schedule",
      },
      {
        employeeId: 1,
        customerId: 2,
        status: "Need Review",
      },
      {
        employeeId: 1,
        customerId: 3,
        status: "Cancel",
      },
      {
        employeeId: 1,
        customerId: 4,
        status: "CSR-Need Schedule",
      },
      {
        employeeId: 1,
        customerId: 5,
        status: "Completed",
      },
      {
        employeeId: 1,
        customerId: 6,
        status: "CSR-Part Came In",
      },
      {
        employeeId: 1,
        customerId: 7,
        status: "CSR-Need Schedule",
      },
      {
        employeeId: 1,
        customerId: 8,
        status: "Cancel",
      },
      {
        employeeId: 1,
        customerId: 9,
        status: "CSR-Part Came In",
      },
      {
        employeeId: 1,
        customerId: 10,
        status: "Need Review",
      },
      {
        employeeId: 1,
        customerId: 11,
        status: "CSR-Need Schedule",
      },
      {
        employeeId: 1,
        customerId: 12,
        status: "Completed",
      },
      {
        employeeId: 1,
        customerId: 13,
        status: "Waiting for Part",
      },
      {
        employeeId: 1,
        customerId: 14,
        status: "CSR-Need Schedule",
      },
      {
        employeeId: 1,
        customerId: 15,
        status: "CSR-Need Schedule",
      },
      {
        employeeId: 1,
        customerId: 16,
        status: "Waiting for Part",
      },
      {
        employeeId: 1,
        customerId: 17,
        status: "CSR-Need Schedule",
      },
      {
        employeeId: 1,
        customerId: 18,
        status: "CSR-Part Came In",
      },
      {
        employeeId: 1,
        customerId: 19,
        status: "Completed",
      },
      {
        employeeId: 1,
        customerId: 20,
        status: "CSR-Need Schedule",
      },
      {
        employeeId: 2,
        customerId: 21,
        status: "Need Review",
      },
      {
        employeeId: 2,
        customerId: 22,
        status: "CSR-Need Schedule",
      },
      {
        employeeId: 2,
        customerId: 23,
        status: "Completed",
      },
      {
        employeeId: 2,
        customerId: 24,
        status: "Cancel",
      },
      {
        employeeId: 2,
        customerId: 25,
        status: "CSR-Part Came In",
      },
      {
        employeeId: 2,
        customerId: 26,
        status: "CSR-Need Schedule",
      },
      {
        employeeId: 2,
        customerId: 27,
        status: "Cancel",
      },
      {
        employeeId: 2,
        customerId: 28,
        status: "Need Review",
      },
      {
        employeeId: 2,
        customerId: 29,
        status: "Waiting for Part",
      },
      {
        employeeId: 2,
        customerId: 30,
        status: "CSR-Need Schedule",
      },
      {
        employeeId: 2,
        customerId: 31,
        status: "CSR-Part Came In",
      },
      {
        employeeId: 2,
        customerId: 32,
        status: "Waiting for Part",
      },
      {
        employeeId: 2,
        customerId: 33,
        status: "CSR-Need Schedule",
      },
      {
        employeeId: 2,
        customerId: 34,
        status: "CSR-Part Came In",
      },
      {
        employeeId: 2,
        customerId: 35,
        status: "Completed",
      },
      {
        employeeId: 2,
        customerId: 36,
        status: "CSR-Need Schedule",
      },
      {
        employeeId: 2,
        customerId: 37,
        status: "Cancel",
      },
      {
        employeeId: 2,
        customerId: 38,
        status: "Waiting for Part",
      },
      {
        employeeId: 2,
        customerId: 39,
        status: "Need Review",
      },
      {
        employeeId: 2,
        customerId: 40,
        status: "Completed",
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Tickets';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      status: { [Op.in]: ['Completed', 'CSR-Need Schedule', 'Need Review', 'Waiting for Part', 'CSR-Part Came In', 'CSR-Reschedule Done', 'Cancel'] }
    }, {});
  }
};

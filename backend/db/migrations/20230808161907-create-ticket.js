"use strict";

const { DataTypes } = require("sequelize");

let options = {};

if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Tickets",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        employeeId: {
          type: Sequelize.INTEGER,
        },
        number: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        customerId: {
          type: Sequelize.INTEGER,
        },
        technicianId: {
          type: Sequelize.INTEGER
        },
        status: {
          type: Sequelize.ENUM(
            "Completed",
            "CSR-Need Schedule",
            "Need Review",
            "Waiting for Part",
            "CSR-Part Came In",
            "CSR-Reschedule Done",
            "Cancel",
            "Need Reschedule",
            "Ready for Service"
          ),
          allowNull: false,
        },
        note: {
          type: Sequelize.STRING(256),
        },
        date: {
          type: Sequelize.STRING(10),
          validate: {
            len: [6, 10],
          },
        },
        timeFrame: {
          type: Sequelize.ENUM(
            "9:00AM - 12:00PM",
            "10:00AM - 1:00PM",
            "11:00AM - 2:00PM",
            "12:00PM - 3:00PM",
            "1:00PM - 4:00PM",
            "2:00PM - 5:00PM",
            "3:00PM - 6:00PM",
            "4:00PM - 7:00PM",
            "5:00PM - 8:00PM"
          ),
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      },
      options
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Tickets";
    await queryInterface.dropTable(options);
  },
};

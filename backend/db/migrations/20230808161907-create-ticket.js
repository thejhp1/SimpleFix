"use strict";

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
        status: {
          type: Sequelize.ENUM(
            "Completed",
            "CSR-Need Schedule",
            "Need Review",
            "Waiting for Part",
            "CSR-Part Came In",
            "CSR-Reschedule Done",
            "Cancel"
          ),
          allowNull: false,
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

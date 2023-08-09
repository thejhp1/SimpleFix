"use strict";

let options = {};

if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Claims", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ticketId: {
        type: Sequelize.INTEGER
      },
      number: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
      labor: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      part: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      mileage: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM("Claim Submitted", "Need Submit", "Paid", "Rejected"),
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
    }, options)

  },

  async down (queryInterface, Sequelize) {
    options.tableName = "Claims";
    await queryInterface.dropTable(options);
  }
};

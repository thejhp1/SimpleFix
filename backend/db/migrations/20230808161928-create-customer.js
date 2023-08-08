"use strict";

let options = {};

if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Customers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING(50),
        unique: true,
      },
      street: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      zip: {
        type: Sequelize.INTEGER,
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
    })
  },

  async down (queryInterface, Sequelize) {
    options.tableName = "Customers";
    await queryInterface.dropTable(options);
  }
};

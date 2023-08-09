"use strict";
let options = {};

if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Company";
    return queryInterface
      .bulkInsert(
        options,
        [
          {
            name: "Samsung",
          },
          {
            name: "GE",
          },
        ],
        options
      )
      .catch((err) => {
        throw new Error(err);
      });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Company";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        name: { [Op.in]: ["Samsung", "GE"] },
      },
      {}
    );
  },
};

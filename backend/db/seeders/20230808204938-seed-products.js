"use strict";

const bcrypt = require("bcryptjs");

let options = {};

if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Products";
    return queryInterface.bulkInsert(
      options,
      [
        {
          ticketId: 1,
          brand: "Samsung",
          modelNumber: "WF45R6100AC",
          serialNumber: "01G857AM512257T",
        },
        {
          ticketId: 2,
          brand: "Samsung",
          modelNumber: "DVE45R6100C",
          serialNumber: "01GC57AN900856T",
        },
        {
          ticketId: 3,
          brand: "Samsung",
          modelNumber: "DW80R5060US",
          serialNumber: "01G857AMC06480M",
        },
        {
          ticketId: 4,
          brand: "Samsung",
          modelNumber: "RF28R7351SG",
          serialNumber: "01EZ57AK801208J",
        },
        {
          ticketId: 5,
          brand: "Samsung",
          modelNumber: "DVE45R6100C",
          serialNumber: "00065NAM101982N",
        },
        {
          ticketId: 6,
          brand: "Samsung",
          modelNumber: "RF28R7351SG",
          serialNumber: "00045NAJ200105N",
        },
        {
          ticketId: 7,
          brand: "Samsung",
          modelNumber: "WF45R6100AC",
          serialNumber: "000D5NAM700988P",
        },
        {
          ticketId: 8,
          brand: "Samsung",
          modelNumber: "RF28R7351SG",
          serialNumber: "000D5NAK824948N",
        },
        {
          ticketId: 9,
          brand: "Samsung",
          modelNumber: "NE59N6630SG",
          serialNumber: "000D5NAM602319F",
        },
        {
          ticketId: 10,
          brand: "Samsung",
          modelNumber: "WF45R6100AC",
          serialNumber: "000D5NAN206347J",
        },
        {
          ticketId: 11,
          brand: "Samsung",
          modelNumber: "DVE45R6100C",
          serialNumber: "JK635BBC202154Z",
        },
        {
          ticketId: 12,
          brand: "Samsung",
          modelNumber: "RF28R7351SG",
          serialNumber: "01G157BN518563F",
        },
        {
          ticketId: 13,
          brand: "Samsung",
          modelNumber: "WF45R6100AC",
          serialNumber: "01GE57BNC01035Z",
        },
        {
          ticketId: 14,
          brand: "Samsung",
          modelNumber: "DVE45R6100C",
          serialNumber: "0EPU5DDJ303999X",
        },
        {
          ticketId: 15,
          brand: "Samsung",
          modelNumber: "RF28R7351SG",
          serialNumber: "01G157BN103496N",
        },
        {
          ticketId: 16,
          brand: "Samsung",
          modelNumber: "NE59N6630SG",
          serialNumber: "01HB57BRA00652W",
        },
        {
          ticketId: 17,
          brand: "Samsung",
          modelNumber: "WF45R6100AC",
          serialNumber: "01GF57BNB016337",
        },
        {
          ticketId: 18,
          brand: "Samsung",
          modelNumber: "DVE45R6100C",
          serialNumber: "01G257BN710262N",
        },
        {
          ticketId: 19,
          brand: "Samsung",
          modelNumber: "NE59N6630SG",
          serialNumber: "01G157BN520807P",
        },
        {
          ticketId: 20,
          brand: "Samsung",
          modelNumber: "DW80R5060US",
          serialNumber: "0HPM5DDR904585R",
        },
        {
          ticketId: 21,
          brand: "GE",
          modelNumber: "GTW335ASN2WW",
          serialNumber: "RT797758B",
        },
        {
          ticketId: 22,
          brand: "GE",
          modelNumber: "GTD33EASK0WW",
          serialNumber: "ST765614B",
        },
        {
          ticketId: 23,
          brand: "GE",
          modelNumber: "JB735SP4SS",
          serialNumber: "TT854069B",
        },
        {
          ticketId: 24,
          brand: "GE",
          modelNumber: "PFE28KYNFS",
          serialNumber: "ST505303C",
        },
        {
          ticketId: 25,
          brand: "GE",
          modelNumber: "GTW335ASN2WW",
          serialNumber: "HT190599G",
        },
        {
          ticketId: 26,
          brand: "GE",
          modelNumber: "GDF450PGR3BB",
          serialNumber: "ZT192161G",
        },
        {
          ticketId: 27,
          brand: "GE",
          modelNumber: "JB735SP4SS",
          serialNumber: "TT907716G",
        },
        {
          ticketId: 28,
          brand: "GE",
          modelNumber: "GTW335ASN2WW",
          serialNumber: "RT233027G",
        },
        {
          ticketId: 29,
          brand: "GE",
          modelNumber: "PFE28KYNFS",
          serialNumber: "LV059902C",
        },
        {
          ticketId: 30,
          brand: "GE",
          modelNumber: "GTD33EASK0WW",
          serialNumber: "HV058737Q",
        },
        {
          ticketId: 31,
          brand: "GE",
          modelNumber: "GDF450PGR3BB",
          serialNumber: "DV741278B",
        },
        {
          ticketId: 32,
          brand: "GE",
          modelNumber: "PFE28KYNFS",
          serialNumber: "HT565219C",
        },
        {
          ticketId: 33,
          brand: "GE",
          modelNumber: "GTW335ASN2WW",
          serialNumber: "GT567126C",
        },
        {
          ticketId: 34,
          brand: "GE",
          modelNumber: "GUD27ESSMWW",
          serialNumber: "LV565526C",
        },
        {
          ticketId: 35,
          brand: "GE",
          modelNumber: "GTD33EASK0WW",
          serialNumber: "AV748936B",
        },
        {
          ticketId: 36,
          brand: "GE",
          modelNumber: "PFE28KYNFS",
          serialNumber: "RT062455Q",
        },
        {
          ticketId: 37,
          brand: "GE",
          modelNumber: "GTD33EASK0WW",
          serialNumber: "ZT788746B",
        },
        {
          ticketId: 38,
          brand: "GE",
          modelNumber: "JB735SP4SS",
          serialNumber: "MT948915G",
        },
        {
          ticketId: 39,
          brand: "GE",
          modelNumber: "GTW335ASN2WW",
          serialNumber: "FV927326G",
        },
        {
          ticketId: 40,
          brand: "GE",
          modelNumber: "GDF450PGR3BB",
          serialNumber: "ST026032Q",
        },
      ],
      options
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Products";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        brand: { [Op.in]: ["Samsung", "GE"] },
      },
      {}
    );
  },
};

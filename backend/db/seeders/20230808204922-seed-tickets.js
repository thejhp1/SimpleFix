"use strict";

let options = {};

if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Tickets";
    return queryInterface
      .bulkInsert(
        options,
        [
          {
            employeeId: 1,
            customerId: 1,
            status: "CSR-Need Schedule",
            number: "4171793621",
          },
          {
            employeeId: 1,
            customerId: 2,
            status: "Need Review",
            number: "4171898052",
            date: "08/14/23",
            timeFrame: "9:00AM - 12:00PM",
            technicianId: 1,
          },
          {
            employeeId: 1,
            customerId: 3,
            status: "Cancel",
            number: "4171974918",
          },
          {
            employeeId: 1,
            customerId: 4,
            status: "CSR-Need Schedule",
            number: "4172025771",
          },
          {
            employeeId: 1,
            customerId: 5,
            status: "Completed",
            number: "4172025848",
            date: "05/12/23",
            timeFrame: "10:00AM - 1:00PM",
            technicianId: 1,
          },
          {
            employeeId: 1,
            customerId: 6,
            status: "CSR-Part Came In",
            number: "4172027696",
          },
          {
            employeeId: 1,
            customerId: 7,
            status: "CSR-Need Schedule",
            number: "4172029177",
          },
          {
            employeeId: 1,
            customerId: 8,
            status: "Cancel",
            number: "4172090149",
          },
          {
            employeeId: 1,
            customerId: 9,
            status: "CSR-Part Came In",
            number: "4172102816",
          },
          {
            employeeId: 1,
            customerId: 10,
            status: "Need Review",
            number: "4172107496",
            date: "06/22/23",
            timeFrame: "11:00AM - 2:00PM",
            technicianId: 2,
          },
          {
            employeeId: 1,
            customerId: 11,
            status: "CSR-Need Schedule",
            number: "4172113742",
          },
          {
            employeeId: 1,
            customerId: 12,
            status: "Completed",
            number: "4172115459",
            date: "07/11/23",
            timeFrame: "1:00PM - 4:00PM",
            technicianId: 2,
          },
          {
            employeeId: 1,
            customerId: 13,
            status: "Waiting for Part",
            number: "4172129406",
          },
          {
            employeeId: 1,
            customerId: 14,
            status: "CSR-Need Schedule",
            number: "4172133991",
          },
          {
            employeeId: 1,
            customerId: 15,
            status: "CSR-Need Schedule",
            number: "4172146583",
          },
          {
            employeeId: 1,
            customerId: 16,
            status: "Waiting for Part",
            number: "4172150956",
          },
          {
            employeeId: 1,
            customerId: 17,
            status: "CSR-Need Schedule",
            number: "4172166338",
          },
          {
            employeeId: 1,
            customerId: 18,
            status: "CSR-Part Came In",
            number: "4172186254",
          },
          {
            employeeId: 1,
            customerId: 19,
            status: "Completed",
            number: "4172265546",
            date: "03/04/23",
            timeFrame: "2:00PM - 5:00PM",
            technicianId: 2,
          },
          {
            employeeId: 1,
            customerId: 20,
            status: "CSR-Need Schedule",
            number: "4172218784",
          },
          {
            employeeId: 2,
            customerId: 21,
            status: "Need Review",
            number: "68626936",
            date: "02/11/23",
            timeFrame: "12:00PM - 3:00PM",
            technicianId: 3,
          },
          {
            employeeId: 2,
            customerId: 22,
            status: "CSR-Need Schedule",
            number: "68651506",
          },
          {
            employeeId: 2,
            customerId: 23,
            status: "Completed",
            number: "68652757",
            date: "01/26/23",
            timeFrame: "2:00PM - 5:00PM",
            technicianId: 3,
          },
          {
            employeeId: 2,
            customerId: 24,
            status: "Cancel",
            number: "68674690",
          },
          {
            employeeId: 2,
            customerId: 25,
            status: "CSR-Part Came In",
            number: "68677029",
          },
          {
            employeeId: 2,
            customerId: 26,
            status: "CSR-Need Schedule",
            number: "68709641",
          },
          {
            employeeId: 2,
            customerId: 27,
            status: "Cancel",
            number: "68720332",
          },
          {
            employeeId: 2,
            customerId: 28,
            status: "Need Review",
            number: "68725629",
            date: "07/01/23",
            timeFrame: "1:00PM - 4:00PM",
            technicianId: 3,
          },
          {
            employeeId: 2,
            customerId: 29,
            status: "Waiting for Part",
            number: "68726620",
          },
          {
            employeeId: 2,
            customerId: 30,
            status: "CSR-Need Schedule",
            number: "68728227",
          },
          {
            employeeId: 2,
            customerId: 31,
            status: "CSR-Part Came In",
            number: "68734196",
          },
          {
            employeeId: 2,
            customerId: 32,
            status: "Waiting for Part",
            number: "68735907",
          },
          {
            employeeId: 2,
            customerId: 33,
            status: "CSR-Need Schedule",
            number: "68743886",
          },
          {
            employeeId: 2,
            customerId: 34,
            status: "CSR-Part Came In",
            number: "68743988",
          },
          {
            employeeId: 2,
            customerId: 35,
            status: "Completed",
            number: "68757682",
            date: "03/23/23",
            timeFrame: "4:00PM - 7:00PM",
            technicianId: 4,
          },
          {
            employeeId: 2,
            customerId: 36,
            status: "CSR-Need Schedule",
            number: "68757692",
          },
          {
            employeeId: 2,
            customerId: 37,
            status: "Cancel",
            number: "68761220",
          },
          {
            employeeId: 2,
            customerId: 38,
            status: "Waiting for Part",
            number: "68767777",
          },
          {
            employeeId: 2,
            customerId: 39,
            status: "Need Review",
            number: "68768090",
            date: "02/28/23",
            timeFrame: "5:00PM - 8:00PM",
            technicianId: 4,
          },
          {
            employeeId: 2,
            customerId: 40,
            status: "Completed",
            number: "68768835",
            date: "04/04/23",
            timeFrame: "3:00PM - 6:00PM",
            technicianId: 4,
          },

          {
            employeeId: 1,
            customerId: 41,
            status: "CSR-Need Schedule",
            number: "4173546845",
          },
          {
            employeeId: 1,
            customerId: 42,
            status: "CSR-Need Schedule",
            number: "4173265446",
          },
          {
            employeeId: 1,
            customerId: 43,
            status: "Need Review",
            number: "4173156746",
          },
          {
            employeeId: 1,
            customerId: 44,
            status: "CSR-Need Schedule",
            number: "4173566873",
          },
          {
            employeeId: 1,
            customerId: 45,
            status: "Waiting for Part",
            number: "4173856919",
          },
          {
            employeeId: 1,
            customerId: 46,
            status: "Waiting for Part",
            number: "4173854946",
          },
          {
            employeeId: 1,
            customerId: 47,
            status: "Need Review",
            number: "4173674613",
          },
          {
            employeeId: 1,
            customerId: 48,
            status: "CSR-Part Came In",
            number: "4173060654",
          },
          {
            employeeId: 1,
            customerId: 49,
            status: "CSR-Part Came In",
            number: "4176155796",
          },
          {
            employeeId: 1,
            customerId: 50,
            status: "Completed",
            number: "4173516338",
            date: "01/23/23",
            timeFrame: "3:00PM - 6:00PM",
            technicianId: 1,
          },
          {
            employeeId: 1,
            customerId: 51,
            status: "Completed",
            number: "4173554187",
            date: "07/28/23",
            timeFrame: "4:00PM - 7:00PM",
            technicianId: 2,
          },
          {
            employeeId: 1,
            customerId: 52,
            status: "Completed",
            number: "4173471561",
            date: "07/18/23",
            timeFrame: "5:00PM - 8:00PM",
            technicianId: 3,
          },
          {
            employeeId: 1,
            customerId: 53,
            status: "Completed",
            number: "4173981661",
            date: "04/16/23",
            timeFrame: "1:00PM - 4:00PM",
            technicianId: 4,
          },
          {
            employeeId: 1,
            customerId: 54,
            status: "Completed",
            number: "4173124126",
            date: "07/11/23",
            timeFrame: "2:00PM - 5:00PM",
            technicianId: 1,
          },
          {
            employeeId: 1,
            customerId: 55,
            status: "Completed",
            number: "4173795734",
            date: "04/06/23",
            timeFrame: "11:00AM - 2:00PM",
            technicianId: 2,
          },
          {
            employeeId: 1,
            customerId: 56,
            status: "Completed",
            number: "4173234582",
            date: "06/24/23",
            timeFrame: "10:00AM - 1:00PM",
            technicianId: 3,
          },
          {
            employeeId: 1,
            customerId: 57,
            status: "Completed",
            number: "4173252734",
            date: "03/03/23",
            timeFrame: "12:00PM - 3:00PM",
            technicianId: 4,
          },

        ],
        options
      )
      .catch((err) => {
        throw new Error(err);
      });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Tickets";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        status: {
          [Op.in]: [
            "Completed",
            "CSR-Need Schedule",
            "Need Review",
            "Waiting for Part",
            "CSR-Part Came In",
            "CSR-Reschedule Done",
            "Cancel",
          ],
        },
      },
      {}
    );
  },
};

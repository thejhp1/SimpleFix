"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    static associate(models) {
      // define association here
      Ticket.belongsTo(models.Employee, {
        foreignKey: "employeeId",
      });

      Ticket.belongsTo(models.Customer, {
        foreignKey: "customerId",
      });

      Ticket.belongsTo(models.Technician, {
        foreignKey: "technicianId",
      });

      Ticket.hasMany(models.Claim, {
        foreignKey: "ticketId",
        onDelete: "CASCADE",
        hooks: true,
      });

      Ticket.hasMany(models.Product, {
        foreignKey: "ticketId",
        onDelete: "CASCADE",
        hooks: true,
      });

      Ticket.hasMany(models.Part, {
        foreignKey: "ticketId",
        onDelete: "CASCADE",
        hooks: true,
      });
    }
  }
  Ticket.init(
    {
      employeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      technicianId: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.ENUM(
          "Completed",
          "CSR-Need Schedule",
          "Need Review",
          "Waiting for Part",
          "CSR-Part Came In",
          "CSR-Reschedule Done",
          "Cancel",
          "Need Reschedule"
        ),
        allowNull: false,
      },
      number: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [2, 50],
        },
      },
      note: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.STRING,
      },
      timeFrame: {
        type: DataTypes.ENUM(
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
    },
    {
      sequelize,
      modelName: "Ticket",
    }
  );
  return Ticket;
};

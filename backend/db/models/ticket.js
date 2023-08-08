'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ticket.belongsTo(models.Employee, {
        foreignKey: 'employeeId'
      })

      Ticket.belongsTo(models.Customer, {
        foreignKey: 'customerId'
      })

      Ticket.hasMany(models.Claim, {
        foreignKey: 'ticketId',
        onDelete: 'CASCADE',
        hooks: true
      })

      Ticket.hasMany(models.Product, {
        foreignKey: 'ticketId',
        onDelete: 'CASCADE',
        hooks: true
      })

      Ticket.hasMany(models.Part, {
        foreignKey: 'ticketId',
        onDelete: 'CASCADE',
        hooks: true
      })
    }
  }
  Ticket.init({
    employeeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('Completed', 'CSR-Need Schedule', 'Need Review', 'Waiting for Part', 'CSR-Part Came In', 'CSR-Reschedule Done', 'Cancel'),
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [2, 50]
      }
    }
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};

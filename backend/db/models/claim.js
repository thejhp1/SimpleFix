'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Claim extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Claim.belongsTo(models.Ticket, {
        foreignKey: 'ticketId'
      })
    }
  }
  Claim.init({
    ticketId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 50]
      }
    },
    labor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    part: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mileage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Claim Submitted", "Claim Under Review", "Need Submit", "Paid", "Rejected"),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Claim',
  });
  return Claim;
};

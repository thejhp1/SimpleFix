'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Part extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Part.init({
    ticketId: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    number: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 50]
      }
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 50]
      }
    },
    orderNumber: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 50]
      }
    },
    quantity: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('Need PO', 'Waitin for Part', 'Part Ready', 'Backordered'),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Part',
  });
  return Part;
};

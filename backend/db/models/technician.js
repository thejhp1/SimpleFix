'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Technician extends Model {
    static associate(models) {
      // define association here
      Technician.belongsTo(models.Company, {
        foreignKey: 'companyId'
      })

      Technician.hasMany(models.Ticket, {
        foreignKey: 'technicianId',
        onDelete: 'CASCADE',
        hooks: true
      })
    }
  }
  Technician.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Technician',
  });
  return Technician;
};

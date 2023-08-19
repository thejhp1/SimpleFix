// 'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate(models) {
      // define association here
      Company.hasMany(models.Employee, {
        foreignKey: 'companyId',
        onDelete: 'CASCADE',
        hooks: true
      })

      Company.hasMany(models.Technician, {
        foreignKey: 'companyId',
        onDelete: 'CASCADE',
        hooks: true
      })
    }
  }
  Company.init({
    name: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};

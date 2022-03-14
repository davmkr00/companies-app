'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class companyDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  companyDetails.init({
    name: DataTypes.STRING,
    purpose: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'companyDetails',
  });
  return companyDetails;
};
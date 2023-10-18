'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class address_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  address_user.init({
    address: DataTypes.STRING,
    code_postal: DataTypes.STRING,
    city: DataTypes.STRING,
    province: DataTypes.STRING,
    street: DataTypes.STRING,
    floor: DataTypes.STRING,
    apartment: DataTypes.STRING,
    users_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'address_user',
  });
  return address_user;
};
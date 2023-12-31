'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product.init({
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    photo: {
      type: DataTypes.STRING,
      get(){
        return this.getDataValue('photo') ? `http://localhost:5600/${this.getDataValue('photo')}` :``
      }
    },
    total:{
      type: new DataTypes.VIRTUAL(DataTypes.FLOAT,['amount','stock']),
      get(){
        return `${this.amount*this.stock}`
      }
    }
  }, {
    sequelize,
    modelName: 'product',
    paranoid:true
  });
  return product;
};
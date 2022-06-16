'use strict';
const {Model, DataTypes} = require('sequelize');
const conection=require('../db/conection')
  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  books.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    price: DataTypes.INTEGER,
    category: DataTypes.STRING
  }, {
    sequelize:conection,
    modelName: 'books',
    tableName:'books'
  });
 module.exports=books

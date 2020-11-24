'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Plan.init({
    title: DataTypes.STRING,
    list: DataTypes.INTEGER,
    client: DataTypes.INTEGER,
    value: DataTypes.FLOAT,
    import: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Plan',
  });
  return Plan;
};
const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define(
    'country',
    {
      id: {
        type: DataTypes.STRING(3),
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      flag: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      capital: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      subregion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      area: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      population: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );
};

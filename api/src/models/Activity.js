const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'activity',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
          isInt: true,
        },
      },
      duration: {
        type: DataTypes.STRING,
      },
      season: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};

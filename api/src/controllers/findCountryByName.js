const { Country, Activity } = require('../db.js');
const { Op } = require('sequelize')


const findCountryByName = async (name) =>
  await Country.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
    include: [
      {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: { attributes: [] },
      },
    ],
  });


module.exports = findCountryByName
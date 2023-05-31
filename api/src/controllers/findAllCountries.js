const { Country, Activity } = require('../db.js')

const findAllCountries = async () => await Country.findAll({
    include: [
        {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: { attributes: [] },
        },
    ],
})

module.exports = findAllCountries
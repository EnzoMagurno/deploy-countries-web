const { Country } = require('../db.js')
const findCountryById = async (id) => {
    const country = await Country.findOne({ where: { id } })
    const activities = await country.getActivities()
    return { country, activities }
}
module.exports = findCountryById
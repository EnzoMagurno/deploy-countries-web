const {Activity,Country} = require('../db.js')

const createActivityDatabase = async(newActivity,countries) =>{
    const activity = await Activity.create(newActivity)
    countries.map(
        async (country)=> await activity.setCountries(await Country.findByPk(country))
    )
}
module.exports = createActivityDatabase;
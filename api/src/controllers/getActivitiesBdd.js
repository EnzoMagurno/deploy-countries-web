const {Activity,Country} = require('../db.js')

const getActivitiesBdd = async() =>{
    return await Activity.findAll({ include: Country });
}
module.exports = getActivitiesBdd
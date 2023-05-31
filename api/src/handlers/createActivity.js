const createActivityDatabase = require('../controllers/createActivityDatabase.js')

const createActivity = async(req,res) =>{
    const {name,difficulty,duration,season,countries} = req.body
    const newActivity = {name,difficulty,duration,season}
try {
    const data = await createActivityDatabase(newActivity,countries)
    return res.status(200).send(data)
} catch (error) {
    res.status(400).send({error:error.message})
}
}
module.exports = createActivity
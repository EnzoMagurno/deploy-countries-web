const getActivitiesBdd = require('../controllers/getActivitiesBdd.js')
const getActivities = async(req,res) =>{
try {
    const activities = await getActivitiesBdd()
    if(!activities){
        return res.status(200).send('No activities founded')
    }
    return res.status(200).send(activities)
} catch (error) {
    res.status(400).send({error:error.message})
}
}
module.exports = getActivities;
const findCountryById = require('../controllers/findCountryById')
const getCountryById = async(req,res) =>{
try {
    let {id} = req.params
    const response = await findCountryById(id);
    if (!response) {
        return res.status(404).send({message:"Country not found"})
    }else{
        return res.status(200).send(response)
    }
} catch (error) {
    res.status(400).send({error:error.message})
}
}
module.exports = getCountryById
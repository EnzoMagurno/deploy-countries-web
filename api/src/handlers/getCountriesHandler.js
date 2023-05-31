const findCountryByName = require('../controllers/findCountryByName')
const findAllCountries = require('../controllers/findAllCountries.js')
const getCountriesHandler = async (req, res) => {
  try {
  let {name} = req.query
  if(!name){
    const countriesDb = await findAllCountries()
    return res.status(200).send(countriesDb);
  }
  name = name.toLowerCase()
  const countryDb = await findCountryByName(name)
  if(countryDb.length===0){
    return res.status(404).send('No countries found')
  }
  return res.status(200).send(countryDb)
} catch (error) {
  return res.status(400).send(error.message)
}
}
module.exports = getCountriesHandler;
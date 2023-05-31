const axios = require('axios')
const { Country } = require('../db.js');
const { API } = process.env;
const countriesJSON = require('../countries.json')
require('dotenv').config();

const countriesDatabase = async (req, res) => {
    try {
        const data = countriesJSON.map(country => {
            let capital = country.capital;
            if (typeof capital === 'string') {
                capital = [capital];
            }
            return {
                id: country.cca3,
                name: country.name.common,
                flag: country.flags[1],
                capital: capital,
                continent: country.region,
                subregion: country.subregion,
                area: country.area,
                population: country.population,
            }
        });
        const bdd = await Country.bulkCreate(data)
        res.status(200).send(bdd)
    } catch (error) {
        res.status(400).send(error)
    }
}
module.exports = countriesDatabase
const { Router } = require('express');
const countriesRouter = Router();
const getCountriesHandler = require('../handlers/getCountriesHandler.js');
const getCountryById = require('../handlers/getCountryById.js')
const countriesDatabase = require('../controllers/countriesDatabase.js');
const createActivity = require('../handlers/createActivity.js')
const getActivities = require('../handlers/getActivities.js')
countriesRouter.get('/database',countriesDatabase);
countriesRouter.post('/', createActivity);
countriesRouter.get('/activities/all', getActivities);
countriesRouter.get('/', getCountriesHandler);
countriesRouter.get('/:id', getCountryById);
module.exports = countriesRouter;
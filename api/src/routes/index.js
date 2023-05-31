const { Router } = require('express');
const mainRouter = Router();
const countriesRouter = require('./countriesRouter');
mainRouter.use('/countries', countriesRouter);

module.exports = mainRouter;

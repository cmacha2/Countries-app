const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getCountries} = require('../controllers/getCountries');
const { getCountriesId } = require('../controllers/getCountriesId');
const { getAllActivies } = require('../controllers/getAllActivies');
const { postActivities } = require('../controllers/postActivities');
const { filterForActivities } = require('../controllers/filterForActivities');

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/countries',getCountries);
router.get('/countries/:id', getCountriesId)
router.get('/activities/:nameActivity', filterForActivities)
router.post('/activities', postActivities)
router.get('/allActivities', getAllActivies)



module.exports = router;

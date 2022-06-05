const { Router } = require('express');
const { erroresRoute } = require('./erroresRoute');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getCountries} = require('./getCountries');
const { getCountriesId } = require('./getCountriesId');
const { getMatchCountries } = require('./getMatchCountries');
const { postActivities } = require('./postActivities');

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/countries',getCountries);
router.get('/countries',getMatchCountries)
router.get('/countries/:id', getCountriesId)
router.post('/activities', postActivities)
router.use(erroresRoute)

module.exports = router;

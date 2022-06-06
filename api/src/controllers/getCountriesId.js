const { Country,Activity } = require(".././db.js");

const getCountriesId = async (req, res) => {
  try {
    let { id } = req.params;
    let searchForId = await Country.findByPk(id,{include:Activity})
     res.json(searchForId ? searchForId : `No encontramos ningun pais con que coincida con el ID`)
  } catch (error) {
     res.status(404).send(`Tuvimos un error en el proceso de busqueda`);
  }
};

module.exports.getCountriesId = getCountriesId
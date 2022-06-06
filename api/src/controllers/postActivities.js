const { Op } = require("sequelize");
const { Country, Activity } = require(".././db.js");

const postActivities = async (req, res) => {
  try {
    let { ids, name, difficulty, duration, season } = req.body;
    if (!ids || !name || !difficulty || !duration || !season)
      return res.status(404).send(`Lo sentimos falta parametros obligatorios`);
    let activity = await Activity.findOrCreate({
      where: { name: name },
      defaults: { name, difficulty, duration, season },
    });
    let searchForId = await Country.findAll({ where: { id: ids } });
    searchForId.map(async (pais) => {
      await pais.addActivity([activity[0].id]);
    });
    res.status(201).json(activity);
  } catch (error) {
    res
      .status(404)
      .send(`Tuvimos un error en el proceso de anadir la actividad`);
  }
};
module.exports.postActivities = postActivities;

//   id: ["CUB","CAN","ARG"]

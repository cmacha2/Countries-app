const { Country,Activity } = require("../db.js");

const filterForActivities = async (req, res) => {
  try {
    let {nameActivity} = req.params
    let activities = await Country.findAll({include:{
      model:Activity, where:{name:nameActivity}
    }
  })
  // let activities = await Country.findAll({include:Activity})
    res.json(activities)
  } catch (error) {
     res.status(404).send(`Tuvimos un error en el proceso de busqueda`);
  }
};

module.exports.filterForActivities = filterForActivities
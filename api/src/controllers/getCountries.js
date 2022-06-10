const axios = require("axios");
const { Country, Activity } = require(".././db.js");

const getApiCountries = async (req, res) => {
  let apiGetCountries = await axios.get("https://restcountries.com/v3/all");
  let countryInfo = apiGetCountries.data.map(async (x) => {
    return {
      id: x.cca3,
      name: x.name.common,
      capital: x.capital ? x.capital.toString() : x.region,
      img: x.flags[0],
      continent: x.continents.toString(),
      subregion: x.subregion || x.region,
      area: x.area,
      population: x.population,
    };
  });
  return Promise.all(countryInfo);
};

const getCountries = async (req, res) => {
  try {
    let { name } = req.query;
    var db = await Country.findAll({include:Activity});
    if (!db.length) {
      await Country.bulkCreate(await getApiCountries());
      db = await Country.findAll({include:Activity});
    }
    if (name) {
      let countriesFilter = db.filter((c) =>
        c.name.toLowerCase().includes(name.toLowerCase())
      );
      if (!countriesFilter.length){
        return res
        .status(404)
        .json({msg:`No se encuentran coincidencias para el dato pasado`});
      }
      // let result1 = countryFilter.map((info) => {
      //   return {id:info.id, name: info.name, img: info.img, continent: info.continent , population:info.population};
      // });
      return res.json(countriesFilter);
    }
    // let result2 = db.map((info) => {
    //   return {id:info.id, name: info.name, img: info.img, continent: info.continent, population:info.population };
    // });
    return res.json(db);
  } catch (error) {
    res.status(404).json(`Tuvimos un error en el proceso de busqueda`);
  }
};
module.exports.getCountries = getCountries;

// const getCountries = async (req,res) => {
//   try {
//     let db = await Country.findAll()
//     if(db){
//       let dbformat = db.map((info) => {
//         return { name: info.name, img: info.img, continent: info.continent };
//       });
//       return res.json(dbformat);
//     }
//     let buildDB = await Country.bulkCreate(await getApiCountries());
//     let buildbformat = buildDB.map((info) => {
//       return { name: info.name, img: info.img, continent: info.continent };
//     })
//       return res.json(buildbformat);
//   } catch (error) {
//     res.status(404).send("error:", error);
//   }
// };

// const getCountries = async (req, res) => {
//   try {
//     let db = await Country.findAll()
//     let dbformat = db.map((info) => {
//       return { name: info.name, img: info.img, continent: info.continent };
//     });
//     if (db.length) return res.json(dbformat);
//     let buildDB = await Country.bulkCreate(await getApiCountries());
//     let buildbformat = buildDB.map((info) => {
//       return { name: info.name, img: info.img, continent: info.continent };
//     })
//       return res.json(buildbformat);
//   } catch (error) {
//     res.status(404).send("error:", error);
//   }
// };

// const getCountriess = async (req,res) => {
//   let {name}=req.query
//   var db = await Country.findAll()
//   if(!db.length){
//     db = await Country.bulkCreate(await getApiCountries());
//   }
//   if(name){
//     let countryFilter = db.filter(c => c.name.toLowerCase().includes(name.toLowerCase()))
//     res.json(countryFilter)
//   }
//   let dbformat = db.map((info) => {
//     return { name: info.name, img: info.img, continent: info.continent };
//   });
//   return res.json(dbformat);
// };

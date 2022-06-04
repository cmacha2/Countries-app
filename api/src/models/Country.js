const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id:{
      type:DataTypes.STRING(3),
      allowNull:false,
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    continent:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    capital:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    subregion:{
      types:DataTypes.STRING,
    },
    area:{
      type:DataTypes.STRING,
    },
    population:{
      type:DataTypes.INTEGER
    }
  },
  {
    timestamps:false
  }
  );
};
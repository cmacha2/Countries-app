const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Activity',{
        name:{
            type:DataTypes.STRING,
        },
        difficulty:{
            type:DataTypes.INTEGER,
            validate:{
                min:1,
                max:5
            }
        },
        duration:{
            type:DataTypes.STRING,
        },
        season:{
            type:DataTypes.ENUM('Summer', 'Fall', 'Winter', 'Spring'),
            set(value) {
                this.setDataValue('season', value[0].toUpperCase() + value.slice(1));
              }
        }
    },
    {
        timestamps:false,
    }
    )
}
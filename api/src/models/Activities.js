const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey:true
    },
    dificulty: {
      type: DataTypes.INTEGER,
      validate:{
        min:1.0,
        max:5.0
      }
    },
    duration: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    temporada: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

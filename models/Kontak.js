// import sequelize 
const { Sequelize, DataTypes } = require('sequelize');
// import connection 
const db = require('../connection.js');

 
// Define schema
const Kontak = db.define('kontaks', {
  // Define attributes
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  no_handphone: {
    type: DataTypes.STRING
  }
},{
  // Freeze Table Name
  freezeTableName: true
});
 

module.exports = Kontak;
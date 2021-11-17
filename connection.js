const database = require('./database.json');
const { Sequelize } = require('sequelize');

const db = new Sequelize(database.dev.database, database.dev.user, database.dev.password, {
    host: database.dev.host,
    dialect: 'mysql'
});

module.exports = db;
// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: database.dev.host,
//     user: database.dev.user,
//     password: database.dev.password,
//     database: database.dev.database,
//     port: database.dev.port,
//     multipleStatements: true
// });
// // koneksi database
// connection.connect((err) => {
//     if (err) throw err;
//     console.log('MySQL Connected...');
// });
// module.exports = connection;
const Sequilize = require('sequelize');

const connection = new Sequilize('guia_perguntas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;


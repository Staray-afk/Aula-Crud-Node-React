const { where } = require('sequelize');
const Produto = require('./produto');

//index.js
(async () => {
    const database = require('./db');
    const Produto = require('./produto');
    const Usuario = require('./usuario');

    try {
        const resultado = await database.sync();
        console.log('resultado');
    } catch (error) {
        console.log(error);
    }
})();











//assim
Produto.destroy({ where:{ id: 1}});

//ou assim 
const produto = await Produto.findByPk(1);
produto.destroy();

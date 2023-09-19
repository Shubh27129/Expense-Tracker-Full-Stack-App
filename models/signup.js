const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Users = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    name: Sequelize.STRING,  
    email:{
        type: Sequelize.STRING,
        unique: true
        
    },
    pwd:{
        type: Sequelize.INTEGER,
        
    }
});

module.exports= Users;
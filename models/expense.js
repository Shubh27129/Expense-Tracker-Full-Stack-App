const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Expense = sequelize.define('expense', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    expenseAmnt: Sequelize.INTEGER,  
    desc: Sequelize.STRING,
    categoryList:  Sequelize.STRING
});


module.exports= Expense;
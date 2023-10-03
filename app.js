const path = require('path');
// const bcrypt = require('bcrypt');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize= require('./util/database')

var cors= require('cors')

const signupRoutes = require('./routes/signup');
const loginRoutes = require('./routes/signup');
const expenseRoutes = require('./routes/expense');
const  Users  = require('./models/signup');
const  Expense  = require('./models/expense');

const app = express();

app.use(cors())

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', signupRoutes)

app.use('/users', loginRoutes)

app.use('/expense', expenseRoutes)

Users.hasMany(Expense);
Expense.belongsTo(Users);

sequelize.sync({force: true}).then(result=>{
    app.listen(3000);
}).catch(err => console.log(err))
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize= require('./util/database')

var cors= require('cors')

const signupRoutes = require('./routes/signup');

const app = express();


app.use(cors())

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', signupRoutes)

sequelize.sync().then(result=>{
    app.listen(3000);
}).catch(err => console.log(err))
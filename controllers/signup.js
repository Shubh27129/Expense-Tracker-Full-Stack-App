const Users= require('../models/signup')
const bcrypt = require('bcrypt');

exports.signupUsers= async(req, res, next)=>{
    try{
    const name= req.body.name;
    const email= req.body.email;
    const pwd= req.body.pwd;

    const saltrounds=10;
    bcrypt.hash(pwd, saltrounds, async (err, hash) => {
        console.log(err)
        await Users.create({ name, email, pwd: hash })
        res.status(201).json({message: 'Successfuly create new user'})
    })
    }catch(err) {
            res.status(500).json(err);
        }

}


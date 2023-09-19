const Users= require('../models/signup')

exports.signupUsers= async(req, res, next)=>{
    try{
    const name= req.body.name;
    const email= req.body.email;
    const pwd= req.body.pwd;


    const data= await Users.create({name:name, email:email, pwd:pwd})
    
    res.status(201).json(data);  
    }catch(err){
        res.status(500).json({
            error:err
        })
    }
}
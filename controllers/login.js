const Users= require('../models/signup')

const bcrypt = require('bcrypt');


exports.loginUsers= async(req ,res , next)=>{
    try{
      const { email, pwd } =req.body;
      //console.log(pwd)
    //   const user= await Users.findOne({ where : { email }})
    //   //console.log(user.pwd)
    //   //console.log(user)
    //   if(user){
    //       if(JSON.stringify(user.pwd)===pwd){
    //           res.status(200).json({success:true, message: "User logged in successfully"})
    //       } else{
    //           return res.status(400).json({success:false, message: "Password is incorrect"})
    //       }
    //   }else{
    //       return res.status(404).json({success:false, message: "User Does not exist"})
    //   }
    // }catch(err){
    //   res.status(500).json({message:err, success:false})
    // }
    const user  = await Users.findAll({ where : { email }})
    // console.log(user[0].pwd)
    // console.log(pwd)
        if(user.length > 0){
           bcrypt.compare(pwd, user[0].pwd, (err, result) => {
        //    if(err){
        //     throw new Error('Something went wrong')
        //    }
            if(result === true){
                return res.status(200).json({success: true, message: "User logged in successfully"})
            }
            else{
            return res.status(400).json({success: false, message: 'Password is incorrect'})
           }
        })
        } else {
            return res.status(404).json({success: false, message: 'User Doesnot exitst'})
        }
    }catch(err){
        res.status(500).json({message: err, success: false})
    }
  }
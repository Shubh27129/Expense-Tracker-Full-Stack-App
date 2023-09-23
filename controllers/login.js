const Users= require('../models/signup')

const bcrypt = require('bcrypt');

// exports.loginUsers = async (req, res, next) => {
//   try {
//     const { email, pwd } = req.body;
//     console.log(pwd)
//     const user = await Users.findOne({ where: { email } });
//     console.log(user.pwd)
//     if (user) {
//                  //await bcrypt.compare(pwd, user.pwd);

//       if (passwordMatch) {
//         res.status(200).json({ success: true, message: "User logged in successfully" });
//       } else {
//         return res.status(400).json({ success: false, message: "Password is incorrect" });
//       }
//     } else {
//       return res.status(404).json({ success: false, message: "User Does not exist" });
//     }
//   } catch (err) {
//     res.status(500).json({ message: err, success: false });
//   }
// }





exports.loginUsers= async(req ,res , next)=>{
    try{
      const { email, pwd } =req.body;
      //console.log(pwd)
      const user= await Users.findOne({ where : { email }})
      //console.log(user.pwd)
      //console.log(user)
      if(user){
          if(JSON.stringify(user.pwd)===pwd){
              res.status(200).json({success:true, message: "User logged in successfully"})
          } else{
              return res.status(400).json({success:false, message: "Password is incorrect"})
          }
      }else{
          return res.status(404).json({success:false, message: "User Does not exist"})
      }
    }catch(err){
      res.status(500).json({message:err, success:false})
    }
  }
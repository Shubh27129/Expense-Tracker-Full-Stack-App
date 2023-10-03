// const jwt = require('jsonwebtoken');
// const Users = require('../models/signup');

// const authenticate = (req, res, next) => {

//     try {
//         const token = req.header('Authorization');
//         console.log(token);
//         const user = jwt.verify(token, 'secretkey');
//         console.log('userID >>>> ', user.userId)
//         Users.findByPk(user.userId).then(user => {

//             req.user = user; ///ver
//             next();
//         })

//       } catch(err) {
//         console.log(err);
//         return res.status(401).json({success: false})
//         // err
//       }

// }

// module.exports = {
//     authenticate
// }



const jwt = require('jsonwebtoken');
const Users = require('../models/signup');

const authenticate = (req, res, next) => {
    try {
        const token = req.header('Authorization');
        //console.log(token);
        const user = jwt.verify(token, 'secretkey');
        //console.log('userID >>>> ', user.userId)
        Users.findByPk(user.userId).then(user => {
            if (!user) {
                return res.status(401).json({ success: false, message: 'User not found' });
            }
            req.user = user; // Set the user object in the request
            next();
        }).catch(err => {
            console.log(err);
            return res.status(401).json({ success: false, message: 'Authentication failed' });
        });
    } catch (err) {
        console.log(err);
        return res.status(401).json({ success: false, message: 'Authentication failed' });
    }
}

module.exports = {
    authenticate
}

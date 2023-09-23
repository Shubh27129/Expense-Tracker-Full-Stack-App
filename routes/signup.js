
const express = require('express');

const signupController = require('../controllers/signup');
const loginController = require('../controllers/login');

const router = express.Router();

router.post('/signup-user', signupController.signupUsers )
router.post('/login', loginController.loginUsers )

//router.get('/get-orders',ordersController.getOrders )

//router.delete('/delete-orders/:id',ordersController.deleteOrders )

module.exports = router;
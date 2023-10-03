
const express = require('express');

const expenseController = require('../controllers/expense');
const userAuthentication= require('../middleware/auth')


const router = express.Router();

router.post('/add-expense', userAuthentication.authenticate, expenseController.addExpense )

router.get('/get-expense', userAuthentication.authenticate, expenseController.getExpense )

router.delete('/delete-expense/:id',expenseController.deleteExpense )

module.exports = router;
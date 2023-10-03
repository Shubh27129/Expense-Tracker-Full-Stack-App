const Expense= require('../models/expense')

exports.addExpense= (req, res, next)=>{
   
    const expenseAmnt= req.body.expenseAmnt;
    const desc= req.body.desc;
    const categoryList= req.body.categoryList;
    // console.log(req.body)

    Expense.create({ expenseAmnt, desc, categoryList, userId: req.user.id}).then(expense => {
        return res.status(201).json({expense, success: true } );
        
    }).catch(err => {
        console.log(err)
        return res.status(500).json({success : false, error: err})
    })
}

exports.getExpense=  (req, res, next)=>{
   
    // const expense= await Expense.findAll({where: {userId: req.user.id}});
    // res.status(200).json(expense);
    
    Expense.findAll({ where : { userId: req.user.id}}).then(expenses => {
        return res.status(200).json({expenses, success: true})
    })

    .catch(err => {
        console.log(err)
        return res.status(500).json({ error: err, success: false})
    })
}

exports.deleteExpense= async(req,res,next)=>{
    try{
        const Uid= req.params.id;
        await Expense.destroy({where: {id:Uid}})
        res.sendStatus(200);
       // res.status(200).json({allUsers: users});
        }catch(error){
            console.log('Error in deleting expense')
            res.status(500).json(error)
        }
}



// const Expense= require('../models/expense')

// exports.addexpense = (req, res) => {
//     const { expenseamount, description, category } = req.body;

   
    
//     Expense.create({ expenseamount, description, category, userId: req.user.id}).then(expense => {
//         return res.status(201).json({expense, success: true } );
//     }).catch(err => {
//         return res.status(500).json({success : false, error: err})
//     })
// }

// exports.getexpenses = (req, res)=> {
    
//     Expense.findAll({ where : { userId: req.user.id}}).then(expenses => {
//         return res.status(200).json({expenses, success: true})
//     })
//     .catch(err => {
//         console.log(err)
//         return res.status(500).json({ error: err, success: false})
//     })
// }

// exports.deleteexpense = (req, res) => {
//     const expenseid = req.params.expenseid;
//     if(expenseid == undefined || expenseid.length === 0){
//         return res.status(400).json({success: false, })
//     }
//     Expense.destroy({where: { id: expenseid, userId: req.user.id }}).then((noofrows) => {
//         if(noofrows === 0){
//             return res.status(404).json({success: false, message: 'Expense doenst belong to the user'})
//         }
//         return res.status(200).json({ success: true, message: "Deleted Successfuly"})
//     }).catch(err => {
//         console.log(err);
//         return res.status(500).json({ success: true, message: "Failed"})
//     })
// }


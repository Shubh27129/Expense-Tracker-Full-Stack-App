const Expense= require('../models/expense')

exports.addExpense= async(req, res, next)=>{
    try{
    const expenseAmnt= req.body.expenseAmnt;
    const desc= req.body.desc;
    const categoryList= req.body.categoryList;


    const data= await Expense.create({expenseAmnt:expenseAmnt , desc:desc, categoryList:categoryList})
  
    res.status(201).json(data);  
    }catch(err){
        res.status(500).json({
            error:err
        })
    }
}

exports.getExpense= async (req, res, next)=>{
    try{
    const expense= await Expense.findAll();
    res.status(200).json(expense);
    }catch(error){
        console.log('Error in get expense',JSON.stringify(error))
        res.status(500).json({error:error})
    }
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
const { Income, Expense } = require('./IncomeExpense')
const fs = require('fs')
const data = './data.json'
class Note{
    // constructor(list){
    //     this.list = list || [];
    // }

    static addIncome(name, total){
        let income = JSON.parse(fs.readFileSync(data, 'utf-8'))
        let newIncome = new Income(name, total)
        income.incomes.push(newIncome)
        console.log(income.incomes)
        return JSON.stringify(fs.writeFileSync(income.incomes),'utf-8')
    }

    addExpense(name, total){
        let expense = new Expense(name, total, 'expense')
        this.list.push(expense)
    }

    static listIncome(){
        console.log('Income List:')
        let income = JSON.parse(fs.readFileSync(data, 'utf-8'))
        income.incomes.forEach((x)=>{
                const {name, total, category} = x
                console.log(`${name}, ${total}`)
            }
        )
    }

    static listExpense(){
        console.log('Expense List:')
        let income = JSON.parse(fs.readFileSync(data, 'utf-8'))
        income.expenses.forEach((x)=>{
                const {name, total, category} = x
                console.log(`${name}, ${total}`)
            }
        )
    }
    balance(){
        let expenseTotal = 0
        let incomeTotal = 0
        this.list.forEach((inc)=>{
            if(inc.category==='income'){
                incomeTotal += inc.total;
            }else{
                expenseTotal += inc.total;
            }
        })
        let diff = incomeTotal-expenseTotal
        let balanced
        if (diff === 0){
            balanced= 'Balanced'
        } else if (diff >0){
            balanced = 'Positive'
        }else{
            balanced = 'Negative'
        }
        return balanced
    }
}

module.exports = Note;
const { Income, Expense } = require('./IncomeExpense')
const fs = require('fs')
const data = './data.json'
class Note{
    static addIncome(name, total){
        let datajson = JSON.parse(fs.readFileSync(data, 'utf-8'))
        let newIncome = new Income(name, total)
        datajson.incomes.push(newIncome)
        this.save(JSON.stringify(datajson))
    }

    static save(newdata){
        fs.writeFileSync(data, newdata)
    }

    static addExpense(name, total){
        let datajson = JSON.parse(fs.readFileSync(data, 'utf-8'))
        let newExpense = new Expense(name, total)
        datajson.expenses.push(newExpense)
        this.save(JSON.stringify(datajson))
    }

    static listIncome(){
        console.log('Income List:')
        let datajson = JSON.parse(fs.readFileSync(data, 'utf-8'))
        datajson.incomes.forEach((x)=>{
                const {name, total} = x
                console.log(`${name}, ${total}`)
            }
        )
    }

    static listExpense(){
        console.log('Expense List:')
        let datajson = JSON.parse(fs.readFileSync(data, 'utf-8'))
        datajson.expenses.forEach((x)=>{
                const {name, total} = x
                console.log(`${name}, ${total}`)
            }
        )
    }
    static balance(){
        let datajson = JSON.parse(fs.readFileSync(data, 'utf-8'))
        console.log(datajson)
        // let expenseTotal = 0
        // let incomeTotal = 0
        let expenseTotal = datajson.expenses.reduce((total,exp)=> total += exp.total,0)
        let incomeTotal = datajson.incomes.reduce((total,inc)=> total += inc.total,0)
        console.log(expenseTotal)
        console.log(incomeTotal)
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
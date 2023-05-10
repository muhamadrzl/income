const { Income, Expense } = require('./IncomeExpense')


class Note{
    constructor(list){
        this.list = list || [];
    }

    addIncome(name, total){
        let income= new Income(name, total, 'income');
        this.list.push(income)

    }

    addExpense(name, total){
        let expense = new Expense(name, total, 'expense')
        this.list.push(expense)
    }

    listIncome(){
        console.log('Income List:')
        this.list.forEach(inc=>{
            if (inc.category === 'income'){
                console.log(`${inc.name} has ${inc.total}`)
            }
        })
    }

    listExpense(){

    }
    balance(){

    }
}

module.exports = Note;
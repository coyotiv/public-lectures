const Bank = require('./src/bank')
const User = require('./src/user')

const bank = new Bank()
const user = new User('Armagan Amcalar')
const anotherUser = new User('Stephen Ingram')

user.openAccount(bank)
anotherUser.openAccount(bank)

user.deposit(300)
user.withdraw(100)
user.withdraw(50)
user.withdraw(50)
user.withdraw(20)

anotherUser.deposit(3_000_000)
anotherUser.deposit(3)

console.log(bank.balanceSheet)

const uuid = require('uuid').v4

class BankAccount {
  #id = uuid()
  #balance = 0
  #overdraft = 100
  #transactions = []
  #user = null

  constructor(user) {
    this.#user = user
  }

  #setBalance = newAmount => {
    if (newAmount < -this.#overdraft) throw new Error(`Balance cannot go below -${this.#overdraft}.`)

    this.#transactions.push(newAmount)
    this.#balance = newAmount
  }

  get balance() {
    return this.#balance
  }

  deposit(amount) {
    if (amount <= 0) throw new Error(`Amount must be a positive number.`)

    this.#setBalance(this.#balance + amount)
  }

  withdraw(amount) {
    if (amount <= 0) throw new Error(`Amount must be a positive number.`)

    this.#setBalance(this.#balance - amount)
  }

  get transactions() {
    return this.#transactions.slice()
  }

  get user() {
    return this.#user
  }

  get id() {
    return this.#id
  }
}

module.exports = BankAccount

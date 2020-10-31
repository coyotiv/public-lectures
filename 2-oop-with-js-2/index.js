class BankAccount {
  #balance = 0
  #overdraft = 100
  #transactions = []

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
}

const account = new BankAccount()

account.withdraw(-100)

console.log('Account balance', account.balance)
console.log('Transaction history', account.transactions)

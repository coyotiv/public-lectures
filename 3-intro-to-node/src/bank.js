const BankAccount = require('./bank-account')

class Bank {
  #accounts = []

  openAccount(user) {
    const account = new BankAccount(user)

    this.#accounts.push(account)

    return account
  }

  get balanceSheet() {
    return this.#accounts.map(account => {
      return {
        user: account.user.name,
        id: account.id,
        balance: account.balance,
      }
    })
  }
}

module.exports = Bank

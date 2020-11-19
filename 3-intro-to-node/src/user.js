class User {
  #account = null
  #name = null

  constructor(name) {
    this.#name = name
  }

  openAccount(bank) {
    this.#account = bank.openAccount(this)
  }

  withdraw(amount) {
    this.#account.withdraw(amount)
  }

  deposit(amount) {
    this.#account.deposit(amount)
  }

  get account() {
    return this.#account
  }

  get name() {
    return this.#name
  }
}

module.exports = User

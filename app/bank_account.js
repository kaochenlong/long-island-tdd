class BankAccount {
  constructor(amount) {
    this.amount = amount
  }

  deposit(amount) {
    if (amount >= 0) {
      this.amount += amount
    }
  }

  withdraw(amount) {
    if (amount <= 0 || amount >= this.balance) {
      return 0
    }

    this.amount -= amount
    return amount
  }

  get balance() {
    return this.amount
  }
}

module.exports = BankAccount

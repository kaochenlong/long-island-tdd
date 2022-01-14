const BankAccount = require("../app/bank_account")

describe("存錢功能", () => {
  it("可以存錢", () => {
    // 3A
    // Arrange
    let account = new BankAccount(10)

    // Act
    account.deposit(5)

    // Assert
    expect(account.balance).toBe(15)
  })

  it("不可以存 0 元或是小於 0 元的金額", () => {
    let account = new BankAccount(10)
    account.deposit(-5)
    expect(account.balance).toBe(10)
  })
})

describe("領錢功能", () => {
  it("可以領錢", () => {
    let account = new BankAccount(20)
    let amount = account.withdraw(5)

    expect(amount).toBe(5)
    expect(account.balance).toBe(15)
  })

  it("不能領 0 元或是小於 0 元的金額", () => {
    let account = new BankAccount(20)
    let amount = account.withdraw(-5)

    expect(amount).toBe(0)
    expect(account.balance).toBe(20)
  })

  it("不能領超過本身餘額", () => {
    let account = new BankAccount(20)
    let amount = account.withdraw(25)

    expect(amount).toBe(0)
    expect(account.balance).toBe(20)
  })
})

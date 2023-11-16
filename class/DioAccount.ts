export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  getAccountNumber = (): number => {
    return this.accountNumber
  }

  getBalance = (): number => {
    return this.balance
  }

  deposit = (value: number): void => {
    if(!this.validateStatus()) throw new Error('Conta inválida')

    this.addBalance(value)

    console.log(`Voce depositou R$${value}`)
  }

  withdraw = (value: number): void => {
    if(!this.validateStatus()) throw new Error('Conta inválida')

    if (this.balance < value) throw new Error('Saldo insuficiente')

    this.subtractBalance(value)

    console.log(`Voce sacou R$${value} e seu saldo atual é R$${this.balance}`)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  protected addBalance = (value: number): void => {
    this.balance += value
  }

  protected subtractBalance = (value: number): void => {
    this.balance -= value
  }
}

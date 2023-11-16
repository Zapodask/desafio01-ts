import { DioAccount } from './DioAccount'

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if (!this.validateStatus()) {
      throw new Error('Conta inválida')
    }

    this.addBalance(value)

    console.log(`Voce solicitou um emprestimo de R$${value} e seu saldo atual é R$${this.getBalance()}`)
  }
}

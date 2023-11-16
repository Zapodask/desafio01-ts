import { DioAccount } from './DioAccount'

export class VipAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    if(!this.validateStatus()) throw new Error('Conta inválida')

    const newValue = value + 10

    this.addBalance(newValue)

    console.log(`Voce depositou R$${value} e recebeu R$10 de bonus`)
  }
}
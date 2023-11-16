import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { VipAccount } from './class/VipAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(25)
peopleAccount.withdraw(5)
console.log(peopleAccount.getName())
console.log(peopleAccount.getAccountNumber())
console.log(peopleAccount.getBalance())

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.getLoan(250)
console.log(companyAccount.getBalance())

const vipAccount = new VipAccount('Yan', 30)
vipAccount.deposit(50)
console.log(vipAccount.getBalance())
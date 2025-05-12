// * access modifier 

{
    class BankAccount {
       public readonly id: number;
       public name: string;
       /* private */ protected _balance: number  // * privet property hisebe bujhaite under score(_) dewa hoy
       /**
        * privet hole sudhu class er bhitor use kora jabe ar jodi protected hoy tahole child class gulo r moddhe use kora jabe
        * 
        */


        constructor(id: number, name: string, balance: number) {
            this.id = id,
            this.name = name
            this._balance = balance
        }

        addDeposite(amount: number) {
            this._balance += amount
        }

        getBalance() {
            return this._balance;
        }
    }

  

    const groibManushErAccount = new BankAccount(111, 'Mr. gorib', 20);
    groibManushErAccount.addDeposite(20)
    const myBalance = groibManushErAccount.getBalance();
    console.log(`My balance is ${myBalance}`);
}
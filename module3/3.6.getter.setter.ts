// * getter and setter

{
  class BankAccount {
    public readonly id: number;
    public name: string;
    /* private */ protected _balance: number; // * privet property hisebe bujhaite under score(_) dewa hoy
    /**
     * privet hole sudhu class er bhitor use kora jabe ar jodi protected hoy tahole child class gulo r moddhe use kora jabe
     *
     */

    constructor(id: number, name: string, balance: number) {
      (this.id = id), (this.name = name);
      this._balance = balance;
    }

    // addDeposite(amount: number) {
    //   this._balance += amount;
    // }

    set deposite(amount: number) {
        this._balance += amount;
    }

    // getBalance() {
    //   return this._balance;
    // }

    get balance() {
        return this._balance;
    }
  }

  const goribManushErAccount = new BankAccount(111, "Mr. gorib", 50);
//   groibManushErAccount.addDeposite(20);
//   const myBalance = groibManushErAccount.getBalance(); // * function call korte hocche

goribManushErAccount.deposite = 40
const myBalance = goribManushErAccount.balance; // * property er moto kore use call kora jay
  console.log(`My balance is ${myBalance}`);
}

// *learning fucntion , normal function, arrow function

function add(a : number, b: number = 10) : number {
    return a + b;
}

add(2, 2);

// *arrow function

const addArrow = (a: number, b: number): number => a + b;

// * object er bhitor konoo function thakle setake bole 'Method'

const poorUser = {
    name: 'Sajmul',
    balance: 18,
    addBalance(balance: number): number {
        return this.balance + balance;
    }
}

const arr: number [] = [1,2,3,4,5];

const newArr: number[] = arr.map((num:number):number => num ** 2);
// * mapped type

{
    const arrOfNumbers : number[] = [1,2,3,4,5];
    // const arrOfStrings : string[] = ['1','2','3','4','5'];

    const arrOfStrings : string[] = arrOfNumbers.map(number => number.toString());

    console.log(arrOfStrings);

    type AreaNumber = {
        height: number
        width: number 
    }

    // type AreaString = {
    //     height: string
    //     width: string
    // }

    // type AreaString = {
    //     [key in keyof AreaNumber] : string
    // }
    

    // T => {height: string, width: number}
    // key => T["height"] => string
    type AreaString<T> = {
        [key in keyof T] : T[key];
    }

    const area1 : AreaString<{height: string, width: number}> = {
        height: '100',
        width: 40
    }
}
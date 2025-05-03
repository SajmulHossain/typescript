/**
 * * type assertion
 * * type narrowing
 */

{
    // * type assertion

    let anything: any;

    anything = 222;

    // (anything as string)

    const kgToGm = (value: string | number) : string | number | undefined => {
        if(typeof value === 'string') {
            const convertedValue = parseFloat(value);
            return convertedValue * 1000;
        }

        if(typeof value === 'number') {
            return value * 1000;
        }
    } 

    const result1 = kgToGm(1000) as number;

    type CustomErr = {
        message: string
    }

    try {

    } catch (err) {
        console.log((err as CustomErr).message);
    }
}
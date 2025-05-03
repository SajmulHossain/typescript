/**
 * * ternary
 * * optional chaining
 * * nullish coalescing
 */

{
    const age :  number = 18;

    if(age >= 18) {
        console.log('adult');
    } else {
        console.log('not adult');
    }

    const isAdult = age >= 18 ? 'adult' : 'not adult';
    console.log(isAdult);


//  *nullish coalescing --> make decision with null or undefined

const isAuthenticated = undefined;
const result = isAuthenticated ?? 'Guest'
console.log({result});
}
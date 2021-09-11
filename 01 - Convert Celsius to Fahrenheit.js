/*
The algorithm to convert from Celsius to Fahrenheit is
the temperature in Celsius times 9/5, plus 32.
*/

/* 1- Using Vanilla JavaScript */
function convertToF(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}
convertToF(30);
// Output : 86 

/* 2- Using ES6 */
// Here I'll just convert it to an "Arrow function"
// Read more about Arrow functions here 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// Practice on freeCodeCamp https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/write-arrow-functions-with-parameters

const convertToF = (celsius) => celsius * 9 / 5 + 32;
// Output : 86 
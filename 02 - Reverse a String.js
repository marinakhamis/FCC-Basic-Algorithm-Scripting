/* 1- Using Vanilla JavaScript*/
/*
- Methods used: 
- Split : https://www.w3schools.com/jsref/jsref_split.asp
- Reverse : https://www.w3schools.com/jsref/jsref_reverse.asp
- Join : https://www.w3schools.com/jsref/jsref_join.asp
*/

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");
// Output: olleh

/* 2- Using ES6 */
const reverseString = (str) => str.split("").reverse().join("");
reverseString("hello");
// Output: olleh

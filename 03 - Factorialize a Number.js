/* 1- Using Vanilla JavaScript*/
function factorialize(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorialize(num - 1)
    }
}
factorialize(5);
// Output !5 = 5*4*3*2*1 = 120

/* 2- Using ES6 */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
const factorialize = (num) => num === 0 || num === 1 ? 1 : num * factorialize(num - 1);
factorialize(5);
// Output !5 = 5*4*3*2*1 = 120

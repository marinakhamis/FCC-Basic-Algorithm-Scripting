/* 1- Using Vanilla JavaScript*/
// Sort : https://www.w3schools.com/jsref/jsref_sort.asp

function findLongestWordLength(str) {
    var split = str.split(" ");
    return split.sort(function (a, b) {
        return b.length - a.length;
    })[0].length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
// Output : 6

/* 2- Using ES6 */
const findLongestWordLength = (str) => str.split(" ").sort((a, b) => b.length - a.length)[0].length;
findLongestWordLength("The quick brown fox jumped over the lazy dog");
// Output : 6
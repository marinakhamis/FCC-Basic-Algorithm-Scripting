

/*
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

*/

function largestOfFour(arr) {
  // First: We initialize an empty array to store the sorted arrays in
  let largestArr = []
  // I mapped the array of arrays in order to sort each one of them 
  arr.map((a)=> {
  // used sort in order to sort arrays 
    // Note: (b-a) => will sort descendingly 
    // (a-b) => will sort ascendingly 
    // https://www.w3schools.com/jsref/jsref_sort.asp
   a.sort((a,b) => {return b-a})
    // push the first (largest) number in the largestArr
   largestArr.push(a[0])
  })
  return largestArr
}


console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

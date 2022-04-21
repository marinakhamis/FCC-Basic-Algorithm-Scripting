function confirmEnding(str, target) {
  if(str.slice(-target.length) == target) {
    return true
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");
console.log(confirmEnding("Bastian", "ran"));

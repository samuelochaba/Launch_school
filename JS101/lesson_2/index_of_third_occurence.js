function thirdTime(string, character) {
  let occurenceCount = 0;
  let indexOfThirdOccurence = null;

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === character) {
      if (occurenceCount === 2) {
        return i;
      } else {
        occurenceCount += 1;
      }
    }
  }

  return indexOfThirdOccurence;
}

console.log(thirdTime("axbxcdxex", "x"));
console.log(thirdTime("axbxcdfed", "x"));
console.log(thirdTime("cxbxcdfedc", "c"));

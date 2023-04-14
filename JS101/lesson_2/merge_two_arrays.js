function merge(firstArray, secondArray) {
  let mergedArray = [];
  for (let i = 0; i < firstArray.length; i += 1) {
    let length = mergedArray.length;
    mergedArray[length] = firstArray[i];
    mergedArray[length + 1] = secondArray[i];
  }

  return mergedArray;
}

console.log(merge([1, 2, 3], [4, 5, 6]));

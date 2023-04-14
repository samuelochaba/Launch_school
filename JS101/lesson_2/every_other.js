function everyOther(integers) {
  let arrayOfEveryOtherElement = [];

  let integersLength = integers.length;

  for (let i = 0; i < integersLength; i += 2) {
    arrayOfEveryOtherElement.push(integers[i]);
  }

  return arrayOfEveryOtherElement;
}

console.log(everyOther([2, 4, 6, 7, 4, 12, 33, 48, 93, 62, 77, 56, 98, 90, 7]));

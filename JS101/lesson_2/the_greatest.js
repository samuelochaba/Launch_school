function the_greatest(numbers) {
  let greatestNumber = numbers[0];
  numbers.forEach((number) => {
    greatestNumber = number > greatestNumber ? number : greatestNumber;
  });

  return greatestNumber;
}

console.log(the_greatest([100, 2321, 300, 4, 5, 6, 70, 8, 9, 10]));

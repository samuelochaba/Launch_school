function logOddNumbers(limit) {
  for (let number = 1; number <= limit; number++) {
    if (number % 2 === 1) {
      console.log(number);
    }
  }
}

logOddNumbers(299);

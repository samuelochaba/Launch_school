function multisum(range) {
  let sum = 0;

  for (let i = 1; i <= range; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));

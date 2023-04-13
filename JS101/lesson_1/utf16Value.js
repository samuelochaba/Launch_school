function utf16Value(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i += 1) {
    sum += str.charCodeAt(i);
  }

  return sum;
}

console.log(utf16Value("Four score")); // 984
console.log(utf16Value("Launch School")); // 1251
console.log(utf16Value("a")); // 97
console.log(utf16Value("")); // 0

const OMEGA = "\u03A9"; // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA)); // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA)); // 2811

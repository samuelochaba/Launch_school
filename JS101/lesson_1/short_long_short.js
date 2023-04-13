function short_long_short(first_string, second_string) {
  let shorter_string =
    first_string.length > second_string.length ? second_string : first_string;

  let longer_string =
    first_string.length > second_string.length ? first_string : second_string;

  return `${shorter_string}${longer_string}${shorter_string}`;
}

console.log(short_long_short("abc", "defgh"));
console.log(short_long_short("abcde", "fgh"));
console.log(short_long_short("", "xyz"));

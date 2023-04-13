function concat_strings(strings) {
  let concatenatedStrings = "";
  strings.forEach((string) => {
    concatenatedStrings += string;
  });

  return concatenatedStrings;
}

console.log(
  concat_strings([
    "o",
    "b",
    "a",
    "n",
    "d",
    "e",
    " ",
    "i",
    "s",
    " ",
    "m",
    "y",
    " ",
    "n",
    "a",
    "m",
    "e",
  ])
);

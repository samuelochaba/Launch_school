// This programs gets either a single number or an array of numbers from the terminal
// If it gets a single number, it computes the sum or the product from 1 to that number
// If it gets an array of numbers, it computes the sum or products of the array items
// If it gets a single number less than zero, it keeps promptind the user for the correct input type

const rlSync = require("readline-sync");

function computSum(number_or_array) {
  if (number_or_array.length === 1) {
    let sum = 0;
    for (let i = 1; i <= number_or_array[0]; i++) {
      sum += i;
    }

    return sum;
  } else {
    let sum = number_or_array.reduce((acc, cuurentNumber) => {
      return acc + cuurentNumber;
    }, 0);

    return sum;
  }
}

function computeProduct(number_or_array) {
  if (number_or_array.length === 1) {
    let product = 1;
    for (let i = 1; i <= number_or_array[0]; i++) {
      product *= i;
    }

    return product;
  } else {
    let product = number_or_array.reduce((acc, cuurentNumber) => {
      return acc * cuurentNumber;
    }, 1);

    return product;
  }
}

let number = [];
let add_more = "y";

do {
  number.push(
    parseInt(rlSync.question("please enter a number greater than zero: "))
  );
  add_more = rlSync.question("do you want to add more numbers?: ");
} while (add_more === "y");

if (number.length === 1 && number[0] < 1) {
  do {
    number[0] = parseInt(
      rlSync.question("you must enter a number greater than zero: ")
    );
  } while (number.length === 1 && number[0] < 1);
}

const operation = rlSync.question("enter 's' for sum and 'p' for product: ");

if (operation === "s") {
  let sum = computSum(number);
  if (number.length === 1) {
    console.log(`the sum of integers between 1 and ${number} is ${sum}`);
  } else {
    console.log(`the sum of the numbers you entered is ${sum}`);
  }
} else if (operation === "p") {
  let product = computeProduct(number);

  if (number.length === 1) {
    console.log(
      `the product of integers between 1 and ${number} is ${product}`
    );
  } else {
    console.log(`the product of the numbers you enterd is ${product}`);
  }
}

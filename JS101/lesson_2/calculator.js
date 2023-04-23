const readline = require("readline-sync");

let performAnotherCalculation = "y";

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

function performOperation(number1, number2, operation) {
  let output;
  switch (operation) {
    case "1":
      output = Number(number1) + Number(number2);
      break;
    case "2":
      output = Number(number1) - Number(number2);
      break;
    case "3":
      output = Number(number1) * Number(number2);
      break;
    case "4":
      output = Number(number1) / Number(number2);
      break;
  }

  return output;
}

function getNumbers() {
  prompt("What is the first number");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number1 = readline.question();
  }

  prompt("What is the second number");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number2 = readline.question();
  }

  return [number1, number2];
}

function getOperation() {
  prompt(
    "What operation would you like to perform?\n1) Add 2) substract 3) Multiply 4) Divide"
  );
  let operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt("Must choose 1, 2, 3 or 4");
    operation = readline.question();
  }

  return operation;
}

function calculate() {
  let [number1, number2] = getNumbers();

  let operation = getOperation();

  let output = performOperation(number1, number2, operation);

  prompt(`the result is ${output}`);
}

prompt("Welcome to the calculator");

do {
  calculate();
  prompt(
    'enter "y" if you want to perform another calculation, enter "n" if you want to quit '
  );

  performAnotherCalculation = readline.question();
} while (performAnotherCalculation[0].toLowerCase() === "y");

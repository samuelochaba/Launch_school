const readline = require("readline-sync");
const messages = require("./calculator_messages.json");

const LANGUAGE = readline.question(messages["en"]["language"]);

function getMessages(message, lang = LANGUAGE) {
  return `=> ${messages[lang][message]}`;
}

let performAnotherCalculation = "y";

function prompt(message) {
  console.log(`${message}`);
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
  prompt(getMessages("firstNumber"));
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(getMessages("invalidNumber"));
    number1 = readline.question();
  }

  prompt(getMessages("secondNumber"));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(getMessages("invalidNumber"));
    number2 = readline.question();
  }

  return [number1, number2];
}

function getOperation() {
  prompt(getMessages("operation"));
  let operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(getMessages("chooseOperation"));
    operation = readline.question();
  }

  return operation;
}

function calculate() {
  let [number1, number2] = getNumbers();

  let operation = getOperation();

  let output = performOperation(number1, number2, operation);

  prompt(`${getMessages("result")} ${output}`);
}

prompt(getMessages("welcome"));

do {
  calculate();
  prompt(getMessages("reCalculate"));

  performAnotherCalculation = readline.question();
} while (performAnotherCalculation[0].toLowerCase() === "y");

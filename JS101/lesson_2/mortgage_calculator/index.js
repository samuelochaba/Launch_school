const readLine = require("readline-sync");
const messages = require("./mortgage_calculator_messages.json");

const LANGUAGE = "en";

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalid(number) {
  return (
    number.trim() === "" || Number(number) < 0 || Number.isNaN(Number(number))
  );
}

let loanAmount;
let annualPercentageRate;
let loanDuration;
let loanDurationInMonths;
let monthlyInterestRate;
let monthlypayment;

prompt("Welcome to Mortgage Calculator!");

while (true) {
  prompt("---------------------------------");

  do {
    prompt(messages[LANGUAGE]["loanAmount"]);
    loanAmount = readLine.question();
  } while (isInvalid(loanAmount));

  do {
    prompt(messages[LANGUAGE]["APR"]);
    annualPercentageRate = readLine.question();
  } while (isInvalid(annualPercentageRate));

  do {
    prompt(messages[LANGUAGE]["loanDuration"]);
    loanDuration = readLine.question();
  } while (isInvalid(loanDuration));

  annualPercentageRate = +annualPercentageRate / 100;

  monthlyInterestRate = annualPercentageRate / 12;
  loanDurationInMonths = +loanDuration * 12;

  monthlypayment =
    +loanAmount *
    (monthlyInterestRate /
      (1 - Math.pow(1 + monthlyInterestRate, -loanDurationInMonths)));

  prompt(
    messages[LANGUAGE]["monthlyPayment"] + "$" + monthlypayment.toFixed(2) + " "
  );

  let calculateAgain;

  do {
    prompt(messages[LANGUAGE]["calculateAgain"]);
    calculateAgain = readLine.question();
  } while (calculateAgain[0] !== "n" && calculateAgain[0] !== "y");

  if (calculateAgain.trim()[0].toLowerCase() !== "y") {
    break;
  }
}

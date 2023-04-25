const readLine = require("readline-sync");
const choices = require("./choices.json");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const SHORTENED_VALID_CHOICES = ["r", "p", "l", "sc", "sp"];

function prompt(message) {
  console.log(`=> ${message}`);
}

function processChoice(choice) {
  switch (choice) {
    case "r":
      return "rock";
    case "p":
      return "paper";
    case "l":
      return "lizard";
    case "sc":
      return "scissors";
    case "sp":
      return "spock";
    default:
      return choice;
  }
}

function processWinner(choice, computerChoice) {
  if (choice === computerChoice) {
    return "tie";
  } else if (choices[choice].includes(computerChoice)) {
    return "user";
  } else {
    return "computer";
  }
}

function updateWinnerCount(choice, computerChoice, userCount, computerCount) {
  let winner = processWinner(choice, computerChoice);

  if (winner === "tie") {
    return [userCount, computerCount];
  } else if (winner === "user") {
    return [userCount + 1, computerCount];
  } else {
    return [userCount, computerCount + 1];
  }
}

let userCount = 0;
let computerCount = 0;

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = readLine.question();

  while (!VALID_CHOICES.concat(SHORTENED_VALID_CHOICES).includes(choice)) {
    prompt("That is not a valid choice");
    choice = readLine.question();
  }

  choice = processChoice(choice);

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You choose ${choice}, Computer chooce ${computerChoice} \n`);

  [userCount, computerCount] = updateWinnerCount(
    choice,
    computerChoice,
    userCount,
    computerCount
  );

  prompt(`You: ${userCount} "----" ${computerCount}: computer\n`);

  if (userCount > 2) {
    prompt(`You are the grand winner`);
    break;
  } else if (computerCount > 2) {
    prompt(`computer is the grand winner`);
    break;
  }
}

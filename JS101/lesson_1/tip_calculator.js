const rlSync = require("readline-sync");

const bill_amount = parseInt(rlSync.question("enter bill amount: "), 10);
const tip_rate = parseInt(rlSync.question("enter tip rate: "), 10);

const tip = (tip_rate / 100) * bill_amount;
const total = tip + bill_amount;

console.log(`the tip amount is $${tip.toFixed(2)}`);
console.log(`the total is $${total.toFixed(2)}`);

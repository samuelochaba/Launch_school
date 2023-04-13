const rlSync = require("readline-sync");

const length = rlSync.question("please enter the length of the room: ");
const width = rlSync.question("please enter the width of the room: ");
const inputType = rlSync.question(
  "please enter the input type (sq_meter or sq_feet): "
);

if (length < 1 || width < 1) {
  console.log(0);
}

const area_in_square_meters = length * width;
let area_in_square_feet = area_in_square_meters * 10.7639;
area_in_square_feet = area_in_square_feet.toFixed(2);

if (inputType === "sq_meter") {
  console.log(
    `the area of the room is ${area_in_square_meters} sqaure meters `
  );
} else if (inputType === "sq_feet") {
  console.log(`the area of the room is ${area_in_square_feet} square feet)`);
} else {
  console.log(
    `the area of the room is ${area_in_square_meters} sqaure meters (${area_in_square_feet}) square feet)`
  );
}

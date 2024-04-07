#! /usr/bin/env node

import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumber" },
  {message: "Enter your  second number", type: "number", name: "secondNumber"},
  {
     message: "Select one of the opreators to perform opreation",
     type: "list",
     name: "opreator",
     choices: ["Addition", "Subtraction", "Multiplication", "Division"],
   },
]);
console.log("asnwwer")

if (asnwer.opreator === "Addition") {
  console.log(asnwer.firstNumber + asnwer.secondNumber);
} else if (asnwer.opreator === "Subtraction") {
  console.log(asnwer.firstNumber - asnwer.secondNumber);
} else if (asnwer.opreator === "Multiplication") {
  console.log(asnwer.firstNumber * asnwer.secondNumber);
} else if (asnwer.opreator === "Division") {
  console.log(asnwer.firstNumber / asnwer.secondNumber);
} else {
  console.log("please enter a valid number");
}
 console.log("THE END");
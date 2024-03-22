#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the oprator to perform action",
        type: "list",
        name: "oprator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditinal statement
if (answer.oprator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.oprator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.oprator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.oprator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please selet valid oprator");
}

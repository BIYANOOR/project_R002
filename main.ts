#!/bin/env node;
import inquirer from "inquirer";
console.log("Wellcome to Sobia Furqan's ATM");

let myBalance = 100000;
let myPin = 1234;

async function atmOperations() {
    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            message: "Enter your four digit pin code",
            type: "number"
        }
    ]);

    if (pinAnswer.pin === myPin) {
        console.log("Correct pin code");

        let operationAns = await inquirer.prompt([{
            name: "operation",
            message: "Please select an option",
            type: "list",
            choices: ["Withdraw", "Check balance", "Fast cash"]
        }]);

        if (operationAns.operation === "Withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter your amount",
                    type: "number"
                }
            ]);

            if (amountAns.amount <= myBalance) {
                myBalance -= amountAns.amount;
                console.log("Your remaining balance is: " + myBalance);
            } else {
                console.log("Sorry, you have insufficient funds.");
            }
        } else if (operationAns.operation === "Check balance") {
            console.log("Your balance is: " + myBalance);
        } else if (operationAns.operation === "Fast cash") {
            let fastCashAns = await inquirer.prompt([{
                name: "amount",
                message: "Please select a fast cash amount",
                type: "list",
                choices: ["500", "1000", "5000", "10000", "50000"]
            }]);

            if (fastCashAns.amount <= myBalance) {
                myBalance -= fastCashAns.amount;
                console.log("Your remaining balance is: " + myBalance);
            } else {
                console.log("Insufficient funds.");
            }
        }

    } else {
        console.log("Incorrect pin code");
    }
}

atmOperations();

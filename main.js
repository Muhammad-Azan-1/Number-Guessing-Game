// #!/usr/bin/env node
//number guessing game
import inquirer from "inquirer";
while (true) {
    let randomNum = Math.floor(Math.random() * 6 + 1);
    let answer = await inquirer.prompt([
        { message: "Please guess any number between 1-6 or enter 0 to exit:", type: "number", name: "number" }
    ]);
    if (answer.number == 0) {
        console.log("Exiting the program");
        break;
    }
    else if (answer.number == randomNum) {
        console.log("[: congratulations you guess a correct number");
    }
    else {
        console.log("]; Please try again you guess a wrong number");
    }
}

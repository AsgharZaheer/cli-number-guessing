#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will genrate a random number
// 2) user input for guessing number 
// 3) compare user input with computer genrated number and show result

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: "
    }
]);
if (answers.userGuessedNumber === randomNumber){
    console.log("Conguralations!!! you guess a right number");
    
}else{
    console.log(" Try Again !! You guess a wrong number");

}



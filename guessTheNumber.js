function guessTheNumber(){

const readline = require('readline').createInterface({input: process.stdin, output: process.stdout});

let computerGuess = Math.floor(Math.random() * 100);
let playerGuess;
let recursiveAsyncReadLine = function () {
    readline.question ('Guess the number (0-100): ', number => {
    guess = Number(number);
    if(playerGuess >= 0 && playerGuess <= 100){
        if(playerGuess === computerGuess ){
            console.log("Well done! You guessed the number!");
        }else if(playerGuess < computerGuess){
            console.log("Your guess is low!");
        }else if(playerGuess > computerGuess){
            console.log("Your guess is higher!");
        }else{
            console.log("Invalid Number! Try again...");
            recursiveAsyncReadLine();
        }
    }  
    }); 
}
recursiveAsyncReadLine();
}
guessTheNumber()


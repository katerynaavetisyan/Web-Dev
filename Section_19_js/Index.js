let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;


let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (guess !== targetNum) {
    attempts++;
    if (guess > targetNum) {
        guess = parseInt(prompt("Too high! Enter new guess!"));
    } else {
        guess = parseInt(prompt("Too low! Enter a new guess:"));
    }
}
console.log(`You got it! It took you ${attempts} guesses`)
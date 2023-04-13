console.log("Hello js world!");
let total = 1 + 3;
console.log("Goodbye!")
if (1 + 1 === 2) {
    console.log("Ukraine won!")
}
let random = Math.random();
if (random < 0.5) {
    console.log("Congratulations!")
}
const age = 9;
if (age < 5) {
    console.log("You are a baby")
} else if (age < 10) {
    console.log("You are a child")
} else if (age < 65) {
    console.log("You are an adult")
} else {
    console.log("You are a senior")
}
const password = prompt("Enter password");
if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("valid password")
} else {
    console.log("incorrect password")
}
const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']; //DON'T TOUCH THIS LINE!
leaderboard[1] = 'Luna'
leaderboard[3] = 'Draco'
const planets = ['The Moon', 'Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!
planets.shift('The Moon')
planets.push('Saturn')
planets.unshift('Mercury')

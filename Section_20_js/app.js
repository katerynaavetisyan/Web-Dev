//function greet(firstName, lastName) {
//   console.log(`firstName is: ${firstName} ${lastName}`)
//}

//create a function that is called "sum" and accepts two arguments
//both agruments are numbers
//function needs to return sum of those arguments



function raceResults(first, second, ...everyoneElse) {
    console.log(`First goes to: ${first}`)
    console.log(`Second goes to: ${second}`)
    console.log(`All others:${everyoneElse}`)
}

const dataForm {
    email:'katek4@gmail.com',
    password:'120jflsn'
    username: 'katasofe1'
}

const newUser = { ...dataForm, id: 24959530853, isAdmin: false }
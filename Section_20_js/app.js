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

function isSnakeEyes(n1, n2) {
    if (n1 === 1; n2 === 1 ) {
        console.log("Snake Eyes!");
    }else {
        console.log("Not Snake Eyes!");
    }
}
function multiply(x, y) {
    return x * y;

}
function isShortsWeather(temperature) {
    return temperature >= 75;
}


let array = [3, 5, 7];

function lastElement(array) {
    return array.length ? array[array.length - 1] : null;
}
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalize('eggplant'));
console.log(capitalize('pamplemousse'));
console.log(capitalize('squid'));

function sumArray(arr) {
    var total = 0;
    arr.forEach(function (element) {
        // 'element' in the parenthesis can be any name
        total += element;
    });
    return total;
}

const weekDAY = new Array(7);
weekDAY[1] = 'Sunday';
weekDAY[2] = 'Monday';
weekDAY[3] = 'Tuesday';
weekDAY[4] = 'Wednesday';
weekDAY[5] = 'Thursday';
weekDAY[6] = 'Friday';
weekDAY[7] = 'Saturday';

function returnDay(x) {
} if (x <= 1 || x >= 7) {
    return null;
}
else {
    return weekDAY[x];
}
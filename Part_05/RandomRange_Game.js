   // user decide intger random number range

let startNum = Number(prompt("Enter Start number : "));
let endNum = Number(prompt("Enter Ending number : "));

console.log(Math.floor(Math.random() * (endNum -startNum +1 ) ) +  startNum );
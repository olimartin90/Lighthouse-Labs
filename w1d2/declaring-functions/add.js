// var longListOfNumbers = [];
// for (i = 0; i < 999; i++) {
//   longListOfNumbers.push(1);
// }

var startTime = Date.now();
var argvNumbers = process.argv.slice(2);
var sum = 0;

function checkWholeNumber(number) {
 return (!isNaN(number) && number % 1 === 0);
}

function sumNumbers(arrayOfNumbers) {
 for (var i = 0; i < arrayOfNumbers.length; i++) {
   var number = Number(arrayOfNumbers[i]);
   if (isWholeNumber(number)) {
     sum += number;
   }
 }
 return sum;
}

// for (let number of numbers) {
//   var realNumber = Number(number);
//   if (!isNaN(realNumber) && realNumber % 1 === 0) {
//     sum += realNumber;
//   }
// }

console.log('The result is: ' + addNumbers(numbers) + '.');
console.log('Time the program took: ', Date.now() - startTime);
var dice = process.argv[2];

function numbersRolled(dice) {
 var rolls = '';
 var max = 6;
 for (var i = 0; i < dice; i++) {
   var actualNumber = Math.floor(Math.random() * Math.floor(max)) + 1;
   rolls += actualNumber + ', ';
 }
 return rolls;
}

var done = numbersRolled(dice)

console.log('Rolled ', dice, ' dice: ', done);

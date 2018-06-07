var words = ["ground", "control", "to", "major", "tom"];

function map(arr, fct) {
  var result = [];
for (var i = 0; i < arr.length; i++) {
  result.push(fct(arr[i]));
}
console.log(result);
return result;
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

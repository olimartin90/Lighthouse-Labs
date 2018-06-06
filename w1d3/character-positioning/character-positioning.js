function positionLetters(text) {
  var textJoin = text.split(' ').join('')
  var letterPlacing = {};

  for (var i = 0; i < textJoin.length; i++) {
    var letter = textJoin[i];
    if (letter in letterPlacing) {
      letterPlacing[letter].push(i);
    } else {
        letterPlacing[letter] = [i];
    }
  }
return letterPlacing
}

var positionLetters = positionLetters("lighthouse in the house");
console.log(positionLetters);
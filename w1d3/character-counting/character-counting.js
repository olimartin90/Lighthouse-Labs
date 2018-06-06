function countLetters(text) {
  var characterCounting = {};
  var textJoin = text.split(' ').join('')

  for (var i = 0; i < textJoin.length; i++) {
    var key = textJoin.charAt(i);

    if (key in characterCounting) {
      characterCounting[key]++;
    } else {
        characterCounting[key] = 1;
    }

  }
return characterCounting;
}

var countLetters = countLetters("lighthouse in the house");
console.log(countLetters);
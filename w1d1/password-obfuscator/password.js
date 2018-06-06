var args = process.argv[2];

function obfuscate(args) {
var result = '';

  for (var i = 0; i < args.length; i++) {
    if (args[i] === 'a') {
       result += '4';
    } else if (args[i] === 'e') {
       result += '3';
    } else if (args[i] === 'o') {
       result += '0';
    } else if (args[i] === 'l') {
       result += '1';
    } else {
    result += args[i];
    }
  }
  return result;
}

var newpassword = obfuscate(args);

console.log(newpassword);
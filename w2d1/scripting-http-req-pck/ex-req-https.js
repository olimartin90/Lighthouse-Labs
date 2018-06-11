// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

console.log('Downloading image...')

request.get('https://sytantris.github.io/http-examples/future.jpg')

.on('error', function(err) {
    throw err;
})

.on('response', function(response) {
    console.log('Response Status Code: ', response.statusCode, ' Response Status Message: ', response.statusMessage, response.headers['content-type']);
})

.on('end', function() {
    console.log('Download complete.')
})

.pipe(fs.createWriteStream('./future.jpg'));

// Notes:
// 1. `request.get` is equivalent to `request()`
// 2. `request.on('error', callback)` handles any error
// 3. `request.on('response, callback)` handles the response
// 4. What is happening here?
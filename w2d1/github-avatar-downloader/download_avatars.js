var request = require('request');
var token = require('./secrets');
var fs = require('fs');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'token'
    }
  };

  request(options, function(err, res, body) {
    cb(err, body);
  });
}

function downloadImageByURL(url, filePath) {

// console.log('Downloading image...')

request.get(url)

.on('error', function(err) {
    throw err;
})

.on('response', function(response) {
    // console.log('Response Status Code: ', response.statusCode, ' Response Status Message: ', response.statusMessage, response.headers['content-type'])
})

.on('end', function() {
    console.log('Download complete.')
})

.pipe(fs.createWriteStream(filePath));

}

getRepoContributors("jquery", "jquery", function(err, jsonString) {
  var jsObject = JSON.parse(jsonString);
  for (var user of jsObject) {
    downloadImageByURL(user.avatar_url, "./avatars/" + user.login + ".jpg")
  }
});

var request = require('request');
var token = require('./secrets');
var fs = require('fs');

var repoOwner = process.argv[2];
var repoName = process.argv[3];


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

getRepoContributors(repoOwner, repoName, function(err, jsonString) {
  if (!repoOwner || !repoName) {
    console.log("Error!")
  } else {
  var jsObject = JSON.parse(jsonString);
  for (var user of jsObject) {
    downloadImageByURL(user.avatar_url, "./avatars/" + user.login + ".jpg")
  }
  }
});

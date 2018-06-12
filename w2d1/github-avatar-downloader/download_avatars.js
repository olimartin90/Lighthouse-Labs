var request = require('request');
var token = require('./secrets');

// console.log('Welcome to the GitHub Avatar Downloader!');

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

getRepoContributors("jquery", "jquery", function(err, jsonString) {
  var jsObject = JSON.parse(jsonString);
  for (var user of jsObject) {
    console.log(user.avatar_url);
  }
});


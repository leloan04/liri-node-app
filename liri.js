var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var keys = require('./keys.js');
var fs = require('fs');

var command = process.argv[2];

switch (command) {
    case 'my-tweets':
        myTweets();
        break;
    case 'spotify-this-song':
        mySpotify();
        break;
    case 'movie-this':
        myMovies();
        break;
    case 'do-what-it-says':
        doWhatItSays();
        break;
    default:
        console.log("Invalid Command");
}

var myTweets = function() {
    var client = new twitter(keys.twitter);
    var criterias = {screen_name: 'leloan04', count: 20};

    client.get('statuses/user_timeline', criterias, function(error, tweets, response) {
        if (error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log
            }
        }
    })
}
var Twitter = require('twitter');
var Spotify = require('spotify');
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
        myMovie();
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
                appendData(tweets[i].created_at);
                appendData(tweets[i].text);
            }
        }
    })
}

var mySpotify = function(soundtrack) {
    var spotify = new Spotify(keys.spotify);

        if(soundtrack == undefined) {
            soundtrack = process.argv[3];
        }
    
    Spotify.search({type: 'track', query: soundtrack}, function(err, data) {
        appendData('Artist:' + data.tracks.items[0].artists[0].name);
        appendData('Song' + data.tracks.items[0].name);
        appendData('Album:' + data.tracks.items[0].album.name);
        appendData('Preview URL:' + data.tracks.items[0].preview_url);
    })
}

var myMovie = function() {
    
}

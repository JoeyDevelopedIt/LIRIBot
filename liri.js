require("dotenv").config();

var Spotify = require('node-spotify-api');
var axios = require("axios");
var moment = require("moment");

var keys = require("./keys");
console.log(keys.spotify)

var spotify = new Spotify(keys.spotify)


var userChoice = process.argv[2];

function songs(choice) {
    
    if (!choice){
        choice = 'The Sign';
    }
    spotify.search({ type: 'track', query: choice }, function(err, data) {
        if (err){
            console.log('Error occurred: ' + err);
            return;
        }

        var song = data.tracks.items;
        console.log("Artist: " + song[0].artists[0].name);
        console.log("Song : " + song[0].name);
        console.log("Preview: " + song[0].preview_url);
        console.log("Album: " + song[0].album.name);
});
}



switch (userChoice) {
    case "concert-this":
    console.log("concert")
    break;
    case "spotify-this-song":
    console.log("spotify")
    break;
    case "movie-this":
    console.log("movie")
    break;        
    case "do-what-it-says":
    console.log("whatever")
    break;
    default:
    console.log("enter something")
    break;
}
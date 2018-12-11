require("dotenv").config();

var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");

var keys = require("./keys");
console.log(keys.spotify)

var spotify = new Spotify(keys.spotify)


var userChoice = process.argv[2];
var userInput = process.argv[3];

function songs(choice) {
    
    if (!choice){
        choice = 'The Sign';
    }
    spotify.search({ type: 'track', query: choice }, function(err, data) {
        if (err){
            console.log('Error occurred: ' + err);
            return;
        }
// console.log(data);

        var song = data.tracks.items;
        console.log("Artist: " + song[0].artists[0].name);
        console.log("Song : " + song[0].name);
        console.log("Preview: " + song[0].preview_url);
        console.log("Album: " + song[0].album.name);
});
}




// request({
//     url: 'https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp',
//     data: {
//        format: 'json'
//     },
//     error: function() {
//        $('#info').html('<p>An error has occurred</p>');
//     },
//     dataType: 'jsonp',
//     success: function concerts(){
//        var title = $('<h1>').text(artist_id[0].VenueData);
//        var description = $('<p>').text(artist_id[0].VenueData);
//        $('#info')
//           .append(title)
//           .append(description);
//     },
//     type: 'GET'
//  });

//  console.log(data);


// function concerts (choice) {
    
//     if (!choice){
//         choice = '';
//     }
//     concert.search({ type: 'concert', query: choice }, function(err, data) {
//         if (err){
//             console.log('Error occurred: ' + err);
//             return;
//         }
// console.log(data);

//         // var song = data.tracks.items;
//         // console.log("Venue: " + name[0]);
//         // console.log("Location : " + City[0]State[0].name);
//         // console.log("Date: " + song[0].preview_url);
// });
// }





switch (userChoice) {
    case "concert-this":
    console.log("concerts")
    concerts(userInput);
    break;
    case "spotify-this-song":
    console.log("spotify")

    songs(userInput);
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
var URI = prompt("Paste your public Spotify playlist's URI here:");
var splitURI = URI.split(":");
var userID = splitURI[2];
var playlistID = splitURI[4];

console.log(userID);
console.log(playlistID)

var playerURI = "https://open.spotify.com/embed/user/" + userID + "/playlist/" + playlistID

var ifrm = document.createElement('iframe');

ifrm.setAttribute('id', 'spotifyPlayer');

document.body.appendChild(ifrm);

ifrm.setAttribute('src', playerURI);
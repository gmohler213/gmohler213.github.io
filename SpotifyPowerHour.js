var URI = prompt("Paste your public Spotify playlist's URI here:");
var splitURI = URI.split(":");
var userID = splitURI[1];
var playlistID = splitURI[2];
console.log(userID);
console.log(playlistID)
// var result;
// const Http = new XMLHttpRequest();
// const url = 'https://www.random.org/integers/?num=1&min=1&max=' + num + '&col=1&base=10&format=plain&rnd=new';
// Http.open("GET", url);
// Http.send();
// <iframe src="https://open.spotify.com/embed/user/1267770186/playlist/4hjLI2C31D3ByLeX9kq2PR" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
// }
var URI = prompt("Paste your puiblic Spotify playlist's URI here:");
var result;
const Http = new XMLHttpRequest();
const url = 'https://www.random.org/integers/?num=1&min=1&max=' + num + '&col=1&base=10&format=plain&rnd=new';
Http.open("GET", url);
Http.send();
window.alert(answer);
Http.onreadystatechange=function(){
	if(this.readyState==4 && this.status==200){
		// document.getElementById("answer").innerHTML = Http.responseText;
		window.alert(Http.responseText);
	}
}
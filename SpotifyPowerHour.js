var beerCount_HTML = document.getElementById("beerCount");
var instructions_HTML = document.getElementById("instructions");
var startButton_HTML = document.getElementById("startButton");
var startClicked = false;
var pauseClicked = false;
var minute = false;
var minutePassed = false;
var shots = 0;
var beers = 0;
var date = new Date();
var time = Math.round(date.getTime() / 1000*5);
var beersString = "You've taken " + shots + " shots and consumed " + beers + " beers."

var audio = new Audio('https://gmohler213.github.io/AirHorn.mp3');
var specialAudio = new Audio('https://gmohler213.github.io/AirHorn.mp3');

document.getElementById("startButton").addEventListener("click", function(){
	if (!startClicked){
		startClicked = true;
		//update beerCount:
		beersString = "You've taken " + shots + " shots and consumed " + beers + " beers."
		beerCount_HTML.innerHTML = beersString;
		//count down from 5:
		//game();
		console.log("game starting...");
		game();
	}
	else{
		//reset functionality?
	}
});

function shot(){
	console.log("shot!");
	if (shots != 60){
		audio.play();
	}
	else{
		specialAudio.play();
	}

	//left click:

	//increment drinks:
	shots = shots + 1;
	beers = Math.round(shots * 1.5 / 12 * 100) / 100;
	console.log(beers);
	//update text:
	beersString = "You've taken " + shots + " shots and consumed " + beers + " beers."
	beerCount_HTML.innerHTML = beersString;	
}

function game(){
	setTimeout(shot(), 10000);
}

// function game(){
// 	//Wait 60 seconds and then call shot():
// 	while(shots < 10){
// 		minutePassed = (Math.round(date.getTime() / 1000*5) != time;
// 		if(minutePassed){
// 			time = Math.round(date.getTime() / 1000*5;
// 			shot();
// 		}
// 	}

// }
// function draw(){
// 	//every 60 seconds, call shot():
	
// 	setTimeout(function() {
// 		shot();
// 	}, 10000);
// }
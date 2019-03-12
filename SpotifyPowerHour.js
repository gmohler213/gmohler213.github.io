var beerCount_HTML = document.getElementById("beerCount");
var instructions_HTML = document.getElementById("instructions");
var startButton_HTML = document.getElementById("startButton");
var startClicked = false;
var pauseClicked = false;
var shots = 0;
var beers = 0;

var audio = new Audio('https://gmohler213.github.io/AirHorn.mp3');
var specialAudio = new Audio('https://gmohler213.github.io/AirHorn.mp3');

//When button is pressed, count down from 5 and then run game()
function pregame(){
	document.getElementById("startButton").addEventListener("click", function(){
		if (!clicked){
			startClicked = true;
			//update beerCount:
			beerCount_HTML = "You've taken " + shots + " shots and consumed " + beers + " beers."
			//count down from 5:
			game();
		}
		else{
			//reset functionality?
		}
	});

	game();
}

function shot(){
	if (shots != 60){
		//play sound:
		audio.play();
		//left click:

		//increment drinks:
		shots = shots + 1;
		beers = Math.round(shots * 1.5 / 12 * 100) / 100;
		//update text:
		beerCount_HTML = "You've taken " + shots + " shots and consumed " + beers + " beers."
	}
	else{
		//play sound:
		specialAudio.play();
		//left click:

		//increment drinks:
		shots = shots + 1;
		beers = Math.round(shots * 1.5 / 12 * 100) / 100;
		//update text:
		beerCount_HTML = "You've taken " + shots + " shots and consumed " + beers + " beers."
	}
	
}

function draw(){
	//every 60 seconds, call shot():
	setTimeout(shot(), 500);
}
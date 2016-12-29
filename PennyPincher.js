var pennies = 0;
var cr = 300;
var cx = 400;
var cy = 300;
var rad = cr/2;
var d = rad;
var disp;
var clickLevel = 1;
var clickUnlockAvailable = false;
var clickLevelBonus = 1;
var pennyRakes = 0;
var pennyRakeBonus = .2;
var rakeUnlockAvailable = false;
var rakeUpgradeCost = 10;
var autoPennies = 0;
var sec;
var prevSec;
var timeCounter = 0;


function setup() {
	createCanvas(cx*2, cy*2);
	sec = second();
	prevSec = second();
	disp = new PennyDisplay();
}

function draw() {
	background(51);
	sec = second();
	if(sec != prevSec){
		//wait until a penny has been reached by rake, then add, then reset tracker
		prevSec = sec;
		updateAutoPennies();
		pennies += autoPennies;
		timeCounter++;
		
	}
	disp.update();
	disp.show();
}

function updateAutoPennies(){
	autoPennies = pennyRakes * pennyRakeBonus;
}

function mousePressed(){
	if ( withinPenny() ){
  		pennies = pennies + (1*clickLevelBonus);
  	}
  	if (clickUnlockAvailable){
  		if((mouseX < 100) && (mouseY < 70)){
  			clickUnlockAvailable = false;
  			pennies -= clickUpgradeCost;
  			clickLevel++;
  		}
  	}
  	if(rakeUnlockAvailable) {
  		if((mouseX > 100) && (mouseX < 300) && (mouseY < 70)){
  			rakeUnlockAvailable = false;
  			pennies -= rakeUpgradeCost;
  			pennyRakes++;
  			updateAutoPennies();
  		}
  	}
}

function withinPenny(){
	d = dist(mouseX, mouseY, cx, cy);
	if(d < rad){
		return true;
	}
	else{
		return false;
	}
}

function PennyDisplay(){
	this.s = "Penny Count: " + pennies.toFixed(0);
	this.perSecond = "Pennies Per Second: " + autoPennies;
	this.penny = clickLevelBonus + "¢";


	this.basicDisplay = function(){
		this.penny = clickLevelBonus + "¢";
		textSize(14);
		fill(255);
		text(this.s, cx - 50, cy+rad+50, 150, 80); //Penny count
		text(this.perSecond, cx - 70, cy+rad+80, 150, 80)

		fill(191, 105, 53); //copper
		ellipse(cx, cy, cr, cr);
		textSize(64);
		fill(113, 41, 29); //dark copper
		text(this.penny, cx - 40, cy - 50, 200, 200);
	}

	this.noClickUpgradeDisplay = function() {
		textSize(16);
		fill(51);
		rect(0, 0, 100, 70);
		fill(100);
		text("Upgrade Pennies Per Click ( lv. " + clickLevel + " )", 5, 5, 100, 70);
	}
	this.clickUpgradeDisplay = function() {
		clickUnlockAvailable = true;
		textSize(16);
		fill(50, 205, 50);
		rect(0, 0, 100, 70);
		fill(255);
		text("Upgrade Pennies Per Click ( lv. " + clickLevel + " )", 5, 5, 100, 70);
	}
	this.noRakeUpgradeDispaly = function() {
		textSize(16);
		fill(51);
		rect(100, 0, 145, 70);
		fill(100);
		text("Buy a Penny Rake ( +.2 pennies/sec ) ( " + pennyRakes + " )", 105, 5, 140, 70);
	}
	this.rakeUpgradeDisplay = function() {
		rakeUnlockAvailable = true;
		textSize(16);
		fill(50, 205, 50);
		rect(100, 0, 145, 70);
		fill(255);
		text("Buy a Penny Rake ( +.2 pennies/sec ) ( " + pennyRakes + " )", 105, 5, 140, 70);
	}
	
	this.update = function(){
		this.s = "Penny Count: " + pennies.toFixed(0);
	}

	this.show = function(){

		//Make this scalable to any level and upgrade cost!!
		//maybe next upgrade cost = upgrade cost * 1.1

		if(pennies < 10)
			this.noRakeUpgradeDispaly();
		else
			this.rakeUpgradeDisplay();

		if (clickLevel == 1){
			clickUpgradeCost = 20;
			clickLevelBonus = 1;
			this.basicDisplay();

			if (pennies < clickUpgradeCost){
				this.noClickUpgradeDisplay();
			}
			else{
				this.clickUpgradeDisplay();
			}
		}
		else if (clickLevel == 2){
			clickUpgradeCost = 100;
			clickLevelBonus = 2;
			this.basicDisplay();

			if (pennies < clickUpgradeCost){
				this.noClickUpgradeDisplay();
			}
			else{
				this.clickUpgradeDisplay();
			}

		}
		else if (clickLevel == 3){
			clickUpgradeCost = 1000;
			clickLevelBonus = 4;
			this.basicDisplay();

			if (pennies < clickUpgradeCost){
				this.noClickUpgradeDisplay();
			}
			else{
				this.clickUpgradeDisplay();
			}

		}


	}

}



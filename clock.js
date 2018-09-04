function setup(){
  var canvas = createCanvas(160, 160);
  canvas.parent('clock');
  angleMode(DEGREES);
  fill(0);
  ellipse(width / 2, height / 2, 5, 5);

}

function draw(){

  clear();
  fill(0);
  strokeWeight(2);
  translate(0, 0);
  ellipse(width / 2, height / 2, 10, 10);

  
  
  let h = nfs(hour() % 12, 2, 0);
  if(h == 0){
    h = 12;
  }
  let m = nfs(minute(), 2, 0);
  let s = nfs(second(), 2, 0);

  let total = (hour() * 60 * 60) + (minute() * 60) + second();

  translate(width/2, height/2);
  rotate(-90);


  hAngle = map(h, 0, 12, 0, 360);
  mAngle = map(m, 0, 60, 0, 360);
  sAngle = map(s, 0, 60, 0, 360);
  noFill();
  strokeWeight(5);
  stroke(114, 147, 203);
  arc(0, 0, 150, 150, 0, hAngle);

  stroke(255, 151, 76);
  arc(0, 0, 140, 140, 0, mAngle);

  stroke(132, 186, 91);
  arc(0, 0, 130, 130, 0, sAngle);

  stroke(255);
  textSize(20);
  fill(0);

}


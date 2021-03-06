function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);

}

function draw() {
  background(255,255,255);
  

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  arc(50,50,80,80,0,PI + QUARTER_PI);
  line(0,0,100,0);
  pop();
  drawSprites();
}
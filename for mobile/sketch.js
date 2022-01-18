var KEY_UP = 38;
var KEY_DOWN = 40;
var jElement = ("#address-search");
jElement.keyup(function(e) {
  if (!e.keyCode === KEY_UP && !e.keyCode === KEY_DOWN) {
    horseyInstance.hide();
    horseyInstance.show();
  }
});

function setup() {
  rectMode(CENTER)
  createCanvas(1080, 1920);
  //background(0);
}

function draw() {
  background(0);
  rect(random(width),random(height),random(width),random(height))
  fill(0)

  rect(random(width),random(height),random(width),random(height))
  fill(255,0,0)
  
   rect(random(width),random(height),random(width),random(height))
  fill(255,0,0)

   rect(random(width),random(height),random(width),random(height))
  fill(255,0,0)
  rect(random(width),random(height),random(width),random(height))
  fill(255,0,0)
  rect(random(width),random(height),random(width),random(height))
  fill(0)
   rect(random(width),random(height),random(width),random(height))
  fill(255,0,0)
  rect(random(width),random(height),random(width),random(height))
  fill(0)
   rect(random(width),random(height),random(width),random(height))
  fill(255,0,0)
rect(random(width),random(height),random(width),random(height))
  fill(255,0,0)
  rect(random(width),random(height),random(width),random(height))
  fill(255,0,0)
  rect(random(width),random(height),random(width),random(height))
  fill(0)
   rect(random(width),random(height),random(width),random(height))
  fill(255,0,0)
  rect(random(width),random(height),random(width),random(height))
  fill(0)
   rect(random(width),random(height),random(width),random(height))
  fill(255,0,0)
rect(random(width),random(height),random(width),random(height))
  fill(255,0,0)
  
  
  noStroke()
  
  
  
}
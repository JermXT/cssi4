// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global createCanvas, width, height, colorMode, HSB, mouseX,max, mouseY,sqrt, pmouseX, pmouseY, mouseIsPressed, random, background, fill, color, rect, ellipse, line, stroke, noStroke, noFill, strokeWeight, abs */

let brushHue

function setup() {
  // Canvas & color settings
  createCanvas(1400, 600);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  strokeWeight(6);
  background(95);
}

function draw() {
  chooseColors();
  if (mouseIsPressed) {
    //ellipse(mouseX, mouseY, abs(pmouseX - mouseX)/50*15, abs(pmouseY - mouseY)/50*15);
    strokeWeight(max(2,((1-(sqrt((pmouseX - mouseX)**2 + (pmouseY - mouseY)**2)/50))*8)));
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function chooseColors() {
  brushHue +=1;
  if (brushHue == 360)brushHue = 0;
  stroke(brushHue, 50, 80);
  fill(brushHue, 50, 80);
}

function keyPressed(){
  background(95);
  
}

//function mousePressed() {
//  ellipse(random(width), random(height), 30, 30)
//}
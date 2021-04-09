var count = 100;
var spacing = 6;
var repulsionRadius = 50;
var particles = [];
var h=360;
function setup() {
  createCanvas(700, 700);
  colorMode(HSB, 255);
  for (let i = 0; i < count; i++) {
    let angle = i * 137.5;
    let r = spacing * sqrt(i);
    let x = r * cos(radians(angle)) + width / 2;
    let y = r * sin(radians(angle)) + height / 2;
    let distToCenter = dist(x, y, width / 2, height / 2);
    let s = 255 - distToCenter * 1.25;
    let b = 150 + distToCenter * 1;
    
    particles.push(new Particle(
      random(width), -200, 
      x, y, 
      0.5,
      s, b));
  }
} 

function draw() {
  background(20);
  
  for (let i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].display();
  }
  
  stroke(140, this.sat, this.bright);
  strokeWeight(3);
  fill(20,20,20);
  circle(mouseX,mouseY,repulsionRadius*2);
  // strokeWeight(5);
  // Longandshort2_0102(mouseX, mouseY,repulsionRadius/5,repulsionRadius/5,5,7,2.2,40,true);
}

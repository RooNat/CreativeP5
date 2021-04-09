//粒子系统2
let system;
let systems=[];
function setup() {
  createCanvas(720, 400);
  //system = new ParticleSystem(createVector(mouseX, mouseY));
}

let particles = [];
function draw() {
  clear();
  background(51);
  systems.push(new ParticleSystem(createVector(mouseX,mouseY)));
  for(let i=0;i<systems.length;i++){
       systems[i].run();

       systems[i].addParticle();
  }
}

function mousePressed(){
  //systems.push(new ParticleSystem(createVector(mouseX,mouseY)));

}
// A simple Particle class
let Particle = function(position) {
  this.acceleration = createVector(random(-0.1,0.1), random(-0.1,0.1));
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespanR =  map(sin(frameCount/150.0),-1,1,100,255);
  this.lifespanG =  map(sin(frameCount/100.0),-1,1,100,255);
  this.lifespanB =  map(sin(frameCount/50.0),-1,1,100,255);
  this.u=random(1,8);
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespanR -= 10;
  this.lifespanG -= 10;
  this.lifespanB -= 10;
};

// Method to display
Particle.prototype.display = function() {
  /*stroke(200, this.lifespan);
  strokeWeight(2);*/
  noStroke();
  fill(this.lifespanR, this.lifespanG,this.lifespanB);
  circle(this.position.x,this.position.y,this.u,this.u);
  //ellipse(this.position.x, this.position.y, 12, 12);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  return (this.lifespanR < 0||this.lifespanG<0||this.lifespanB<0);
};

let ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (let i = this.particles.length-1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};

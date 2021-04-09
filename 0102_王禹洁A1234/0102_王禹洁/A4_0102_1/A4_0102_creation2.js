//粒子系统1
let system;
var h=360;
let systems=[];
function setup() {
  createCanvas(720, 400);
  //system = new ParticleSystem(createVector(mouseX, mouseY));
}

let particles = [];
function draw() {
  clear();
  background(51);
  //system = new ParticleSystem(createVector(mouseX, mouseY));
  //systems.push(new ParticleSystem(createVector(mouseX,mouseY)));
  for(let i=0;i<systems.length;i++){
       systems[i].run();

       systems[i].addParticle();
       //systems[i]=systems[i+1];
  }
  //systems.pop(systems[systems.length-1]);
}

function mousePressed(){
  
  systems.push(new ParticleSystem(createVector(mouseX,mouseY)));

}
// A simple Particle class
let Particle = function(position) {
  this.acceleration = createVector(random(-0.2,0.2), random(-0.2,0.2));
  this.velocity = createVector(random(-2, 2), random(-2, 2));
  this.position = position.copy();
  this.lifespanR =  map(sin(frameCount/150.0),-1,1,100,255);
  this.lifespanG =  map(sin(frameCount/100.0),-1,1,100,255);
  this.lifespanB =  map(sin(frameCount/50.0),-1,1,100,255);
  this.u=random(1,6);
  this.alp=100;
  this.is=random(0,1);
  if(this.is<0.5)
  {
    this.is=0;
  }
  else
  {
    this.is=1;
  }
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.alp-=2;
  this.lifespanR -= 5;
  this.lifespanG -= 5;
  this.lifespanB -= 5;
};

// Method to display
Particle.prototype.display = function() {
  /*stroke(200, this.lifespan);
  strokeWeight(2);*/
  noStroke();
  if(this.is==0)
  {
    Lihua_0102(this.position.x,this.position.y,this.u,this.alp,true);
  }
  else
  {
    fill(this.lifespanR, this.lifespanG,this.lifespanB);
    circle(this.position.x,this.position.y,this.u,this.u);
  }
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  return (this.alp<0||this.lifespanR < 0||this.lifespanG<0||this.lifespanB<0);
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
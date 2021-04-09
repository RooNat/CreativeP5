
var h=360;
// this class describes the properties of a single particle.
class Particle {
// setting the co-ordinates, radius and the
// speed of a particle in both the co-ordinates axes.
  constructor(){
    this.x1 = random(0,width);
    this.y1 = random(0,height);
    this.x2 = random(0,width);
    this.y2 = random(0,height);
    this.r1 = random(2,6);
    this.r2=random(1,8);
    this.alp=random(15,100);
    this.xSpeed = random(-1,1);
    this.ySpeed = random(-2.5,2.5);
    this.R=random(200,250);
    this.G=random(190,250);
    this.B=random(100,250);
  }

  createmoon(){
    stroke(this.R,this.G,this.B,this.alp);
    Meihua_0102(0,0,this.r1,this.alp,false);
    Sanyebanxian_0102(0,0,this.r1,this.r1,3,3,3,3,this.alp,false);
  }
// creation of a particle.
  createParticle() {
    //noStroke();
    fill(this.R,this.G,this.B);
    
    circle(this.x2,this.y2,this.r2);
  }

// setting the particle in motion.
  moveParticle() {
    if(this.x1 < 0 || this.x1 > width)
      this.xSpeed*=-1;
    if(this.y1 < 0 || this.y1 > height)
      this.ySpeed*=-1;
    this.x1+=this.xSpeed;
    this.y1+=this.ySpeed;
    if(this.x2 < 0 || this.x2 > width)
      this.xSpeed*=-1;
    if(this.y2 < 0 || this.y2 > height)
      this.ySpeed*=-1;
    this.x2+=this.xSpeed;
    this.y2+=this.ySpeed;
  }

// this function creates the connections(lines)
// between particles which are less than a certain distance apart
  joinParticles(paraticles) {
    particles.forEach(element =>{
      let dis = dist(this.x2,this.y2,element.x1,element.y1);
      if(dis<85) {
        stroke('rgba(255,255,255,0.2)');
        line(this.x2,this.y2,element.x1,element.y1);
      }
    });
  }
}

// an array to add multiple particles
let particles = [];

function setup() {
  createCanvas(720, 400);
  for(let i = 0;i<width/10;i++){
    particles.push(new Particle());
  }
}

function draw() {
  background(0);
  for(let i = 0;i<particles.length;i++) {
    if(i%2==0)
    {
      push();
      translate(particles[i].x1,particles[i].y1);
      rotate(frameCount/30);
      //scale(random(0.9,1.1));
      //particles[i].r1=random(0.5,1.5)*particles[i].r1;
      particles[i].createmoon();
      pop();
    }
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }
}

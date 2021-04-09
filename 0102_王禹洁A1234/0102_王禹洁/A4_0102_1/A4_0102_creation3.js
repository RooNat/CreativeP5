//烟雾爆炸
var h=360;
let systems=[];
var pox =new Array(50);//声明一个x数组存储50个鼠标坐标的x值
var poy=new Array(50);//声明一个x数组存储50个鼠标坐标的y值
var x;
var y=0;
function setup() {
  createCanvas(400, 400);
  //初始化
  for(var i=0;i<pox.length;i++){
    pox[i]=0;
    poy[i]=0;
  }
  x=random(100,300);
  frameRate(50);
}

let j=0;
let f=0;
function draw() {
	clear();
    background(15);
  //每次将新的鼠标值放置于数组的最后，前面的值不断挪出去
  for(var i=1;i<pox.length-1;i++){
    pox[i]=pox[i+1];
    poy[i]=poy[i+1];
  }

  if(y!=200)
  {
  	y++;
  	for(var i=0;i<pox.length-1;i++){
    noStroke();//指定没有边框
    ecolor=255-i*5;
    constrain(ecolor,170,255);//限制范围
    fill(ecolor,120,130);
    ellipse(pox[i],poy[i],0.3*i,0.3*i);

   }
  	for(let i=0;i<systems.length;i++){
	      systems[i].run();

	      systems[i].addParticle();
	       //systems[i]=systems[i+1];
     }
  	pox[pox.length-1]=x;
  	poy[poy.length-1]=y;
  	
  }
  else if(y==200)
  {
  	systems.push(new ParticleSystem(createVector(x,y-1)));

  	y=0;
  	x=random(100,300);
  	pox[pox.length-1]=x;
  	poy[poy.length-1]=y;
  }
  
  //最后一个数组位置填充此时的鼠标的值
  /*pox[pox.length-1]=mouseX;
  poy[poy.length-1]=mouseY;*/
  //根据该50个值绘制图形
/*  for(var i=0;i<pox.length-1;i++){
    noStroke();//指定没有边框
    ecolor=255-i*5;
    constrain(ecolor,0,255);//限制范围
    fill(ecolor);
    ellipse(pox[i],poy[i],0.3*i,0.3*i);

  }

for(var i=1;i<pox.length-1;i++){
    pox[i]=pox[i+1];
    poy[i]=poy[i+1];
  }

  if(f<h)
  {
     var theta=f*TAU/360.0;
     var r1=1+pow(1.0*sin(theta*2.5),2);
     pox[pox.length-1]=100+20*r1*cos(theta);
     poy[poy.length-1]=220+20*r1*sin(theta);
    f++;
  }
  if(f==h)
  {
  	f=0;
  }*/
  //最后一个数组位置填充此时的鼠标的值
  /*pox[pox.length-1]=mouseX;
  poy[poy.length-1]=mouseY;*/
  //根据该50个值绘制图形
 
  
}


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
  this.alp-=1;
  this.lifespanR -= 1;
  this.lifespanG -= 1;
  this.lifespanB -= 1;
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
var num = 1000;
var vx = new Array(num);
var vy = new Array(num);
var x = new Array(num);
var y = new Array(num);
var ax = new Array(num);
var ay = new Array(num);

var magnetism = 15.0; //吸引力强度负值时，会产生排斥。
var radius = 1 ; //画圆的半径
var gensoku = 0.95; // 减慢粒子的运动

function setup(){
  createCanvas(900,700);
  noStroke(); 
  fill(0);
  ellipseMode(RADIUS);
  background(0);
  blendMode(ADD);
  
  for(var i =0; i< num; i++){
    x[i] = random(width);
    y[i] = random(height);
    vx[i] = 0;
    vy[i] = 0;
    ax[i] = 0;
    ay[i] = 0;
  }
}


function draw(){
  fill(0,0,0);
  rect(0,0,width,height);
  
  for(var i=0; i<num; i++){
    var distance = dist(mouseX, mouseY, x[i], y[i]); //dist(x1,y1,x2,y2) 查找两点之间的距离的功能
    //加速度与距吸引力中心的距离的平方成反比。
    if(distance >5){ //如果离鼠标太近，请勿更新加速度
      ax[i] = magnetism * (mouseX - x[i]) / (distance * distance); 
      ay[i] = magnetism * (mouseY - y[i]) / (distance * distance);
    }
    vx[i] += ax[i]; // 每帧将速度vx增加ax。
    vy[i] += ay[i]; // 每帧增加vy速度，如果距离鼠标太近则不更新加速度
    
    vx[i] = vx[i]*gensoku;
    vy[i] = vy[i]*gensoku;
    
    x[i] += vx[i];  // 每帧前进vy像素。
    y[i] += vy[i];  // 每帧前进vy像素。
    var sokudo = dist(0,0,vx[i],vy[i]); // 从速度的X和Y分量中找到速度
    var r,g,b;
    if(sin(frameCount)>0)
    {
       r = map(sokudo, 0, 5, 0, 255); //根据速度计算颜色
       g = map(sokudo, 0,5, 64, 255);
       b = map(sokudo, 0,5, 128, 255);
       fill(r, g, b, 30);
       circle(x[i],y[i],radius);
    }
    else
    {
      r = map(sin(frameCount/200.0), -1,1, 0, 255); //根据速度计算颜色
      g = map(sokudo, 0,5, 64, 255);
      b = map(sokudo, 0,5, 128, 255);
      fill(r, g, b, 30);
      circle(x[i],y[i],radius);
    }
  }
  
}

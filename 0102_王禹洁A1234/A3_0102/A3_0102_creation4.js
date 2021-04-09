var h=360;
let systems=[];
var u1=10;
var pox =new Array(50);//声明一个x数组存储50个鼠标坐标的x值
var poy=new Array(50);//声明一个x数组存储50个鼠标坐标的y值
function setup() {
  createCanvas(400, 400);
  //初始化
  for(var i=0;i<pox.length;i++){
    pox[i]=0;
    poy[i]=0;
  }
  frameRate(120);
}

let f=0;
function draw() {
	  //clear();
    //background(15);
  //每次将新的鼠标值放置于数组的最后，前面的值不断挪出去
  for(var i=1;i<pox.length-1;i++){
    pox[i]=pox[i+1];
    poy[i]=poy[i+1];
  }

  
  //最后一个数组位置填充此时的鼠标的值
  /*pox[pox.length-1]=mouseX;
  poy[poy.length-1]=mouseY;*/

  if(f<h)
  {
     var t=f/360.0;
     var theta=t*TAU*10;
     a=5;
     b=3;
     c=5;
     pox[pox.length-1]=180+u1*((a+b)*cos(theta)-c*cos((a/b+1)*theta));
     poy[poy.length-1]=200+u1*((a+b)*sin(theta)-c*sin((a/b+1)*theta));
    f+=1;
  }
  if(f==h)
  {
  	f=0;
    u1-=5;
  }
 for(var i=0;i<pox.length-1;i++){
    noStroke();//指定没有边框
    ecolor=255-i*5;
    constrain(ecolor,170,255);//限制范围
    fill(ecolor,130,180);
    ellipse(pox[i],poy[i],0.1*i,0.1*i);

   }
  
}
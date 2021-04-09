var h=360;
var s;
function setup()
{
	createCanvas(1000,700);
	noFill();
	background(255);
  stroke(0,0,0);
  textSize(20);
  text("通过移动鼠标到不同区域",10,50);
  text("来改变函数个体形状",10,80);
	frameRate(100);

}

function draw()
{
  //clear();
  
  if(mouseX>0&&mouseX<200&&mouseY>0&&mouseY<300)
  {
     Colorcircle(Woguixian1_0102,0.3,50,10);
  }
  else if(mouseX>200&&mouseX<400&&mouseY>0&&mouseY<300)
  {
     //clear();
     Colorcircle(Lihua1_0102,0.3,50,15);
  }
  else if(mouseX>400&&mouseX<600&&mouseY>0&&mouseY<300)
  {
     //clear();
     Colorcircle(Meihua1_0102,0.3,50,10);
  }
  else if(mouseX>600&&mouseX<800&&mouseY>0&&mouseY<300)
  {
     //clear();
     Colorcircle(Longandshort11_0102,0.3,50,12);
  }
  else if(mouseX>0&&mouseX<200&&mouseY>=300&&mouseY<=600)
  {
    //clear();
     Colorcircle(Wanyue1_0102,0.3,50,10);
  }
  else if(mouseX>200&&mouseX<600&&mouseY>=300&&mouseY<=600)
  {
     //clear();
    Colorcircle(Longandshort21_0102,0.3,50,10);
  }
  else if(mouseX>600&&mouseX<800&&mouseY>=300&&mouseY<=600)
  {
     //clear();
    Colorcircle(Luoxuan21_0102,0.3,50,10);
  }
}

function mousePressed()
{
}

function Colorcircle(SpriteFcn,sc,cm,alp)
{ 
  translate(width/2, height/2); //移动坐标系原点到画面中心
  r = map(sin(frameCount*cm/200.0),-1,1,100,255); // 随机红色分量
  g = map(sin(frameCount*cm/300.0),-1,1,0,255);   // 随机绿色分量
  b = map(sin(frameCount*cm/400.0),-1,1,100,255); //随机蓝色分量
  stroke(r,g,b,alp); // 设置线条颜色、透明度
  //beginShape();//开始绘制曲线
  for(angle=0;angle<360;angle+=2)  //对一圈角度遍历
  {
    radAngle = radians(angle);   //转换为弧度值
    //利用三角函数生成周期性的数据，避免曲线首尾不连续的问题
    noiseID = sin(radAngle) - cos(radAngle)+ 2*sin(radAngle)*sin(radAngle); 
    //利用二维噪声函数生成随机半径     
    radius = map(noise(noiseID*0.3,frameCount*0.01),0,1,200,400); 
    x = radius*cos(radAngle); //这一角度对应的x坐标
    y = radius*sin(radAngle); //这一角度对应的y坐标
    //curveVertex(x, y); //添加对应顶点
    push();
    translate(x,y);
    scale(sc,sc);
    SpriteFcn();
    pop();
    //circle(x,y,5);
    //strokeWeight(3);
    //point(x,y);
    //Meihua(x,y,3);
  }
  //endShape(CLOSE); // 结束封闭曲线的绘制
}

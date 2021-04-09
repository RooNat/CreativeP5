var h=360;
var s;
function setup()
{
	createCanvas(1000,700);
	noFill();
	background(255);
	frameRate(100);

}

function draw()
{
  clear();
  stroke(0,0,0);
  textSize(20);
  text("通过移动鼠标到不同区域来改变旋转函数形状",300,50);
  if(mouseX>0&&mouseX<200&&mouseY>0&&mouseY<300)
  {
     RotateSquare(Meihua1_0102,15,1,0,0,0,0,0,0);
  }
  else if(mouseX>200&&mouseX<400&&mouseY>0&&mouseY<300)
  {
     //clear();
     RotateSquare(Lihua1_0102,15,0.3,0,-40,100,40,0,0);
  }
  else if(mouseX>400&&mouseX<600&&mouseY>0&&mouseY<300)
  {
     //clear();
     RotateSquare(Wanyue_0102,15,0.5,0,100,-50,0,0,0);
  }
  else if(mouseX>600&&mouseX<800&&mouseY>0&&mouseY<300)
  {
     //clear();
     RotateSquare(Longandshort11_0102,15,0.3,0,100,-50,0,0,0);
  }
  else if(mouseX>0&&mouseX<200&&mouseY>=300&&mouseY<=600)
  {
    //clear();
     RotateSquare(Longandshort21_0102,15,0.5,10,100,50,-10,0,0);
  }
  else if(mouseX>200&&mouseX<600&&mouseY>=300&&mouseY<=600)
  {
     //clear();
     RotateSquare(Sanyexian1_0102,15,0.3,10,100,50,-10,0,0);
  }
  else if(mouseX>600&&mouseX<800&&mouseY>=300&&mouseY<=600)
  {
     //clear();
     RotateSquare(Xiangrikui1_0102,15,0.1,10,0,50,10,0,0);
  }
}

function mousePressed()
{
}

function RotateSquare(SpriteFcn,cm,sc,rr,gg,bb,rl,gl,bl)  //旋转的矩形方块
{

   noFill();   // 不要填充颜色
   strokeWeight(2);  // 制定边框线条粗细
   stroke(50); // 设定线条颜色为淡灰色，0为纯黑、255为纯白
   r = map(sin(frameCount*cm/200.0+rr),-1,1,100+rl,255); // 随机红色分量
   g = map(sin(frameCount*cm/300.0+gg),-1,1,0+gl,255);   // 随机绿色分量
   b = map(sin(frameCount*cm/400.0+bb),-1,1,100+bl,255); //随机蓝色分量
   stroke(r,g,b,100); // 设置线条颜色、透明度
   speed = radians(frameCount);
   for(let x=100;x<601;x+=30)  // 对x遍历
    for(let y=100;y<601;y+=30)// 对y遍历
    {   
      rectMode(CENTER);   // 矩形模式中心定位
      push();
      translate(x, y);  // 将坐标系原点移动到画面中心位置
      rotate(speed);  //绕着坐标系原点旋转
      // 当前缩放比例
      scale(sc,sc);
      currentScale = map(sin(speed-x*49-y*2),-1,1,-35,35);  
      strokeWeight(2*currentScale);
      SpriteFcn();
      pop();
    }
}

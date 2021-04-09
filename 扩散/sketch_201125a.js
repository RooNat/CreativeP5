function setup(){
  createCanvas(800, 800); //设定画布大小
  noFill();   // 不要填充颜色
  background(255);   //纯白背景
  frameRate(30);  //设置帧率
}
function draw(){
  if (frameCount%800 ==0) //每过若干帧
  {
    saveFrame("RandomLines-######.png"); //保存一张图片
    background(255); //用白色重新填充背景
  }
  translate(width/2, height/2); //移动坐标系原点到画面中心
  r = map(sin(frameCount/200.0),-1,1,100,255); // 随机红色分量
  g = map(sin(frameCount/300.0),-1,1,0,255);   // 随机绿色分量
  b = map(sin(frameCount/400.0),-1,1,100,255); //随机蓝色分量
  stroke(r,g,b,15); // 设置线条颜色、透明度
  beginShape();//开始绘制曲线
  for(angle=0;angle<360;angle+=2)  //对一圈角度遍历
  {
    radAngle = radians(angle);   //转换为弧度值
    //利用三角函数生成周期性的数据，避免曲线首尾不连续的问题
    noiseID = sin(radAngle) - cos(radAngle)+ 2*sin(radAngle)*sin(radAngle); 
    //利用二维噪声函数生成随机半径     
    radius = map(noise(noiseID*0.3,frameCount*0.01),0,1,200,400); 
    x = radius*cos(radAngle); //这一角度对应的x坐标
    y = radius*sin(radAngle); //这一角度对应的y坐标
    curveVertex(x, y); //添加对应顶点
  }
  endShape(CLOSE); // 结束封闭曲线的绘制
}
function mousePressed()// 当鼠标按键时
{
  saveFrame("RandomLines-######.png");//保存一张图片
  background(255); //用白色重新填充背
}

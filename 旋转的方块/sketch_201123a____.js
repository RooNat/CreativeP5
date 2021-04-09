function setup() {
  createCanvas(500, 500); // 设定画布大小
  noFill();   // 不要填充颜色
  strokeWeight(2);  // 制定边框线条粗细
  stroke(50); // 设定线条颜色为淡灰色，0为纯黑、255为纯白

}


function draw() {
 background(255);   // 纯白背景
  speed = radians(frameCount);
  for(let x=100;x<401;x+=30)  // 对x遍历
    for(let y=100;y<401;y+=30)// 对y遍历
    {   
      rectMode(CENTER);   // 矩形模式中心定位
      //pushMatrix(); //保存之前的坐标系
      push();
      translate(x, y);  // 将坐标系原点移动到画面中心位置
      rotate(speed);  //绕着坐标系原点旋转
      // 当前缩放比例
        currentScale = map(sin(speed-x*49-y*2),-1,1,-35,35);  
      square(0, 0, 10*currentScale); //在坐标系原点画一个矩形
      pop();
      //popMatrix();  // 恢复到之前保存的坐标系
    }
}

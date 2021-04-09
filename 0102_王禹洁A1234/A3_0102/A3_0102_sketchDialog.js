var h=360;
var s;
function setup()
{
	createCanvas(1300,1000);
  background(255);
  stroke(0);
	noFill();
	frameRate(100);

}

function draw()
{
  clear();
  background(255);
  stroke(0);
  push();
  fill(255);
  textSize(20);
  text("对话气泡",650,50);
  textSize(10);
  text("鼠标可移动到对应气泡",600,80);
  textSize(30);
  fill(255);
  text("BOOM!",600,510);
  text("Biu!",125,205);
  text("Wuwu",350,210);
  text("M",590,210);
  text("Bye",760,210);
  text("Wow",210,510);
  text("Hi",130,810);
  text("Lalala",310,810);
  text("正事",670,780);
  text("Zh!",980,720);
  pop();
  s=map(noise(mouseY),0,1,0,2);
  
  push();
  translate(150,200);
  rotate(frameCount/30.0); //可增加交互
  Meihua_0102(0,0,40,40,false);
  pop();

  if(mouseX>=100&&mouseX<=200&&mouseY>=150&&mouseY<=250)
  {
    push();
    translate(150,200);
    scale(s,s);
    rotate(frameCount/50.0);
    Meihua_0102(0,0,40,70,true);
    pop();
  }

  push();
  translate(350,200);
  rotate(frameCount/30.0); //可增加交互
  Wanyue_0102(0,0,60,30,30,false);
  pop();

  if(mouseX>=300&&mouseX<=400&&mouseY>=100&&mouseY<=300)
  {
    push();
    translate(350,200);
    scale(s,s);
    Wanyue_0102(0,0,60,30,30,true);
    pop();
  }

  push();
  translate(250,500);
  rotate(frameCount/30.0); //可增加交互
  Longandshort1_0102(0,0,7,7,5,4,5,20,false);
  pop();

  if(mouseX>=200&&mouseX<=350&&mouseY>=450&&mouseY<=650)
  {
    push();
    translate(250,500);
    scale(s,s);
    Longandshort1_0102(0,0,7,7,5,4,5,20,false);
    pop();
  }

  push();
  translate(600,200);
  rotate(frameCount/30.0); //可增加交互
  Longandshort2_0102(0,0,22,22,5,6,2.2,30,false);
  pop();

  if(mouseX>=550&&mouseX<=650&&mouseY>=150&&mouseY<=250)
  {
    push();
    translate(600,200);
    scale(s,s);
    Longandshort2_0102(0,0,22,22,5,6,2.2,30,false);
    pop();
  }

  push();
  translate(800,200);
  rotate(frameCount/30.0);
  Sanyebanxian_0102(0,0,22,22,3,4,2,3,30,false);
  pop();

  if(mouseX>=750&&mouseX<=950&&mouseY>=150&&mouseY<=250)
  {
    push();
    translate(800,200);
    scale(s,s);
     Sanyebanxian_0102(0,0,22,22,3,4,2,3,30,false);
    pop();
  }

  push();
  translate(650,500);
  rotate(frameCount/30.0);
  Xiangrikui2_0102(0,0,2,2,50,30,false);
  pop();

  if(mouseX>=550&&mouseX<=750&&mouseY>=400&&mouseY<=600)
  {
    push();
    translate(650,500);
    scale(s,s);
    Xiangrikui2_0102(0,0,2,2,50,30,false);
    pop();
  }

  push();
  translate(150,800);
  rotate(frameCount/30.0);
  Circle_Sprite_0102(0,0,150,3,Meihua1_0102,0.5,15,1,100);
  pop();

  if(mouseX>=100&&mouseX<=200&&mouseY>=750&&mouseY<=950)
  {
    push();
    translate(150,800);
    scale(s,s);
    Circle_Sprite_0102(0,0,150,3,Meihua1_0102,0.5,15,0,100);
    pop();
  }

  push();
  translate(350,800);
  rotate(frameCount/30.0);
  Circle_Sprite_0102(0,0,150,3,Sanyexian1_0102,0.5,20,1,15);
  pop();

  if(mouseX>=200&&mouseX<=400&&mouseY>=750&&mouseY<=950)
  {
    push();
    translate(350,800);
    scale(s,s);
    Circle_Sprite_0102(0,0,150,3,Sanyexian1_0102,0.5,20,0,15);
    pop();
  }

  push();
  translate(700,775);
  rotate(frameCount/30.0);
  Rect_Sprite_0102(-100,-75,200,150,30,6,Jiankaixian1_0102,1,15,false,100);
  pop();

  if(mouseX>=600&&mouseX<=800&&mouseY>=700&&mouseY<=850)
  {
    push();
    translate(700,775);
    scale(s,s);
    Rect_Sprite_0102(-100,-75,200,150,30,6,Jiankaixian1_0102,1,15,false,100);
    pop();
  }

  push();
  translate(1000,700);
  rotate(frameCount/30.0);
  Ellipse_Sprite_0102(0,0,140,150,5,Redaiyu1_0102,0.3,15,0,100);
  pop();

  if(mouseX>=900&&mouseX<=1100&&mouseY>=600&&mouseY<=800)
  {
    push();
    translate(1000,700);
    scale(s,s);
    Ellipse_Sprite_0102(0,0,140,150,5,Redaiyu1_0102,0.3,15,1,100);
    pop();
  }


}




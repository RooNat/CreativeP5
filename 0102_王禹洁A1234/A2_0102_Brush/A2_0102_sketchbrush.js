var h=360;
var s;
var w,h1;
function setup()
{
	createCanvas(1300,700);
  background(255);
  fill(0);
  textSize(20);
  text("绘画区",650,50);
  textSize(15);
  text("笔刷提示:",1000,100);
  text("可以通过按键盘数字0~9",1000,150);
  text("来改变笔刷形状",1000,200);
	noFill();
	frameRate(100);

}

function draw()
{
  //clear();

  s=map(noise(mouseY),0,1,3,15);
  w=map(noise(mouseX),0,1,5,20);
  h1=map(noise(mouseY),0,1,5,20);
  
  
  if(key=='1')
  {
     if(mouseIsPressed==true)
     {
        Meihua_0102(mouseX,mouseY,s,30,true);
      }
  }
  else if(key=='2')
  {
    if (mouseIsPressed==true)
    {
       Circle_Sprite_0102(mouseX,mouseY,s,3,Lihua1_0102,0.3,10,0,30);
    }
  }
  else if(key=='3')
  {
    if (mouseIsPressed==true)
    {
      Ellipse_Sprite_0102(mouseX,mouseY,w,h1,3,Neiwuhuan1_0102,0.05,10,0,30);
    }
  }
  else if(key=='4')
  {
    if (mouseIsPressed==true)
    {
      Redaiyu_0102(mouseX,mouseY,w,h1,s,s*0.5,30,true);
    }
  }
  else if(key=='5')
  {
    if (mouseIsPressed==true)
    {
      Luoxian3_0102(mouseX,mouseY,w*0.3,h1*0.3,s*0.5,30,true);
    }
  }
  else if(key=='6')
  {
    if (mouseIsPressed==true)
    {
      var L11,L12,L21,L22;
      L11=map(noise(mouseY),0,1,2,5);
      L12=map(noise(mouseX),0,1,2,5);
      L21=random(2,5);
      L22=random(2,5);
      Sanyebanxian_0102(mouseX,mouseY,w,h1,L11,L12,L21,L22,30,true);
    }
  }
  else if(key=='7')
  {
    if (mouseIsPressed==true)
    {
      Jiankaixian_0102(mouseX,mouseY,s,30,true);
    }
  }
  else if(key=='8')
  {
    if (mouseIsPressed==true)
    {
      line_Xindiantu2_0102(mouseX,mouseY,pmouseX,pmouseY,0,w,h1,50,true);
    }
  }
  else if(key=='9')
  {
    if (mouseIsPressed==true)
    {
      line_Ajimide_0102(mouseX,mouseY,pmouseX,pmouseY,s*0.1,0,s*0.1,true);
    }
  }
  else if(key=='0')
  {
    if (mouseIsPressed==true)
    {
      line_Cishengbo1_0102(mouseX,mouseY,pmouseX,pmouseY,0,s,w,h1,true);
    }
  }
}

function keyPressed()
{

}



var h=360;
var s;
var T;
function setup()
{
	createCanvas(1300,1000);
	noFill();
	background(255);
	frameRate(50);
	textSize(20);
	stroke(0,200,230);
	strokeWeight(3);
	text("1",140,140);
	text("2",440,340);
	text("3",740,240);
	rect(100,100,100,100,40);
	rect(400,300,100,100,40);
	rect(700,200,100,100,40);
	textSize(30);
	fill(0,0,0);
	text("请点击三个小方块查看对应库示例",300,100);
	noFill();
	strokeWeight(1);
	stroke(0,0,0);
	if(mouseIsPressed)
	{
		loop();
	}
	else
	{
		noLoop();
	}
}

function draw()
{
	if(T==1)
	{
		clear();
		line_Xindiantu_0102(100,50,400,50,10,10,mouseX*0.1,0.5,10,50,false,false);
		line_Xindiantu2_0102(100,150,400,150,0.5,10,10,mouseX*0.1,map(mouseY,0,700,0,10),50,false);
		line_Heart1_0102(100,250,400,250,10,10,1,0.1*mouseX,0.4,10,1,50,Meihua1_0102,30,0,false);
		line_Heart1_0102(100,350,400,350,10,10,1,0.1*mouseX,0.4,10,1,50,Meihua1_0102,30,1,false);
		line_Heart1_0102(100,450,400,450,10,10,1,0.1*mouseX,0.4,10,0.2,50,Lihua1_0102,100,0,false);
		line_Heart1_0102(100,550,400,550,10,10,1,0.1*mouseX,0.4,10,0.2,50,Hello1_0102,100,false);
		line_Heart2_0102(100,650,400,650,10,0.5,10,0.1*mouseX,3,1,15,Meihua1_0102,100,0);
	}
	else if(T==2)
	{
		clear();
		line_Ajimide_0102(100,250,400,250,0.1*mouseY,0.5,1,false);
		textSize(20);
		text("静态可交互",100,500);
		line_Ajimide0_0102(600,250,800,250,3,0.1*mouseY,0.5,3,0.2,10,100,Sanyebanxian1_0102,0); //最后一个系数可以为0或者1或者2
		text("静态可交互，颜色一直在变(函数作为参数)",400,500);
		/*line_Ajimide1_0102(600,250,700,250,3,3,15,0.4,0.3,10,100,Longandshort21_0102,1);*/
		line_Ajimide2_0102(900,250,1000,250,0.01*mouseY,15,0.6,10,100,false);
		text("动态可交互",900,500);
	}
	else if(T==3)
	{
		clear();
		stroke(0,0,0);
		line_Cishengbo_0102(100,100,800,100,0.1*mouseX,20,100,0.4,10,false);
		line_Cishengbo1_0102(100,170,800,170,0.5,30,0.1*mouseX,0.1*mouseY,false);
		line_Cishengbo2_0102(100,250,800,250,0.5,100,1,0.1*mouseX,mouseY,0.1,50,100,Longandshort11_0102,1);
		line_Cishengbo3_0102(100,400,800,400,10,30,1,0.4,10,0.1*mouseX,0.3,50,100,Wanyue1_0102,0);
	}
}

function mousePressed()
{
	if(mouseX>=100&&mouseX<=200&&mouseY<=200&&mouseY>=100)
	{
		T=1;
	}
	else if(mouseX>=400&&mouseX<=500&&mouseY<=400&mouseY>=300)
	{
		T=2;
	}
	else if(mouseX>=700&&mouseX<=800&&mouseY<=300&mouseY>=200)
	{
		T=3;
	}
	loop();
}


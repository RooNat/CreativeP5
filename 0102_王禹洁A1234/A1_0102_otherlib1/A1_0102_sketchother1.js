var h=360;
var s;
var T;
function setup()
{
	createCanvas(1300,1000);
	noFill();
	background(255);
	frameRate(50);
	textSize(22);
	stroke(150,20,230);
	strokeWeight(1);
	text("椭圆",120,140);
	text("矩形",430,340);
	text("三角形",720,240);
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
	if(T==1) //椭圆
	{
		clear();
		stroke(0,0,0);
		text("椭圆示例",500,100);
		Ellipse_Sprite_0102(200,200,200,250,5,Lihua1_0102,0.3,15,1,100);
		Ellipse_Sprite_0102(500,500,300,250,5,Redaiyu1_0102,0.3,15,1,100);
		Ellipse_Sprite_0102(800,300,250,320,5,Woguixian1_0102,0.3,15,1,100);
	}
	else if(T==2) //矩形
	{
		clear();
		stroke(0,0,0);
		text("矩形示例",500,100);
		Rect_Sprite_0102(100,100,200,150,30,4,Jiankaixian1_0102,1,15,false,100);
		Rect_Sprite_0102(300,400,150,200,30,5,Longandshort11_0102,0.3,15,true,100);
		Rect_Sprite_0102(700,300,170,220,30,5,Luoxuan11_0102,1,15,true,100);
	}
	else if(T==3) //三角形
	{
		clear();
		stroke(0,0,0);
		text("三角型示例",500,100);
		Triangle_Sprite_0102(300,100,400,50,350,150,0.3,Lihua1_0102,0.2,10,true,100);
		push();
		translate(100,100);
		stroke(0,0,0);
		Triangle_Sprite_0102(300,100,400,50,350,150,0.3,Lihua1_0102,0.2,10,false,100);
		pop();
		Triangle_Sprite_0102(500,300,600,330,650,220,0.3,Luoxuan21_0102,0.2,10,true,100);
		push();
		translate(100,100);
		stroke(0,0,0);
		Triangle_Sprite_0102(500,300,600,330,650,220,0.3,Luoxuan21_0102,0.2,10,false,100);
		pop();
		Triangle_Sprite_0102(200,300,100,400,250,450,0.2,Wanyue1_0102,0.5,10,true,100);
		push();
		translate(150,150);
		stroke(0,0,0);
		Triangle_Sprite_0102(200,300,100,400,250,450,0.2,Wanyue1_0102,0.5,10,false,100);
		pop();
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
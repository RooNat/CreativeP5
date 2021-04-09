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
	stroke(230,200,20);
	strokeWeight(3);
	text("1",140,140);
	text("2",440,340);
	rect(100,100,100,100,40);
	rect(400,300,100,100,40);
	textSize(30);
	fill(0,0,0);
	text("请点击两个小方块查看对应库示例",300,100);
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
		Meihuacircle_0102(100,100,30,2,5,100);
		Lihuacircle_0102(300,500,10,1,5,100);
		Wanyue2circle_0102(400,200,30,2,5,100);
		SunLine_0102(600,500,30,30,100,true);
		Xiangrikui2_0102(700,300,2,2,40,100,true);
	}
	else if(T==2)
	{
		clear();
		Circle_Sprite_0102(100,100,70,3,Meihua1_0102,0.5,15,1,100);
		Circle_Sprite_0102(200,200,50,3,Longandshort21_0102,0.5,17,0,50);
        Circle_Sprite_0102(300,300,60,3,Sanyexian1_0102,0.5,20,1,15);
        Circle_Sprite_0102(400,200,50,3,Xiangrikui1_0102,0.1,17,0,50);
        Circle_Sprite_0102(550,100,50,5,Neiwuhuan1_0102,0.4,15,1,15);
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
	loop();
}

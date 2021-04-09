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
	stroke(220,100,230);
	strokeWeight(3);
	text("1",100,150);
	text("2",100,450);
	text("3",100,650);
	text("4",300,150);
	text("5",300,450);
	text("6",300,650);
	text("7",500,150);
	text("8",500,450);
	text("9",500,650);
    text("10",700,150);
	text("11",700,450);
	text("12",700,650);
	text("13",900,150);
	text("14",900,450);
	text("15",900,650);
	rect(50,100,100,100,40);
	rect(50,400,100,100,40);
	rect(50,600,100,100,40);
	rect(250,100,100,100,40);
	rect(250,400,100,100,40);
	rect(250,600,100,100,40);
	rect(450,100,100,100,40);
	rect(450,400,100,100,40);
	rect(450,600,100,100,40);
	rect(650,100,100,100,40);
	rect(650,400,100,100,40);
	rect(650,600,100,100,40);
	rect(850,100,100,100,40);
	rect(850,400,100,100,40);
	rect(850,600,100,100,40);
	textSize(30);
	fill(0,0,0);
	text("请点击小方块查看其他库示例",500,50);
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
	if(T==1) //
	{
		clear();
		stroke(0,0,0);
		text("示例1",500,100);
		Meihua_0102(500,200,30,100,false);
		Meihua_0102(100,200,30,100,true);
	}
	else if(T==2) //
	{
		clear();
		stroke(0,0,0);
		text("示例2",500,100);
		Lihua_0102(500,200,10,100,false);
		Lihua_0102(100,200,10,100,true);
		
	}
	else if(T==3) //
	{
		clear();
		stroke(0,0,0);
		text("示例3",500,100);
		Wanyue_0102(500,300,30,30,100,false);
		Wanyue_0102(500,600,40,20,100,false);
		Wanyue_0102(100,200,30,30,100,true);
		Wanyue_0102(100,600,20,40,100,true);
		Wanyue3_0102(700,300,40,40,3,1,15,100,Meihua1_0102,1);

	}
	else if (T==4) 
	{
		clear();
		stroke(0,0,0);
		text("示例4",500,100);
		Redaiyu_0102(500,300,30,30,5,3,100,false);
		Redaiyu_0102(100,300,30,30,5,3,100,true);
		
	}
	else if (T==5) 
	{
		clear();
		stroke(0,0,0);
		text("示例5",500,100);
		Luoxuan1_0102(400,300,50,50,100,false);
		Luoxuan1_0102(100,300,50,50,100,true);
		Luoxuan1_0102(200,400,40,60,100,true);
	}
	else if (T==6) 
	{
		clear();
		stroke(0,0,0);
		text("示例6",500,100);
		Luoxuan2_0102(600,300,10,10,10,100,false);
		Luoxuan2_0102(200,300,10,10,10,100,true);
		
	}
	else if (T==7) 
	{
		clear();
		stroke(0,0,0);
		text("示例7",500,100);
		Luoxian3_0102(500,300,20,20,3,100,false);
		Luoxian3_0102(200,300,20,20,2,100,true);
		
	}
	else if (T==8) 
	{
		clear();
		stroke(0,0,0);
		text("示例8",500,100);
		Longandshort1_0102(500,300,10,10,5,3,5,100,false);
		Longandshort1_0102(200,300,10,10,5,3,5,100,true);
		
	}
	else if (T==9) 
	{
		clear();
		stroke(0,0,0);
		text("示例9",500,100);
		Longandshort2_0102(500,300,25,23,5,7,2.2,100,false);
		Longandshort2_0102(200,300,23,23,5,7,2.2,100,true);
		
	}
	else if (T==10) 
	{
		clear();
		stroke(0,0,0);
		text("示例10",500,100);
		Sanyexian_0102(500,300,100,80,100,false);
		Sanyexian_0102(200,300,100,80,100,true);
		
	}
	else if (T==11) 
	{
		clear();
		stroke(0,0,0);
		text("示例11",500,100);
		Sanyebanxian_0102(200,500,20,20,2,2,2,2,100,false);
		Sanyebanxian_0102(200,200,20,20,2,2,2,2,100,true);
		Sanyebanxian_0102(500,200,20,20,3,4,2,3,100,true);
		Sanyebanxian_0102(500,500,20,20,3,3,4,4,100,true);
	}
	else if (T==12) 
	{
		clear();
		stroke(0,0,0);
		text("示例12",500,100);
		Hello_0102(200,500,10,5,4,100,false);
		Hello_0102(200,200,10,4,5,100,true);
		
	}
	else if (T==13) 
	{
		clear();
		stroke(0,0,0);
		text("示例13",500,100);
		Woguixian_0102(200,500,30,30,100,false);
		Woguixian_0102(200,200,30,30,100,true);
		
	}
	else if (T==14) 
	{
		clear();
		stroke(0,0,0);
		text("示例14",500,100);
		Neiwuhuan_0102(500,300,10,10,100,false);
		Neiwuhuan_0102(200,300,10,10,100,true);
		
	}
	else if (T==15) 
	{
		clear();
		stroke(0,0,0);
		text("示例15",500,100);
		Jiankaixian_0102(500,300,50,100,false);
		Jiankaixian_0102(200,300,50,100,true);
		
	}

}

function mousePressed()
{
	if(mouseX>=50&&mouseX<=150&&mouseY<=200&&mouseY>=100)
	{
		T=1;
	}
	else if(mouseX>=50&&mouseX<=150&&mouseY<=500&mouseY>=400)
	{
		T=2;
	}
	else if(mouseX>=50&&mouseX<=150&&mouseY<=700&mouseY>=600)
	{
		T=3;
	}
	else if (mouseX>=250&&mouseX<=350&&mouseY<=200&mouseY>=100) 
	{
		T=4;
	}
	else if (mouseX>=250&&mouseX<=350&&mouseY<=500&mouseY>=400) {
		T=5;
	}
	else if (mouseX>=250&&mouseX<=350&&mouseY<=700&mouseY>=600) {
		T=6;
	}
	else if (mouseX>=450&&mouseX<=550&&mouseY<=200&mouseY>=100) {
		T=7;
	}
	else if (mouseX>=450&&mouseX<=550&&mouseY<=500&mouseY>=400) {
		T=8;
	}
	else if (mouseX>=450&&mouseX<=550&&mouseY<=700&mouseY>=600) {
		T=9;
	}
	else if (mouseX>=650&&mouseX<=750&&mouseY<=200&mouseY>=100) {
		T=10;
	}
	else if (mouseX>=650&&mouseX<=750&&mouseY<=500&mouseY>=400) {
		T=11;
	}
	else if (mouseX>=650&&mouseX<=750&&mouseY<=700&mouseY>=600) {
		T=12;
	}
	else if (mouseX>=850&&mouseX<=950&&mouseY<=200&mouseY>=100) {
		T=13;
	}
	else if (mouseX>=850&&mouseX<=950&&mouseY<=500&mouseY>=400) {
		T=14;
	}
	else if (mouseX>=850&&mouseX<=950&&mouseY<=700&mouseY>=600) {
		T=15;
	}
	
	loop();
}
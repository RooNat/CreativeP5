var x,y;

var lastTime = 0;

var colNum = 16;
var rowNum = 16;
var gap = 20;

// 函数setup() ：准备阶段
function setup() 
{
	createCanvas(480,480);
	
	x = new Array();
	y = new Array();
	lastTime = getTime();

	for(var i =0;i<colNum;i++)
	{
		x[i] = new Array();
		y[i] = new Array();
		for(var j=0;j<rowNum;j++)
		{
			x[i][j] = i*gap - gap*colNum/2;
			y[i][j] = j*gap - gap*rowNum/2;
		}
	}
}

// 函数draw()：作画阶段
function draw() {
	fill(255,1);
	rect(0,0,width,height);

	var tNow = getTime(); // 当前时刻
	var dt = tNow - lastTime; // 时差

	for(var i =0;i<colNum;i++)
	{
		for(var j=0;j<rowNum;j++)
		{
			var xx = x[i][j];
			var yy = y[i][j];
			var dx = 25*sin(0.1*yy) * dt;
			var dy = 25*cos(0.1*xx) * dt;
			xx += dx;
			yy += dy;
			x[i][j] = xx;
			y[i][j] = yy;
		}
	}
	

	for(var i =0;i<colNum;i++)
	{
		for(var j=0;j<rowNum;j++)
		{
			push();
			translate(width/2,height/2);
			translate(x[i][j],y[i][j]);
			scale(50,50);
			fill(0);// 填充白色
			noStroke();
			ellipse(0,0,0.1,0.1); // 画圆形
			pop();
		}
	}

	

	lastTime = tNow;// 记录时刻
}


function getTime()
{
	return millis()/1000;
}

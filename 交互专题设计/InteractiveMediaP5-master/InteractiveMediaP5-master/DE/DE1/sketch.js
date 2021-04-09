var S = 15;
var num = 1000;
var X,Y;
var a = 0.40;
var b = 1.2;
var dt = 0.033;

// 函数setup() ：准备阶段
function setup() {
	createCanvas(400,400);
	X = new Array();
	Y = new Array();
	for(var i=0;i<num;i++)
	{
		X[i] = random(-S,S);
		Y[i] = random(-S,S);
	}
}

// 函数draw()：作画阶段
function draw() {
	fill(255);// 填充白色

	StepDE(dt);
	drawParticles();
}

function StepDE(dt)
{
	for(var i=0;i<num;i++)
	{
		var x = X[i];
		var y = Y[i];

		var dx = sin(a*y)*dt;
		var dy = cos(b*x)*dt;

		x += dx;
		y += dy;

		X[i] = x;
		Y[i] = y;
	}
}

function drawParticles()
{
	push();
	translate(width/2,height/2);
	scale(width/24,height/24);
	strokeWeight(0.02);
	for(var i=0;i<num;i++)
	{
		ellipse(X[i],Y[i],0.2,0.2);
	}
	pop();
}
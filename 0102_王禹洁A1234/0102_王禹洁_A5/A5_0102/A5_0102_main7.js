var particlesQuantity = 10000;
var h=360;
var positionX = new Array(particlesQuantity);
var positionY = new Array(particlesQuantity);
var velocityX = new Array(particlesQuantity).fill(0);
var velocityY = new Array(particlesQuantity).fill(0);

function setup() {
	createCanvas(windowWidth, windowHeight);
	//stroke(168, 200, 255);
	
	for (var particle = 1; particle < particlesQuantity; particle++) {
		positionX[particle] = random(0, width);
		positionY[particle] = random(0, height);
	}
	
	positionX[0] = windowWidth/2;
	positionY[0] = windowHeight/2;
	frameRate(60);
}

function draw() {
	background(0, 128);
	
	velocityX[0] = velocityX[0] * 0.8 + (mouseX - positionX[0]) * 0.3;
	velocityY[0] = velocityY[0] * 0.8 + (mouseY - positionY[0]) * 0.3;
	
	positionX[0] += velocityX[0];
	positionY[0] += velocityY[0];


	for (var particle = 1; particle < particlesQuantity; particle++) {
		var whatever = 1000 / (sq(positionX[0] - positionX[particle]) + sq(positionY[0] - positionY[particle]));
		
		velocityX[particle] = velocityX[particle] * 0.90 + (velocityX[0] - velocityX[particle]) * whatever;
		velocityY[particle] = velocityY[particle] * 0.90 + (velocityY[0] - velocityY[particle]) * whatever;
		
		positionX[particle] += velocityX[particle]+3;
		positionY[particle] += velocityY[particle]+5;
		
		if ((positionX[particle] < 0 && velocityX[particle] < 0) || (positionX[particle] > width && velocityX[particle] > 0)) {
			velocityX[particle] = -velocityX[particle];
		}
		
		if ((positionY[particle] < 0 && velocityY[particle] < 0) || (positionY[particle] > height && velocityY[particle] > 0)) {
			velocityY[particle] = -velocityY[particle];
		}
		r = map(sin(frameCount*10/200),-1,1,0,255); // 随机红色分量
        g = map(sin(frameCount*10/300),-1,1,64,255);   // 随机绿色分量
        b = map(sin(frameCount*10/400),-1,1,128,255); //随机蓝色分量

        stroke(r, g, b);
		circle(positionX[particle], positionY[particle],1);
	}
}

function mousePressed() {
	for (var particle = 1; particle < particlesQuantity; particle++) {
		positionX[particle] = random(0, width);
		positionY[particle] = random(0, height);
	}
}

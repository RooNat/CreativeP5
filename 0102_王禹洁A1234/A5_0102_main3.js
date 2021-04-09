// var seed = "openprocessing";
var nums;
var h=360;
var maxLife = 5;
var noiseScale = 50;
var	simulationSpeed = 0.2;
var fadeFrame = 0;

var padding_top = 100;
var padding_side = 100;
var inner_square = 512;

var particles = [];
var backgroundColor;
var color_from;
var color_to;

function setup(){
	// randomSeed(seed);
	// noiseSeed(seed);
	nums = 100;
	
	backgroundColor = color(20, 20, 20);
	//color_from = color('black');
	//color_to = color('white');
	color_from = color(120,180,220);
	color_to = color(220,140,100);
	
	//createCanvas(windowWidth, windowHeight);
	createCanvas(windowHeight, windowHeight);
	background(backgroundColor);
	
	noStroke();
	smooth();
	
	padding_top = (height - inner_square)/2;
	padding_side = (width - inner_square)/2;
	
	for(var i = 0; i < nums; i++){
		var p = new Particle();
		p.pos.x = random(padding_side, width-padding_side);
		p.pos.y = padding_top;
		particles[i] = p;
	}
	
	background(color(0));
	fill(color(255));
}

function draw(){
	
	++fadeFrame;
	if(fadeFrame % 5 == 0){
		
		blendMode(DIFFERENCE);
		fill(1, 1, 1);
		rect(0,0,width,height);

		blendMode(LIGHTEST);
		//blendMode(DARKEST); //looks terrible. stutters
		fill(backgroundColor);
		rect(0,0,width,height);
	}
	
	blendMode(BLEND);
	
	for(var i = 0; i < nums; i++){
		var iterations = map(i,0,nums,5,1);
		var radius = map(i,0,nums,5,7);
		
		particles[i].move(iterations);
		particles[i].checkEdge();
		
		var alpha = 255;
		
		var particle_heading = particles[i].vel.heading()/PI;
		if(particle_heading < 0){
				particle_heading *= -2;
		}
		var particle_color = lerpColor(particles[i].color1, particles[i].color2, particle_heading);
		
		var fade_ratio; //TODO
		fade_ratio = min(particles[i].life * 5 / maxLife, 1);
		fade_ratio = min((maxLife - particles[i].life) * 5 / maxLife, fade_ratio);

		fill(red(particle_color), green(particle_color), blue(particle_color), alpha * fade_ratio);
		particles[i].display(radius);
	} 
}
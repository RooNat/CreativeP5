function Particle(){

	this.vel = createVector(0, 0);
	this.pos = createVector(random(0, width), random(0, height));
	this.life = random(0, maxLife);
	this.flip = int(random(0,2)) * 2 - 1;
	this.color1 = this.color2 = color('blue');
	
	if(int(random(3)) == 1){
		this.color1 = color_from;
		this.color2 = color_to;
	}
	
	this.move = function(iterations){
		if((this.life -= 0.01666) < 0)
			this.respawnTop();
		while(iterations > 0){
			
			var transition = map(this.pos.x, padding_side, width-padding_side, 0, 1);
			var angle = noise(this.pos.x/noiseScale, this.pos.y/noiseScale)*transition*TWO_PI*noiseScale;
			//var transition = map(this.pos.y, height/5, height-padding_top, 0, 1, true);
			//var angle = HALF_PI;
			//angle += (noise(this.pos.x/noiseScale, this.pos.y/noiseScale)-0.5)*transition*TWO_PI*noiseScale/66;

			this.vel.x = cos(angle);
			this.vel.y = sin(angle);
			this.vel.mult(simulationSpeed);
			this.pos.add(this.vel);
			--iterations;
		}
	}

	this.checkEdge = function(){
		if(this.pos.x > width - padding_side|| this.pos.x < padding_side
		|| this.pos.y > height - padding_top
		|| this.pos.y < padding_top){
			this.respawnTop();
		}
	}
	
	this.respawn = function(){
		this.pos.x = random(0, width);
		this.pos.y = random(0, height);
		this.life = maxLife;
	}
	
	this.respawnTop = function() {
		this.pos.x = random(padding_side, width-padding_side);
		this.pos.y = padding_top;
		this.life = maxLife;
	}

	this.display = function(r){
		ellipse(this.pos.x, this.pos.y, r,r);
	}
}

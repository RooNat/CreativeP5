function Particle(x, y, targetX, targetY, maxForce, s, b) {
  
  this.pos = new p5.Vector(x, y);
  this.vel = new p5.Vector(0, 0);
  this.acc = new p5.Vector(0, 0);
	this.target = new p5.Vector(targetX, targetY);
  this.maxForce = maxForce * random(0.8, 1.2);
	this.sat = s;
	this.bright = b;
  
  this.move = function() {
    let distThreshold = random(10,30);
    
    let steer = new p5.Vector(this.target.x, this.target.y);
    let distance = dist(this.pos.x, this.pos.y, this.target.x, this.target.y);
		if (distance > 0.5) {
			steer.sub(this.pos);
			steer.normalize();
			steer.mult(map(min(distance, distThreshold), 0, distThreshold, 0, this.maxForce));
			this.acc.add(steer);
		}
    
		let mouseDistance = dist(this.pos.x, this.pos.y, mouseX, mouseY);
		if (mouseDistance < repulsionRadius) {
			let repulse = new p5.Vector(this.pos.x, this.pos.y);
			repulse.sub(mouseX, mouseY);
			repulse.mult(map(mouseDistance, 100, 0, 0, 0.5));
			this.acc.add(repulse);
		}
		
    this.vel.mult(0.90);
    
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  
  this.display = function() {
    strokeWeight(1);
    stroke(0, 100);
    line(this.target.x, this.target.y, this.pos.x, this.pos.y);
    
    //strokeWeight(6);
    var alp=random(40,100);
    stroke(140, this.sat, this.bright,alp);
    var u=random(2,3);

    Lihua_0102(this.pos.x, this.pos.y,u,alp,true);
    //circle(this.pos.x, this.pos.y,2);
    //Longandshort2_0102(this.pos.x, this.pos.y,u,u,5,7,2.2,alp,true);
  }
}

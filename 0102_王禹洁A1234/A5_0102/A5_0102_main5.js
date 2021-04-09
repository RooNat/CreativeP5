let palette;
let points = [];
let points_num = 100;
let sw = 1;

let angleMax = 120; // 角度为0到1的噪声时的宽度（在这种情况下为0°到180°）

function setup() {
	createCanvas(700, 700);
	colorMode(HSB, 360, 100, 100, 100);
	angleMode(DEGREES);
	noSmooth();
	points = [];
	for (let i = 0; i < points_num; i++) {
		let x = random(width);
		let y = random(height);
		let p = createVector(x, y);

		let r=map(sin(random(0,100)),-1,1,60,255);
		let g=map(cos(random(0,100)),-1,1,64,255);
		let b=map(sin(random(0,100)),-1,1,128,255);
		p.color = color(r,g,b);
		p.ns = random(500, 1800);
		points.push(p);
	}

	background(0, 0, 100);
}

function draw() {
	// blendMode(BLEND);
	// copy(0,0,width,height,-5,-5,width+10,height+10);
	// background(0, 0, 100, 1);
	// blendMode(ADD);
	// clear();
	for (let p of points) {
		//根据点p的位置使用噪声成角度
		let angle = noise(p.x / p.ns, p.y / p.ns) * angleMax;
		//根据角度创建向量并将其添加到点p
		p.add(p5.Vector.fromAngle(angle));
		if (p.x > width + sw) {
			p.x = 0;
			p.y = random(height);
		}
		if (p.y > height + sw) {
			p.x = random(width);
			p.y = 0;
		}
		if (p.x < 0 - sw) {
			p.x = width;
			p.y = random(height);
		}
		if (p.y < 0 - sw) {
			p.x = random(width);
			p.y = height;
		}

		for (let q of points) {
			if (q.equals(p) != true) {
				let dMax = 150;
				let distance = p5.Vector.dist(p, q);
				let distance_ratio = distance / dMax;
				if (distance < dMax) {
					stroke(q.color);
					strokeWeight(sw - sw * distance_ratio);
					// point(q.x, q.y);
					// strokeWeight(3 - distance_ratio * 3);
					// stroke(0, 0, 100, 100 - distance_ratio * 100);
					colorMode(RGB);
					let nc = lerpColor(q.color, p.color, 0.5);
					colorMode(HSB, 360, 100, 100, 100);
					stroke(nc);
					// stroke(0,0,100);
					line(p.x, p.y, q.x, q.y);
				}
			}
		}
	}
	if (frameCount % 500 == 0) {
		setup();
	}
}



class Smoke extends Particle {
  float size, alpha;
  float theta;
  Smoke(float x, float y, float _size) {
    super(x, y);
    size = _size;
    alpha = random(10, 150);
    lifespan = maxLifespan = 30;
    lifeRate = random(0.4, 1.25);
    
    //初始化转动的角度和初速度
    angle = random(-45, 45);
    aVelocity = random(-2, 2);
    
    //设置初速的和角速度
    velocity.set(0, getSpeed(random(-100, -100)));
    acceleration.mult(0);
    type = 0;
    theta=random(TAU);
    hue=10;
  }
  
  void drawShape() {
    //stroke(0, 0, 0, alpha);
    //strokeWeight(size);
    //point(0, 0);
    rotate(theta);
    fill(hue + lifespan * 1.2, 360, 360, alpha);
    noStroke();
    triangle(-size / 2, 0, size / 2, 0, 0, size * sqrt(3) / 2);
  }
}

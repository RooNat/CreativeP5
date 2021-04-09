class Particle {
  PVector location, velocity, acceleration, origin;
  float angle, aVelocity, aAcceleration;
  float lifespan, lifeRate, maxLifespan;
  int type, hue;

  Particle(float x, float y) {
    //默认物体绕着自己中心点旋转
    origin = new PVector(x, y);
    
    //初始化位置为（0，0）
    location = new PVector();
    
    //一个向下的加速度，模拟重力的效果
    acceleration = new PVector(0, 0.05);
    
    //返回一个任意的方向、大小为1的速度
    velocity = PVector.random2D();
    lifespan = maxLifespan = 50;
    
    //用于控制生命流逝的快慢
    lifeRate = random(0.35, 1);
    hue = 165;
    type = 1;
  }
  
  //根据粒子在生命周期内移动的距离计算它的速度大小
  float getSpeed(float s){
    float t = maxLifespan / lifeRate;
    return s / t;
  }

  void run() {
    update();
    display();
  }
  
  void update() {
    //平移
    velocity.add(acceleration);
    location.add(velocity);
    
    //转动
    aVelocity += aAcceleration;
    angle += aVelocity;
    
    //生命流逝
    lifespan -= lifeRate;
  }

  boolean isDead() {
    if (lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }

  void display() {
    pushMatrix();
    translate(origin.x, origin.y);
    rotate(radians(angle));
    translate(location.x, location.y);
    scale(map(lifespan, 0, maxLifespan, 0, 1));
    drawShape();
    popMatrix();
  }

  void drawShape() {
    stroke(hue, 255, 255);
    strokeWeight(30);
    point(0, 0);
  }
}

class Fire extends Particle {
  //存储包含的粒子
  ArrayList<PVector> plist;
  Fire(float x, float y) {
    super(x, y);
  
  //设置初速度
    PVector v = new PVector(mouseX - pmouseX, mouseY - pmouseY);
    v.mult(0.1);
    velocity.mult(getSpeed(100)).add(v);

  //初始化需要绘制的三个粒子
    plist = new ArrayList();
    for (int i = 0; i < 3; i++) {
      float xOffset = random(-10, 10);
      float yOffset = random(-10, 10);
      //float hue = random(50);
      float hue=165;
      //向量的每个维度分别表示该粒子的：x坐标、y坐标、色调
      plist.add(new PVector(xOffset, yOffset, hue));
    }
  }

  void update() {
    super.update();

  //添加烟雾粒子
    if (int(random(5)) == 0) {
      int spawnCount = int(random(3))+1;
      for (int i = 0; i < spawnCount; i++) {
        spawn();
      }
    }
  }

  void spawn() {
    //根据当前火焰粒子的生命长度来确定烟雾粒子的大小
    float size = random(25, 50)*map(lifespan, maxLifespan, 0, 1, 0);
    if (size > 0) {
      //添加一个烟雾粒子
      ps.addSmoke(location.x + origin.x , location.y + origin.y, size);
    }
  }

  void drawShape() {
    for (PVector p : plist) {
      //绘制大圆
      //stroke(p.z, 255, 255, 20);
      stroke(hue+lifespan*1.5,360,360,50);
      strokeWeight(80);
      point(p.x, p.y);

    //绘制小圆
      //stroke(p.z, 255, 255, 100);
      stroke(hue + lifespan * 1.5, 360, 360, 180);
      strokeWeight(30);
      point(p.x, p.y);
    }
  }
}

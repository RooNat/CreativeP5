ParticleSystem ps;

void setup() {
  size(600, 600);
  colorMode(HSB, 360);
  ps = new ParticleSystem();
}

void draw() {
  //根据火焰粒子的数量来确定背景颜色的饱和度
  background(300, ps.getSize(), 360);
  ps.run();

  //if (mousePressed && mouseButton == LEFT) {
    //按一次鼠标会执行多次这里的函数
  ps.addFire(mouseX, mouseY);
  //}
}

//class ParticleSystem {}
//class Particle {}
//class Fire extends Particle{}
//class Smoke extends Particle{}

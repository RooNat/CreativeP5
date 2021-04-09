class ParticleSystem {
  ArrayList<Particle> plist;

  ParticleSystem() {
    plist = new ArrayList<Particle>();
  }

  void run() {
    for (int i = plist.size() - 1; i >= 0; i--) {
      Particle p = plist.get(i);
      p.run();
    
    //删除生命走到尽头的粒子
      if (p.isDead()) {
        plist.remove(i);
      }
    }
  }

  void addFire(float x, float y) {
    plist.add(new Fire(x, y));
  }

  void addSmoke(float x, float y, float size) {
    plist.add(new Smoke(x, y, size));
  }

  //返回粒子系统的类型是Fire的粒子的数量
  int getSize() {
    int cnt = 0;
    for(Particle p: plist){
      //如果这粒子是属于Fire类型的，它的type为1，否者为0
        cnt += p.type;
    }
    return cnt;
  }
}

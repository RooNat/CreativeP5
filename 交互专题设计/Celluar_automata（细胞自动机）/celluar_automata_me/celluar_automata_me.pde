CA ca;

int delay=0;

void setup(){
  size(800,400);
  background(255);
  ca=new CA();
}

void draw(){
  ca.display();
  ca.generate();
  //if(ca.generation<height/ca.w){
  //  ca.generate();
  //  }
  if(ca.finished()){
    delay++;
    if(delay>30){
    background(255);
    ca.randomize();
    ca.restart();
    delay=0;
    }
  }
}

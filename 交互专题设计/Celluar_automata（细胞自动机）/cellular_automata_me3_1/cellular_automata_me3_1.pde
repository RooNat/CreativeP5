
void setup(){
  size(1024,768);
  
}

void draw(){
}

void mousePressed(){
}
class Cell{
  float state,previous;
  Cell(){
    state=random(255); //初始状态 色彩
    previous=state;
  }
  void savePrevious(){
    previous=state;
  }
  void newState(float s){
    state=s;
  }
}
class CA{
  int columns,rows,left,right,up,down;
  float total,average,nextState;
  Cell[][] board;
}

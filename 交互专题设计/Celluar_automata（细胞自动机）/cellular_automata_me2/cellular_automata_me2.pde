int spaceSize = 50;
float rectSize;
int nStates =5;
Cell[][] cellSpace = new Cell[spaceSize][spaceSize];

void setup() {
  size(600, 600);
  //cell creation and inicialization
  for (int i =0; i < spaceSize; i++) {
    for (int j =0; j < spaceSize; j++) {
      cellSpace[i][j] = new Cell(i, j, 0);
    }
  }
  cellSpace[spaceSize/2][spaceSize/2].newState(1);
  rectSize = width / spaceSize; //calculate size to fill canvas
  background(255);
  ellipseMode(CENTER);
  colorMode(HSB, nStates, 255, 255);
}

void draw() {
  frameRate(3);
  noStroke();
  smooth(8);
  storePrevious();
  //draw each cell and apply rule
  for (int i =1; i < spaceSize-1; i++) {
    for (int j =1; j < spaceSize-1; j++) {
      cellSpace[i][j].display(rectSize);//draw
      //apply rule here
      cellSpace[i][j].newState(applyRule(i, j));
    }
  }
}

void storePrevious() {
  for (int i =1; i < spaceSize-1; i++) {
    for (int j =1; j < spaceSize-1; j++) {
      cellSpace[i][j].oldState();
    }
  }
}

int applyRule(int x, int y) {
  int r=1;//range size
  int newState =cellSpace[x][y].previous;
  if (random(1)>0) {
    if (cellSpace[x][y].previous==0) {
      int sum=0;
      for (int i =-r; i <=r; i++) {
        for (int j =-r; j <=r; j++) {
          sum+=cellSpace[x+i][y+j].previous;
        }
        if (sum==2) newState = 1;
      }
    }
    else {
      newState = (cellSpace[x][y].previous+1)%nStates;
    }
  }
  return newState;
}

/***************************************
 This class contains an individual cell
 ****************************************/

class Cell {
  float x, y;
  int state;
  int previous; 

  Cell(float x_, float y_, int nStates) {
    x=x_;
    y=y_;
    state = (int)random(nStates);
    previous = state;
  } 

  void newState(int s) {
    state = s;
  }

  void oldState() {
    previous= state;
  }

  void display(float size) {
    //noFill();
    strokeWeight(1);
    //stroke(int(map(sin(frameCount/200.0),-1,1,100,255)),int(map(sin(frameCount/300.0),-1,1,0,255)),int(map(sin(frameCount/400.0),-1,1,100,255)), 100);
    if (previous >0) {
      float u=random(5);
      Meihua(int(x*size),int(y*size),u,100,true);
    }
  }
  void Meihua(int x0,int y0,float u,int alp,boolean iscolor){
   if(iscolor){
       int r = int(map(sin(frameCount*50/200.0),-1,1,100,255)); // 随机红色分量
       int g = int(map(sin(frameCount*40/300.0),-1,1,0,255));   // 随机绿色分量
       int b = int(map(sin(frameCount*30/400.0),-1,1,100,255)); //随机蓝色分量
       stroke(r,g,b,alp); // 设置线条颜色、透明度
    }
    createVector[] VecArray;
    VecArray=new createVector[360];
    for(int i=0;i<360;i++){
      float theta=i*TAU/360;
      float r1=1+pow(1.0*sin(theta*2.5),2);
      int x=int(x0+u*r1*cos(theta)+0.5);
      int y=int(y0+u*r1*sin(theta)+0.5);
      VecArray[i]=new createVector(x,y);
    }
    renderline(VecArray);
  }
    void renderline(createVector VecArray[]){
    for(int i=0;i<VecArray.length;i++)
    {
      createVector P0=VecArray[i];
      createVector P1;
      if(i==VecArray.length-1){
        P1=VecArray[0];
      }
      else{
        P1=VecArray[i+1];
      }
      line(P0.x,P0.y,P1.x,P1.y);
  }
  }
}

import peasy.*;
PeasyCam cam;
int sSize=80;

int dim=2;
int AS=sSize/dim;
boolean[][][] CA;
int z=0;
int res=10;
boolean record=false;
boolean run=false;
void setup(){
  size(600,600,P3D);
  cam=new PeasyCam(this,100); //初始化
  cam.setMinimumDistance(50);//最小距离
  cam.setMaximumDistance(500); //最大距离
  cam.setSuppressRollRotationMode();//?
  reset();  //初始化
}
void reset(){  //初始化数组
  CA=new boolean[AS][AS][AS];
  for(int i=AS/2-res;i<AS/2+res;i++){
     for(int j=AS/2-res;j<AS/2+res;j++){
       if(random(1)<0.5){
         CA[i][j][0]=true;
       }
       else{
         CA[i][j][0]=false;
       }
    }
  }
  
}
void draw(){
  background(0);
  lights();
  //添加灯光
  directionalLight(50,219,220,1,-1,-1);
  directionalLight(250,200,50,-1,1,-1);
  directionalLight(50,189,205,-1,-1,1);
  ambientLight(200,200,255);//环境光
  pointLight(51,102,126,35,40,500);
  if(run){
    if(frameCount%25==0){
      z++;
      update();
    }
  }
  
  for(int i=0;i<AS;i++){
     for(int j=0;j<AS;j++){
       for(int k=0;k<AS;k++){
         if(CA[i][j][k]){
           showBox(i,j,k);
         }
       }
    }
  }
  showSimulationBox();
  
  if(record){
    saveFrame("cube-####.jpg");
  }
}

void update(){
  if(z>=AS){
    reset();
    z=1;
  }
  for(int i=0;i<AS;i++){
    for(int j=0;j<AS;j++){
      int c=getNeighborCount(i,j,z-1);
      if(CA[i][j][z-1]){  //增殖规则
        if(c<2){
          CA[i][j][z]=false;
        }
        else if(c==2){
          CA[i][j][z]=true;
        }
        else if(c==3){
          CA[i][j][z]=false;
        }
        else if(c==4){
          CA[i][j][z]=false;
        }
        else{
          CA[i][j][z]=false;
        }
      }
      else{
        if(c==3){
          CA[i][j][z]=true;
        }else{       
          CA[i][j][z]=false;
        }
      }
    }
  }
}

int getNeighborCount(int i,int j,int z){ //计算邻域活跃细胞数
  int count=0;  //活跃细胞数
  if(CA[(i-1+AS)%AS][j][z]) count++; //left
  if(CA[(i-1+AS)%AS][(j+1)%AS][z]) count++; //left top
  if(CA[(i-1+AS)%AS][(j-1+AS)%AS][z]) count++; //left bottom
  if(CA[i%AS][(j+1)%AS][z]) count++; //top
  if(CA[i%AS][(j-1+AS)%AS][z]) count++; // bottom
  if(CA[(i+1)%AS][j][z]) count++; //right
  if(CA[(i+1)%AS][(j+1)%AS][z]) count++; //right top
  if(CA[(i+1)%AS][(j-1+AS)%AS][z]) count++; //right bottom
  return count;
}


void showSimulationBox(){
  pushMatrix();
  translate(sSize/2,sSize/2,sSize/2); 
  scale(sSize,sSize,sSize);//缩放
  stroke(255);
  strokeWeight(0.9/sSize);
  noFill();
  box(1,1,1);
  popMatrix();  
}

void showBox(int x,int y,int z){
  pushMatrix();
  translate(x*dim+dim/2,y*dim+dim/2,z*dim+dim/2);
  scale(dim,dim,dim);
  fill(100);
  stroke(100);
  strokeWeight(1.0/dim);
  box(1,1,1);
  popMatrix();
}

void keyPressed(){
  if(key==' '){
    z=z+1;
    update();
  }
  if(key=='S'){
    reset();
    z=0;
  }
  if(key=='r'){
    run=!run;
  }
  if(key=='b'){
    record=!record;
  }
}

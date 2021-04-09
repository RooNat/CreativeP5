
class CA{
  int[] cells;  //细胞组
  int generation;  //迭代次数
  int[] ruleset={1,0,0,1,0,0,1,1}; //存储规则数组（可以自定义）
  int w=5;  //细胞宽度（每一个细胞是10*10的小方块）
  int w2=2;
  createVector[] Ve;
  CA(){    //初始化
    cells=new int[width/w];
    for(int i=0;i<cells.length;i++){
      cells[i]=0;
    }
    cells[cells.length/2]=1; //起初只有中间状态为1（可更改）
    generation=0;//初始化迭代次数
  }
  void randomize(){
    for(int i=0;i<8;i++){
      ruleset[i]=int(random(2));  //随机生成规则
    }
  }
  
  void restart(){   //重新初始化
    for(int i=0;i<cells.length;i++){
      cells[i]=0;
    }
    cells[cells.length/2]=1;
    generation=0;
  }
  //创建一个新代的过程
  void generate(){
    //为了赋新值而创建新的数组
    int[] nextgen= new int[cells.length];
    //忽略边界
    for(int i=1;i<cells.length-1;i++){
      int left=cells[i-1];
      int me=cells[i];
      int right=cells[i+1];
      nextgen[i]=rules(left,me,right);//开始为新代赋初值
    } 
    cells=nextgen;
    generation++;         //叠加代数
  }
  
  int rules(int a,int b,int c){
    if (a == 1 && b == 1 && c == 1) return ruleset[0];
    if (a == 1 && b == 1 && c == 0) return ruleset[1];
    if (a == 1 && b == 0 && c == 1) return ruleset[2];
    if (a == 1 && b == 0 && c == 0) return ruleset[3];
    if (a == 0 && b == 1 && c == 1) return ruleset[4];
    if (a == 0 && b == 1 && c == 0) return ruleset[5];
    if (a == 0 && b == 0 && c == 1) return ruleset[6];
    if (a == 0 && b == 0 && c == 0) return ruleset[7];
    return 0;
  }
  
  void display(){
    for(int i=0;i<cells.length;i++){
      if(cells[i]==1) Meihua(i*w,generation*w,float(w),100,true);
      //else Lihua(i*w2,generation*w2,float(w2),100,true);
      noStroke();
      //rect(i*w,generation*w,w,w);
      
    }
  }
  
  boolean finished(){      //用于设置循环
    if(generation>height/w){
      return true;
    }
    else{
      return false;
    }
  }
  void Meihua(int x0,int y0,float u,int alp,boolean iscolor){
    if(iscolor){
       int r = int(map(sin(frameCount/200.0),-1,1,100,255)); // 随机红色分量
       int g = int(map(sin(frameCount/300.0),-1,1,0,255));   // 随机绿色分量
       int b = int(map(sin(frameCount/400.0),-1,1,100,255)); //随机蓝色分量
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
   void Lihua(int x0,int y0,float u,int alp,boolean iscolor){
    if(iscolor){
       int r = int(map(sin(frameCount/200.0),-1,1,0,255)); // 随机红色分量
       int g = int(map(sin(frameCount/200.0),-1,1,64,255));   // 随机绿色分量
       int b = int(map(sin(frameCount/200.0),-1,1,128,255)); //随机蓝色分量
       stroke(r,g,b,alp); // 设置线条颜色、透明度
    }
    createVector[] VecArray;
    VecArray=new createVector[360];
    for(int i=0;i<360;i++){
      float theta=i*TAU/360;
      float r1=1+pow((3*sin(theta*3)),2);
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

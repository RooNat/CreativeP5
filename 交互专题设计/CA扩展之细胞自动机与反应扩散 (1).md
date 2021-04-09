**班级：数媒1801班                     学号：1191180102            姓名：王禹洁**

本次实验我针对细胞自动机（cellular automata)和反应扩散(reation diffusion)进行了研究调查以及模拟，下面将记录我的实验过程。

## 细胞自动机

在《代码本色》中，已经对细胞自动机进行了很多解释。其中有一句话是：细胞自动机构建出了一个随时间推移发生状态的系统。

以我自己对细胞自动机的理解，细胞自动机中的每一个新代的细胞所对应的状态都是由旧代相对应位置的细胞及其邻居的状态共同决定的。即具有个人经验和社会经验。

![图片](https://uploader.shimo.im/f/7vjsL4DimWW8GVVF.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

细胞自动机中有几个必不可少的条件：网格，状态集，邻居，还有规则。

![图片](https://uploader.shimo.im/f/HqJA1ln1QI3vR24o.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

**除此之外，还需要注意几点：**

1. 在细胞自动机中，可以用不同颜色代表不同状态，例如可以用白色代表0状态，黑色代表1状态。
2. 规则可以自己制定。一维CA有256条规则，不同规则下形成的图案也是不同的：

例如 Rule90:                           RUle30:

![图片](https://uploader.shimo.im/f/jTkO9VqslUr2dj8D.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/HjtMajs4FuJl72ky.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

了解这些之后我开始根据《代码本色》的教程制作一维细胞自动机了：

1. 首先要构造一个细胞类CA，其中有两个细胞组（数组），一个用来存放细胞状态，一个用来存放规则数组。
```java
int[] cells;  //细胞组
int[] ruleset={1,0,0,1,0,0,1,1}; //存储规则数组（可以自定义）
```
2. 为了在屏幕上显示，要将细胞设置为小方块，而非单个像素，因此需要定义方块大小。
```java
int w=5;  //细胞宽度（每一个细胞是10*10的小方块）
```
3. 接下来需要在CA类中实现细胞的一系列操作：

![图片](https://uploader.shimo.im/f/3vwE9C4qbCvqtA5D.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

在构造函数中初始化：

```java
CA(){    //初始化
    cells=new int[width/w];
    for(int i=0;i<cells.length;i++){
      cells[i]=0;
    }
    cells[cells.length/2]=1; //起初只有中间状态为1（可更改）
    generation=0;//初始化迭代次数
  }
```
随机生成规则：
```java
  void randomize(){
    for(int i=0;i<8;i++){
      ruleset[i]=int(random(2));  //随机生成规则
    }
  }
```
重新初始化(重新将第一代的中间设置为状态1），将迭代次数归0：
```java
 void restart(){   //重新初始化
    for(int i=0;i<cells.length;i++){
      cells[i]=0;
    }
    cells[cells.length/2]=1;
    generation=0;
  }
```
创建一个新代的过程：这里涉及到对边界的处理，我们对于边界的处理即是不管边界，让序号从1开始。
```java
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
    generation++;         //叠加代数
  }
```
制定规则：
```java
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
```
显示在屏幕上：在《代码本色》中，示例程序使用小方块代表细胞进行显示，这里我想联系一下上个学期的知识，用上个学期写的曲线库进行显示。即：**如果状态为1，则画一个相应图形，否则就不画。这是需要用到上个学期写的库，同时，因为Processing中没有createVector这一函数，因此我们需要自己写一个。**
```java
class createVector{
  int x;
  int y;
  createVector(int x,int y){
    this.x=x;
    this.y=y;
  }
}
```
**自己写的封装的图形函数，其中x0,y0为细胞所在的点，u为细胞大小，alp为细胞不透明度，iscolor表示是否使用渐变色：**
```java
void Meihua(int x0,int y0,float u,int alp,boolean iscolor){
    if(iscolor){
       int r = int(map(sin(frameCount/200.0),-1,1,100,255)); // 随机红色分量
       int g = int(map(sin(frameCount/300.0),-1,1,0,255));   // 随机绿色分量
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
```
**这时可以画在屏幕上了：**
```java
  void display(){
    for(int i=0;i<cells.length;i++){
      if(cells[i]==1) Meihua(i*w,generation*w,float(w),100,true);
      //else Lihua(i*w2,generation*w2,float(w2),100,true);
      noStroke();
      //rect(i*w,generation*w,w,w);
      
    }
  }
```
最后设置循环机制，当细胞繁殖铺满屏幕时，重新开始进行新的循环：
```java
boolean finished(){      //用于设置循环
    if(generation>height/w){
      return true;
    }
    else{
      return false;
    }
  }
```
4. 创建好CA类，就可以使用Processing中的setup()和draw()进行绘制。最后的成果如下：

![图片](https://uploader.shimo.im/f/P4x7iaLaXDMzpTvK.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

![图片](https://uploader.shimo.im/f/j4wi90Wp5DZg8IYF.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

![图片](https://uploader.shimo.im/f/DZhddeEd2qFkqlnk.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

![图片](https://uploader.shimo.im/f/5uUGGfBiDykv1YNp.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

![图片](https://uploader.shimo.im/f/3cCeIzPcvqTodrfG.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

![图片](https://uploader.shimo.im/f/WXt5IfN108po0fng.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

![图片](https://uploader.shimo.im/f/pkaISDWzwTuW7C6r.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

![图片](https://uploader.shimo.im/f/ltUHhrYHEzNDEkgF.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

**运行一维细胞自动机，自动机会自行循环并改变颜色生成不同规则下的细胞。**

**以上是对一维细胞自动机的改造，在《代码本色》中，还有二维细胞自动机和相应的衍生——生命游戏。事实上，二维细胞自动机即是要考虑到出自身以外的周围八个邻居的状态。**

![图片](https://uploader.shimo.im/f/abQCSlc4AiD1f91Q.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

**在生命游戏中：0代表死亡，1代表活着。一般使用白和黑两种颜色表示。它有如下几条规则：**

1. **状态1->状态0。**死亡 如果某个细胞处于“活着”状态（状态为1），在以下情况下，将会变成“死 亡”状态（状态变为0）。 群体过剩： 如果细胞有4个及以上的邻居处于“活着”状态，则该细胞死亡。 孤独： 如果“活着”的邻居数量等于或少于1个，则细胞死亡。
2. **状态0->状态1。**新生 处于“死亡”状态（状态为0）的细胞，如果它周围刚好有3个“活着”的邻居， 则它也会变为“活着”状态。
3. **状态保持不变。**静止 在其他情况下，细胞的状态保持不变。让我们列举所有这样的场景。 保持“活着”： 如果细胞是“活着”的，而且周围有2个或3个活着的邻居，它将继 续“活着”。 保持“死亡”： 如果细胞是“死亡”的，而且周围“活着”的邻居数不等于3，它将继 续保持“死亡”状态。

**基本的生命游戏一般是这样的：**

![图片](https://uploader.shimo.im/f/EpBEttmNQf6nzr5a.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

为了更加可视化，《代码本色》中对其进行了颜色设定上的改变。即使用两个数组，分别记录当前状态和之前的状态。对于状态发生变化的细胞进行颜色的改变。

```java
int state;
int previous;
void savePrevious() {
    previous = state; 
  }
  void newState(int s) {
    state = s;
  }
```
![图片](https://uploader.shimo.im/f/QNjenw7PQzmPCzSS.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

**借用这一概念，将初始点设在屏幕中心，向四周扩散。将细胞同样设置为自己写的库，同时设置大小的变化。规则是借鉴的网上的一个细胞自动机模型：**

```java
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
```
随着时间的变化，可以产生的变化如下：
![图片](https://uploader.shimo.im/f/7au6G5V5KtxD89SS.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/BfyKmbpteXGopBkJ.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/9r5RG8le2yQXgPMc.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/5hjYcRRtofl8FiHU.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/JRhbEU07zrz8Z3xj.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/ZxyFNrSr2FFVeGqm.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

二维细胞自动机还可以以3D形式显示，使用Processing设置摄像头和灯光参数，设置环境光源以及点光源，可以模拟生命游戏。

下面将简单介绍一下做3D细胞自动机的过程：

1. 借用Processing,首先需要一个library——peasy。导入成功后，创建一个PeasyCam对象。同时进行相机的初始化：
```java
import peasy.*;
PeasyCam cam;
void setup(){
  size(600,600,P3D);
  cam=new PeasyCam(this,100); //初始化
  cam.setMinimumDistance(50);//最小距离
  cam.setMaximumDistance(500); //最大距离
  cam.setSuppressRollRotationMode();//?
  reset();  //初始化
}
```
2. 为了模拟细胞，首先要设置一个虚拟盒子（类似于平面内的画布大小）大小，同时设置细胞大小。同时声明一个三维数组来存储细胞。声明好变量后，第一步创建虚拟盒子。
```java
int sSize=80;
int dim=2;
int AS=sSize/dim;
boolean[][][] CA;
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
```
3. 为了模拟生命游戏，我们同时也需要几个函数：

![图片](https://uploader.shimo.im/f/tKHMcUBqEoEdAgol.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

初始化数组是初始化第一层的二维数组，控制边界：

```java
void reset(){  //初始化数组
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
```
初始化数组后需要计算邻域活跃的细胞数，即遍历邻域：
```java
int getNeighborCount(int i,int j,int z){ //计算邻域活跃细胞数
  int count=0;  //活跃细胞数
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
```
迭代更新即针对邻域活跃细胞制定规则，可根据生命游戏的规则制定：
```java
if(CA[i][j][z-1]){  //增殖规则
        if(c<2){
          CA[i][j][z]=false;
        }
        else if(c==2){
          CA[i][j][z]=true;
        }
        else if(c==3){
          CA[i][j][z]=true;
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
```
最后就是画盒子了。与模拟虚拟盒子差不多。
4. 基本操作完成后，根据情况设定了一些键盘操作，来控制自动机的生长。下面是截图：

（1）初始化之后：有一层底层细胞：

![图片](https://uploader.shimo.im/f/sw3Ieyo1ICoOUSBM.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

（2）按r键可以开始进行生长：一层为新的一代

![图片](https://uploader.shimo.im/f/v79wH45hJ5tvGhvw.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/9WlMKfT0b6Ve9tRy.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

（3)按S可以重新开始，按b可以截图

![图片](https://uploader.shimo.im/f/KAiu8WvZN9rYwEDi.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/0zDJgLHzYQCgEQo5.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

同时，当到达虚拟盒子的边缘时，自动机会自行回到初始状态，重新循环。与一维细胞自动机差不多。

![图片](https://uploader.shimo.im/f/LZ4UUgCWZ7c9fG8n.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

**当我改变其中的一条规则时：**

```java
 else if(c==3){
          CA[i][j][z]=false;
        }
```
细胞自动机经常会出现一处单增长的情况（如图），所以规则也不是随随便便制定的：
![图片](https://uploader.shimo.im/f/adznBGInGc5cWxG7.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

或者突然卡住不增长了的情况：

![图片](https://uploader.shimo.im/f/83VltpxcRONOCzjz.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

我在网上找资料时，还发现了许多做出了三维自动机的人，即有26个邻居，如果有时间的话，好想知道是怎么做的呀，先附个图：

![图片](https://uploader.shimo.im/f/hE6nGyqSj0MWPmsq.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

## 反应扩散过程

**反应扩散过程很有意思，下面我根据我的理解来讲一讲：**

首先在一个容器中有两种物质：A和B。

A是这个容器的主人，B是客人。两者都在以一定的速率繁殖扩散。由于A比较熟悉这片区域，它的扩散速率比B快一些。除了A自身扩散外，容器还会以一定的速率向里面添加A。看起来A是以一定的压倒性优势去把B驱逐出容器的，但是B有一个功能就是：它可以将A转化为B。即可以吃掉A。那这样下去的话，A多管什么用，不都喂给B了吗？最后容器里不就都是B了吗？这样就不平衡了，于是为了控制B，容器又以一定的速率释放灭B剂，即以一定的速率杀死B，控制B的增长。但是同时杀死B的速率又不能小于增加A的速率。一个容器内，A和B以这种方式不断进行扩散。

下面是官方教程中的图：

![图片](https://uploader.shimo.im/f/SgJpMKbC4C2AVfo2.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

**由此，反应扩散方程有如下几个特点：**

![图片](https://uploader.shimo.im/f/7sPkBRYyrUUmFUjQ.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

1. 相关参数（我们需要自己定义的）有：

（1）A,B：物质初始量

（2）Da,Db：A和B的扩散速率

（3）拉普拉斯矩阵

（4）feed(f)：给A进料的速率

（5）kill(k)：杀死B的速率

2. 其中以上参数需要满足的条件：

（1）初始量：A>=B

（2）Da>Db

（3）k>=feed

（4）拉普拉斯矩阵：二维矩阵 3*3卷积

3. 在Processing中，A和B事实上就是用来控制像素颜色的物质。因此初始化时A=1,B=0，覆盖所有像素，同时再自定义一小部分区域播种点B，以使产生反应来扩散。

**下面是相关代码实施：**

1. 初始化，定义参数和数组：其中grid为原像素矩阵，next为储存变换后的像素矩阵
```java
var grid;
var next;
var da=1;//扩散速率A
var db=0.5; //扩散速率B      //可变换
var f=0.055;  //A的进料速率
var k=0.062;  //B的杀死速率  //可改变（动态改变）
```
2. 为像素中的a,b物质附值：
```java
for(var x=0;x<width;x++){
    grid[x]=[];
    next[x]=[];
    for(var y=0;y<height;y++){
      grid[x][y]={a:1,b:0};  //每一个二维数组的每一格都有a,b两种物质
      next[x][y]={a:1,b:0};
    }
  }
```
3. 选择一小块播种b物质，以使其扩散:
```java
 for(i=100;i<110;i++){
    for(var j=100;j<110;j++){
      grid[i][j].b=1;   //倾倒一小块区域的b 
      //改进：倾倒多处
    }
  }
```
4. 定义拉普拉斯矩阵并进行卷积：
```java
function laplaceA(x,y){
  //可变换
  var sumA=0;
  sumA+=grid[x][y].a*(-1);
  sumA+=grid[x-1][y].a*(0.20);
  sumA+=grid[x+1][y].a*(0.2);
  sumA+=grid[x][y-1].a*(0.2);
  sumA+=grid[x][y+1].a*(0.20);
  sumA+=grid[x-1][y-1].a*(0.05);
  sumA+=grid[x+1][y+1].a*(0.05);
  sumA+=grid[x-1][y+1].a*(0.05);
  sumA+=grid[x+1][y-1].a*(0.05);
  return sumA;
}

function laplaceB(x,y){
   var sumB=0;
  sumB+=grid[x][y].b*(-1);
  sumB+=grid[x-1][y].b*(0.20);
  sumB+=grid[x+1][y].b*(0.2);
  sumB+=grid[x][y-1].b*(0.2);
  sumB+=grid[x][y+1].b*(0.20);
  sumB+=grid[x-1][y-1].b*(0.05);
  sumB+=grid[x+1][y+1].b*(0.05);
  sumB+=grid[x-1][y+1].b*(0.05);
  sumB+=grid[x+1][y-1].b*(0.05);
  return sumB;
}
```
5. 执行公式：
```java
for(let x=1;x<width-1;x++){
    for(let y=1;y<height-1;y++){ //不做边缘像素
      var a=grid[x][y].a;
      var b=grid[x][y].b;
      //f= (x*.000088)+0.005;
      //k = (y*0.00004)+0.06;
      next[x][y].a=a+(da*laplaceA(x,y)-a*b*b+f*(1-a)); //公式区域
      next[x][y].b=b+(db*laplaceB(x,y)+a*b*b-(k+f)*b);
      next[x][y].a=constrain(next[x][y].a,0,1);
      next[x][y].b=constrain(next[x][y].b,0,1);
    }
  }
```
6. 将新的颜色铺满画布，将next和grid进行交换，使新一代代替旧代向外进行扩散：
```java
loadPixels();//加载像素
  for(let x=1;x<width-1;x++){
    for(let y=1;y<height-1;y++){
      var pix=(x+y*width)*4;
      //var t=floor((next[x][y].a-next[x][y].b)*255);
      pixels[pix+0]=floor((next[x][y].a-next[x][y].b)*255); //可改变
      pixels[pix+1]=floor((next[x][y].a-next[x][y].b)*255);              
      pixels[pix+2]=floor((next[x][y].a-next[x][y].b)*255);
      //map(sin(frameCount/t),-1,1,100,255)
      pixels[pix+3]=255;  
    }
  }
  
  updatePixels();//更新像素
  swap();
```
**这是最基本的反应扩散操作，它出来的效果是这样的：**
![图片](https://uploader.shimo.im/f/WzYVPCiwECOHzGu7.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/EdKddwKvzS6BkBhC.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)


接下来我产生的想法是，在几个不同的方面进行改进，以产生不同的效果：

1. 扩散速率：

首先我对扩散速率进行了改变：

```java
var da=2;//扩散速率A
var db=0.7; //扩散速率B      //可变换
```
![图片](https://uploader.shimo.im/f/KZPt2aaqFYaYLq4i.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/FxrIF9dGJ1KXWagf.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

![图片](https://uploader.shimo.im/f/GQrGwniPYZr0kghd.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/M2DyUKpct55ZlqWv.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

2. 进料速率和杀死速率可以动态改变：
```java
var f=0.0367;  //A的进料速率
var k=0.0649;  //B的杀死速率  //可改变（动态改变）
for(let x=1;x<width-1;x++){
    for(let y=1;y<height-1;y++){ //不做边缘像素
      var a=grid[x][y].a;
      var b=grid[x][y].b;
      f= (x*.000088)+0.005;
      k = (y*0.00004)+0.06;
      next[x][y].a=a+(da*laplaceA(x,y)-a*b*b+f*(1-a)); //公式区域
      next[x][y].b=b+(db*laplaceB(x,y)+a*b*b-(k+f)*b);
      next[x][y].a=constrain(next[x][y].a,0,1);
      next[x][y].b=constrain(next[x][y].b,0,1);
    }
  }
```
![图片](https://uploader.shimo.im/f/FFn4KcsA9auUR7YM.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

**当这样改变后，我发现扩散很快就消失了，经过思考发现，可能是拉普拉斯矩阵的问题。这就涉及到第三部分，拉普拉斯矩阵的改变了。**

3. 拉普拉斯矩阵可以改变：保持第二部分不变，改变拉普拉斯矩阵：
```java
function laplaceA(x,y){
  //可变换
  var sumA=0;
  sumA+=grid[x][y].a*(-1);
  sumA+=grid[x-1][y].a*(0.21);
  sumA+=grid[x+1][y].a*(0.2);
  sumA+=grid[x][y-1].a*(0.2);
  sumA+=grid[x][y+1].a*(0.21);
  sumA+=grid[x-1][y-1].a*(0.05);
  sumA+=grid[x+1][y+1].a*(0.05);
  sumA+=grid[x-1][y+1].a*(0.05);
  sumA+=grid[x+1][y-1].a*(0.05);
  return sumA;
}

function laplaceB(x,y){
   var sumB=0;
  sumB+=grid[x][y].b*(-1);
  sumB+=grid[x-1][y].b*(0.21);
  sumB+=grid[x+1][y].b*(0.2);
  sumB+=grid[x][y-1].b*(0.2);
  sumB+=grid[x][y+1].b*(0.21);
  sumB+=grid[x-1][y-1].b*(0.05);
  sumB+=grid[x+1][y+1].b*(0.05);
  sumB+=grid[x-1][y+1].b*(0.05);
  sumB+=grid[x+1][y-1].b*(0.05);
  return sumB;
}
```
**效果如下：**
![图片](https://uploader.shimo.im/f/cLUvNRkBhNfrvTPj.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/rhZLz5s7SSjCajcF.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

![图片](https://uploader.shimo.im/f/lznzFYMwywu30K42.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/Nht5dzLc5xr0g3sg.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

再次改变，还可以出现下面的效果：

![图片](https://uploader.shimo.im/f/vsdBZMHrdqShoKIb.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/WNqxQVYaCFCF4Kzz.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

再次改变，会出现这样的效果：

![图片](https://uploader.shimo.im/f/r1aBQd1DHiYW0yVe.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/zwZfPz20jcr1fR9X.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

```java
function laplaceA(x,y){
  //可变换
  var sumA=0;
  sumA+=grid[x][y].a*(-1);
  sumA+=grid[x-1][y].a*(0.20);
  sumA+=grid[x+1][y].a*(0.21);
  sumA+=grid[x][y-1].a*(0.20);
  sumA+=grid[x][y+1].a*(0.20);
  sumA+=grid[x-1][y-1].a*(0.05);
  sumA+=grid[x+1][y+1].a*(0.05);
  sumA+=grid[x-1][y+1].a*(0.05);
  sumA+=grid[x+1][y-1].a*(0.05);
  return sumA;
}

function laplaceB(x,y){
   var sumB=0;
  sumB+=grid[x][y].b*(-1);
  sumB+=grid[x-1][y].b*(0.20);
  sumB+=grid[x+1][y].b*(0.19);
  sumB+=grid[x][y-1].b*(0.20);
  sumB+=grid[x][y+1].b*(0.20);
  sumB+=grid[x-1][y-1].b*(0.05);
  sumB+=grid[x+1][y+1].b*(0.05);
  sumB+=grid[x-1][y+1].b*(0.05);
  sumB+=grid[x+1][y-1].b*(0.05);
  return sumB;
}
```
或者这样：
![图片](https://uploader.shimo.im/f/oFLv8u1rGMfDbj2p.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/Yr5ZlhzuERdh8oZg.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

![图片](https://uploader.shimo.im/f/FR1eJ28E8zuDwxtn.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/Z0aTJC3xIoU102eQ.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

```java
function laplaceA(x,y){
  //可变换
  var sumA=0;
  sumA+=grid[x][y].a*(-1);
  sumA+=grid[x-1][y].a*(0.21);
  sumA+=grid[x+1][y].a*(0.20);
  sumA+=grid[x][y-1].a*(0.20);
  sumA+=grid[x][y+1].a*(0.20);
  sumA+=grid[x-1][y-1].a*(0.05);
  sumA+=grid[x+1][y+1].a*(0.05);
  sumA+=grid[x-1][y+1].a*(0.05);
  sumA+=grid[x+1][y-1].a*(0.05);
  return sumA;
}

function laplaceB(x,y){
   var sumB=0;
  sumB+=grid[x][y].b*(-1);
  sumB+=grid[x-1][y].b*(0.20);
  sumB+=grid[x+1][y].b*(0.19);
  sumB+=grid[x][y-1].b*(0.20);
  sumB+=grid[x][y+1].b*(0.20);
  sumB+=grid[x-1][y-1].b*(0.05);
  sumB+=grid[x+1][y+1].b*(0.05);
  sumB+=grid[x-1][y+1].b*(0.05);
  sumB+=grid[x+1][y-1].b*(0.05);
  return sumB;
}
```
4. 颜色可以改变：接下来我参照我上学期自己做的库的思想，对，扩散的颜色进行了一下的改变，扩散效果是这样的。

![图片](https://uploader.shimo.im/f/pyayQ0VFhaO76zTH.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/f76AXlL4oYIzlYak.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

![图片](https://uploader.shimo.im/f/4NbhJFCvzdtM2gf7.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/xPz258sjHX55yKZj.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

附上代码：

```javascript
for(let x=1;x<width-1;x++){
    for(let y=1;y<height-1;y++){
      var pix=(x+y*width)*4;
      var t=floor((next[x][y].a-next[x][y].b)*255);
      pixels[pix+0]=map(sin(frameCount/t),-1,1,100,255); //可改变
      pixels[pix+1]=map(sin(frameCount/t),-1,1,100,255);              
      pixels[pix+2]=map(sin(frameCount/t),-1,1,100,255);
      //map(sin(frameCount/t),-1,1,100,255)
      pixels[pix+3]=255;  
    }
  }
```
我个人觉得这样还不够有趣，于是在此基础上又改了下，使颜色随着时间变化：
![图片](https://uploader.shimo.im/f/ca8CVWjjVrV9qyW9.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/MTb4OujIxqUxxFwV.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

![图片](https://uploader.shimo.im/f/gkGjiOoD8O0gY9sZ.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/ZYeKQP6Bo2Gqqz3v.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

![图片](https://uploader.shimo.im/f/fXO76wmXUfNdJpQH.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/0O2Nd407Vo7I1Q1Z.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

附上代码：

```javascript
  for(let x=1;x<width-1;x++){
    for(let y=1;y<height-1;y++){
      var pix=(x+y*width)*4;
      var t=floor((next[x][y].a-next[x][y].b)*255);
      pixels[pix+0]=map(sin(frameCount/t),-1,1,50,255); //可改变
      pixels[pix+1]=map(sin(frameCount/t*2),-1,1,0,255);              
      pixels[pix+2]=map(sin(frameCount/t*3),-1,1,100,255);
      //map(sin(frameCount/t),-1,1,100,255)
      pixels[pix+3]=255;  
    }
  }
```
个人觉得这样更直观，下面是扩散的过程中，颜色变化的过程：
![图片](https://uploader.shimo.im/f/tEtkyj3G9RjJN88Q.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/I8rnflMDbGvpAwql.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

![图片](https://uploader.shimo.im/f/B7uffWao1FhHxKAp.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/TbkBgH4bDHdyvUSt.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

绿色：

![图片](https://uploader.shimo.im/f/lytDcPevVzBBvLXL.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/9h7Z72RRNl4zYCwI.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

蓝色：

![图片](https://uploader.shimo.im/f/gYrK15a73EtGiPf3.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/Fks6azgVZyjobBI7.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

![图片](https://uploader.shimo.im/f/vUqxz6wvBX2syaAy.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/WbnKzS9P0pWRxKe2.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

而当拉普拉斯矩阵向一侧偏向时，扩散过程也会向一侧偏向：

```javascript
function laplaceA(x,y){
  //可变换
  var sumA=0;
  sumA+=grid[x][y].a*(-1);
  sumA+=grid[x-1][y].a*(0.18);
  sumA+=grid[x+1][y].a*(0.2);
  sumA+=grid[x][y-1].a*(0.2);
  sumA+=grid[x][y+1].a*(0.2);
  sumA+=grid[x-1][y-1].a*(0.06);
  sumA+=grid[x+1][y+1].a*(0.05);
  sumA+=grid[x-1][y+1].a*(0.05);
  sumA+=grid[x+1][y-1].a*(0.05);
  return sumA;
}

function laplaceB(x,y){
   var sumB=0;
  sumB+=grid[x][y].b*(-1);
  sumB+=grid[x-1][y].b*(0.22);
  sumB+=grid[x+1][y].b*(0.2);
  sumB+=grid[x][y-1].b*(0.2);
  sumB+=grid[x][y+1].b*(0.2);
  sumB+=grid[x-1][y-1].b*(0.06);
  sumB+=grid[x+1][y+1].b*(0.05);
  sumB+=grid[x-1][y+1].b*(0.05);
  sumB+=grid[x+1][y-1].b*(0.05);
  return sumB;
}
```
![图片](https://uploader.shimo.im/f/3fsdUq3uNQwC5jV0.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/LB7tUUN6ceAlXuCM.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

![图片](https://uploader.shimo.im/f/1FDz0SbZghB5wB1k.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/YjFnUOpjvHYdPp54.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

![图片](https://uploader.shimo.im/f/mf6woaJFz2mxtykH.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/GfI96B7ygRm5xTOU.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

5. B可以倾倒多处：以上都是由一处扩散产生的效果，那么我现在希望在每次初始化时随机产生初始扩散点并进行扩散。于是在初始化使随机泼洒n个点：
```javascript
 var num=floor(random(15));
  for(var i=0;i<num;i++){
    let x1=floor(random(width));
    let y1=floor(random(height));
    for(x=x1;x<x1+floor(5+random(10));x++){
       for(y=y1;y<y1+floor(5+random(10));y++){
           grid[x][y].b=1;
      }
    }
  }
```
就会产生下面的结果：
![图片](https://uploader.shimo.im/f/vpjTBCPLMYqnF7At.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/hjS43n7J8AkY74tC.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/1FCMph5hf08NWFlX.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

![图片](https://uploader.shimo.im/f/b2j5cOqep7JOkD6p.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/zmL2hT09ChFJYty3.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

![图片](https://uploader.shimo.im/f/TfULfEnEB716ZmZ4.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/Rcoo7RAbc6HOJaEB.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

![图片](https://uploader.shimo.im/f/qO34KuDfquewj49O.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)![图片](https://uploader.shimo.im/f/07o9udYFRukdeqOm.png!thumbnail?fileGuid=8HJcT3G3WPP8gxQw)

**总结：**细胞自动机和反应扩散其实都可以有很多种玩法。我只是浅显地了解了，一些，事实上，在数学和科学的buff加成以及在自己的想象力的帮助下，很多大神还做出过更有趣的作品。我们还要慢慢学习。



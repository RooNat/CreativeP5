# 反应扩散方程Processing实现

```java
float da=1; //扩散速率A
float db=0.5; //扩散速率B
float f=0.055;  //A的进料速率
float k=0.062;  //B的杀死速率


class Cell{
  float a;
  float b;
  Cell(float a,float b){
    this.a=a;
    this.b=b;
  }
}

Cell [][]grid;
Cell [][]next;
void setup(){
  size(200,200);
  pixelDensity(1);
  grid=new Cell[width][];
  next=new Cell[width][];
  
  for(int x=0;x<width;x++){
    grid[x]=new Cell[height];
    next[x]=new Cell[height];
    for(int y=0;y<height;y++){
      grid[x][y]=new Cell(1,0);
      next[x][y]=new Cell(1,0);
    }
  }
  for(int i=100;i<110;i++){
    for(int j=100;j<110;j++){
      grid[i][j].b=1;
    }
  }
}

void draw(){
  background(51);
  for(int x=1;x<width-1;x++){
    for(int y=1;y<height-1;y++){
      float a=grid[x][y].a;
      float b=grid[x][y].b;
      next[x][y].a=a+(da*laplaceA(x,y)-a*b*b+f*(1-a));
      next[x][y].b=b+(db*laplaceB(x,y)+a*b*b-(k+f)*b);
      next[x][y].a=constrain(next[x][y].a,0,1);
      next[x][y].b=constrain(next[x][y].b,0,1);
    }
  }
  loadPixels();
  for(int x=1;x<width-1;x++){
    for(int y=1;y<height-1;y++){
      int pix=(x+y*width);
      pixels[pix]=color(floor(next[x][y].a*255),0,floor(next[x][y].b*255),255);
    }
  }
  updatePixels();
  swap(grid,next);
}

void swap(Cell [][]grid,Cell [][]next){
  float tempa;
  float tempb;
  for(int x=0;x<width;x++){
    for(int y=0;y<height;y++)
    {
      tempa=grid[x][y].a;
      grid[x][y].a=next[x][y].a;
      next[x][y].a=tempa;
      tempb=grid[x][y].b;
      grid[x][y].b=next[x][y].b;
      next[x][y].b=tempb;
    }
  }
}

float laplaceA(int x,int y){
  float sumA=0;
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

float laplaceB(int x,int y){
  float sumB=0;
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

与P5.js不同之处：

P5创建二维数组:

```javascript
var grid;
var next;
 grid=[];
  next=[];
  for(var x=0;x<width;x++){
    grid[x]=[];
    next[x]=[];
    for(var y=0;y<height;y++){
      grid[x][y]={a:1,b:0};  //每一个二维数组的每一格都有a,b两种物质
      next[x][y]={a:1,b:0};
    }
  }
```

Processing创建二维数组:

```java
class Cell{
  float a;
  float b;
  Cell(float a,float b){
    this.a=a;
    this.b=b;
  }
}

Cell [][]grid;
Cell [][]next;
grid=new Cell[width][];
  next=new Cell[width][];
  
  for(int x=0;x<width;x++){
    grid[x]=new Cell[height];
    next[x]=new Cell[height];
    for(int y=0;y<height;y++){
      grid[x][y]=new Cell(1,0);
      next[x][y]=new Cell(1,0);
    }
  }
```

P5使用pixels像素：

```javascript
 loadPixels();//加载像素
  for(let x=1;x<width-1;x++){
    for(let y=1;y<height-1;y++){
      var pix=(x+y*width)*4;
      pixels[pix+0]=floor(next[x][y].a*255); //可改变
      pixels[pix+1]=0;              
      pixels[pix+2]=floor(next[x][y].b*255);
      //pixels[pix+3]=255;  
    }
  }
  
  updatePixels();//更新像素
```

Processing使用pixels像素:

```java
loadPixels();
  for(int x=1;x<width-1;x++){
    for(int y=1;y<height-1;y++){
      int pix=(x+y*width);
      pixels[pix]=color(floor(next[x][y].a*255),0,floor(next[x][y].b*255),255);
    }
  }
  updatePixels();
```

P5进行对象交换：

```javascript
swap();
function swap(){ //进行像素交换
  var temp;
  temp=grid;
  grid=next;
  next=temp;
}
```

Processing进行对象交换：

```java
swap(grid,next);
void swap(Cell [][]grid,Cell [][]next){
  float tempa;
  float tempb;
  for(int x=0;x<width;x++){
    for(int y=0;y<height;y++)
    {
      tempa=grid[x][y].a;
      grid[x][y].a=next[x][y].a;
      next[x][y].a=tempa;
      tempb=grid[x][y].b;
      grid[x][y].b=next[x][y].b;
      next[x][y].b=tempb;
    }
  }
}
```

P5给二维数组赋值：

```javascript
 for(let x=1;x<width-1;x++){
    for(let y=1;y<height-1;y++){ //不做边缘像素
      var a=grid[x][y].a;
      var b=grid[x][y].b;
      next[x][y].a=a+(da*laplaceA(x,y)-a*b*b+f*(1-a)); //公式区域
      next[x][y].b=b+(db*laplaceB(x,y)+a*b*b-(k+f)*b);
      next[x][y].a=constrain(next[x][y].a,0,1);
      next[x][y].b=constrain(next[x][y].b,0,1);
    }
  }
```

Processing给二维数组赋值：

```java
for(int x=1;x<width-1;x++){
    for(int y=1;y<height-1;y++){
      float a=grid[x][y].a;
      float b=grid[x][y].b;
      next[x][y].a=a+(da*laplaceA(x,y)-a*b*b+f*(1-a));
      next[x][y].b=b+(db*laplaceB(x,y)+a*b*b-(k+f)*b);
      next[x][y].a=constrain(next[x][y].a,0,1);
      next[x][y].b=constrain(next[x][y].b,0,1);
    }
  }
```


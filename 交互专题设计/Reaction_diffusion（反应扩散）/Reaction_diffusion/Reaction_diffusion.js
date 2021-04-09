
var grid;
var next;
var da=1;//扩散速率A
var db=0.5; //扩散速率B      //可变换
var f=0.2;  //A的进料速率
var k=0.05;  //B的杀死速率  //可改变（动态改变）

function setup() {
  createCanvas(200,200);
  pixelDensity(1);//?
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
  for(var i=100;i<110;i++){
    for(var j=100;j<110;j++){
      grid[i][j].b=1;   //倾倒一小块区域的b 
      //改进：倾倒多处
    }
  }
  
}


function draw() {
  background(51);
  
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
  
  loadPixels();//加载像素
  for(let x=1;x<width-1;x++){
    for(let y=1;y<height-1;y++){
      var pix=(x+y*width)*4;
      pixels[pix+0]=floor(next[x][y].a*255); //可改变
      pixels[pix+1]=0;              
      pixels[pix+2]=floor(next[x][y].b*255);
      pixels[pix+3]=255;  
    }
  }
  
  updatePixels();//更新像素
  swap();
}

function swap(){ //进行像素交换
  var temp;
  temp=grid;
  grid=next;
  next=temp;
}

function laplaceA(x,y){
  //可变换
  var sumA=0;
  sumA+=grid[x][y].a*(-1);
  sumA+=grid[x-1][y].a*(0.2);
  sumA+=grid[x+1][y].a*(0.2);
  sumA+=grid[x][y-1].a*(0.2);
  sumA+=grid[x][y+1].a*(0.2);
  sumA+=grid[x-1][y-1].a*(0.05);
  sumA+=grid[x+1][y+1].a*(0.05);
  sumA+=grid[x-1][y+1].a*(0.05);
  sumA+=grid[x+1][y-1].a*(0.05);
  return sumA;
}


function laplaceB(x,y){
   var sumB=0;
  sumB+=grid[x][y].b*(-1);
  sumB+=grid[x-1][y].b*(0.2);
  sumB+=grid[x+1][y].b*(0.2);
  sumB+=grid[x][y-1].b*(0.2);
  sumB+=grid[x][y+1].b*(0.2);
  sumB+=grid[x-1][y-1].b*(0.05);
  sumB+=grid[x+1][y+1].b*(0.05);
  sumB+=grid[x-1][y+1].b*(0.05);
  sumB+=grid[x+1][y-1].b*(0.05);
  return sumB;
}

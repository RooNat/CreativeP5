var grid;
var next;

var dA = 1;
var dB = 0.5;
var feed = 0.055;
var k = 0.062;

function setup() {
  createCanvas(200,200);
  pixelDensity(1);
  grid = [];
  next = [];
  for (var x = 0; x<width;x++){
    grid[x] =[];
    next[x]=[];
    for (var y =0; y<height;y++){
     grid[x][y] = {a:1,b:0};
     next[x][y] = {a:1,b:0};
    }
  }
for (i=40; i<140 ;i++){
  for (j=30; j<150 ;j++){
     grid[i][j].b =1;
     }
  }
}

function draw() {
  background(51);
  for(var x = 1; x<width-1;x++){
  for (var y = 1; y<height-1;y++){
    var a = grid[x][y].a; 
    var b = grid[x][y].b; 
    feed= (x*.000088)+0.005;
    k = (y*0.00004)+0.06;
  next[x][y].a = a + 
                (dA * laplaceA(x,y))-
                (a*b*b)+
                (feed * (1-a));
  next[x][y].b = b + 
                (dB * laplaceB(x,y))+
                (a*b*b)-
                ((k+ feed)*b);
    next[x][y].a = constrain(next[x][y].a,0,1)
    next[x][y].b = constrain(next[x][y].b,0,1)
  }
}
    
  loadPixels();
  for(var x = 0; x<width;x++){
  for (var y = 0; y<height;y++){
    var pix = (x+ y*width)*4;
    var a = next[x][y].a;
    var b = next[x][y].b;
    var c = floor((a-b)*255);
    c= constrain(c,0,255);
    pixels[pix+0] =c;
    pixels[pix+1]= c;
    pixels[pix+2]= c;
    pixels[pix+3]=255;
  }
}
updatePixels();

swap();
}

function swap(){
  var temp = grid;
grid = next;
  next=temp;
}

function laplaceA(x,y){
var sumA = 0;
sumA += grid[x][y].a * -1;
sumA += grid[x-1][y].a * 0.21;
sumA += grid[x+1][y].a * 0.2;
sumA += grid[x][y+1].a * 0.2;
sumA += grid[x][y-1].a * 0.2;
sumA += grid[x-1][y-1].a * 0.05;
sumA += grid[x-1][y+1].a * 0.05;
sumA += grid[x+1][y-1].a * 0.05;
sumA += grid[x+1][y+1].a * 0.05;
 return sumA;
}

function laplaceB(x,y){
var sumB = 0;
sumB += grid[x][y].b * -1;
sumB += grid[x-1][y].b * 0.20;
sumB += grid[x+1][y].b * 0.19;
sumB += grid[x][y+1].b * 0.2;
sumB += grid[x][y-1].b * 0.2;
sumB += grid[x-1][y-1].b * 0.05;
sumB += grid[x-1][y+1].b * 0.05;
sumB += grid[x+1][y-1].b * 0.05;
sumB += grid[x+1][y+1].b * 0.05;
 return sumB;
}

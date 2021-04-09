// Reaction - Diffusion Practice Implementation (Gray-Scott)
// Resources: 
// https://www.algosome.com/articles/reaction-diffusion-gray-scott.html
// http://karlsims.com/rd.html

cells = [];
let newCells;
saturated = [];
const feed = 0.0545;
const kill = 0.062;
diffusionA = 1.0;
diffusionB = 0.5;

function setup() {  
  createCanvas(200, 200);
  pixelDensity(1);
  background(255, 204, 0);
  // frameRate(10);
  
  newCells = [];
  // Init cell spread
  for (x = 0; x < width; x++){
    cells[x] = [];
    newCells[x] = [];
    for (y = 0; y < height; y++){
      cells[x].push({
        a:1,
        b:0
      });
      newCells[x].push({
        a:1,
        b:0
      });
    }
  }
  
  for (x = 95; x < 105; x++){
    for (y = 95; y < 105; y++){
      cells[x][y].b = 1;
    }
  }
}

function draw() {
  background(255, 204, 0);
  updateCells();
  cDraw();
  hold = cells;
  cells = newCells;
  newCells = hold;
}


function updateCells(){
  for (x = 1; x < width-1; x++){
    for (y = 1; y < height-1; y++){
      newCells[x][y].a = cells[x][y].a + diffusionA * lapA(x,y) - cells[x][y].a * cells[x][y].b * cells[x][y].b + feed * (1 - cells[x][y].a);
      newCells[x][y].b = cells[x][y].b + diffusionB * lapB(x,y) + cells[x][y].a * cells[x][y].b * cells[x][y].b - (kill + feed) * cells[x][y].b;
    }
  }
}

function cDraw(){
  for (x = 0; x < width; x++){
    for (y = 0; y < height; y++){
      c = newCells[x][y].a - newCells[x][y].b;
      if (c < 0.5){
        stroke(c);
        point(x, y);
      }
    }
  } 
}

function lapA(x, y){
  // Laplacian matrix: 
  // [[0.05, 0.2, 0.05],
  //  [0.2,  -1,  0.2 ],
  //  [0.05, 0.2, 0.05]]
  newA = cells[x][y].a * -1;
  newA += (cells[x-1][y-1].a * 0.05);
  newA += (cells[x][y-1].a * 0.2);
  newA += (cells[x+1][y-1].a * 0.05);
  newA += (cells[x-1][y].a * 0.2);
  newA += (cells[x+1][y].a * 0.2);
  newA += (cells[x-1][y+1].a * 0.05);
  newA += (cells[x][y+1].a * 0.2) + (cells[x+1][y+1].a * 0.05);
  return newA;
}

function lapB(x, y){
  newB = cells[x][y].b * -1;
  newB += (cells[x-1][y-1].b * 0.05);
  newB += (cells[x][y-1].b * 0.2);
  newB += (cells[x+1][y-1].b * 0.05);
  newB += (cells[x-1][y].b * 0.2);
  newB += (cells[x+1][y].b * 0.2);
  newB += (cells[x-1][y+1].b * 0.05);
  newB += (cells[x][y+1].b * 0.2);
  newB += (cells[x+1][y+1].b * 0.05);
  return newB;
}

/*function mouseClicked(){
  cells[floor(mouseX)][floor(mouseY)].b = 1;
  cells[floor(mouseX)][floor(mouseY)].a = 0;
} */

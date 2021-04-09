int widt, heigh;
int[][] p, v;
int[][] unicoord;

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

void setup() {
  fullScreen();
  colorMode(RGB, 2);
  background(2, 1, 0);

  widt = width-1;
  heigh = height-1;

  p = new int[width][height];
  v = new int[width][height];

  for (int x = 0; x < width; x++) {
    for (int y = 0; y < height; y++) {
      p[x][y] = 1;
      v[x][y] = 1;
    }
  }

  unicoord = new int[width][height];
  int pixel = 0;
  for (int y = 0; y < height; y++) {
    for (int x = 0; x < width; x++) {
      unicoord[x][y] = pixel++;
    }
  }

  loadPixels();
}

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

void draw() {
  for (int x = 1; x < widt; x++) {
    for (int y = 1; y < heigh; y+=2) {
      v[x][y] *= p[x][y] * p[x-1][y] * p[x+1][y] * p[x][y-1] * p[x][y+1] * p[x+1][y-1] * p[x+1][y+1];
    }
    for (int y = 2; y < heigh; y+=2) {
      v[x][y] *= p[x][y] * p[x-1][y] * p[x+1][y] * p[x][y-1] * p[x][y+1] * p[x-1][y+1] * p[x-1][y-1];
    }
  }

  for (int x = 1; x < widt; x++) {
    for (int y = 1; y < heigh; y++) {
      p[x][y] *= v[x][y];
      pixels[unicoord[x][y]] = color(1 + p[x][y], p[x][y], 1 - p[x][y]);
    }
  }

  updatePixels();
}

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

void mousePressed() {
  p[mouseX][mouseY] *= -1;
}

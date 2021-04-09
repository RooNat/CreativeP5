int n = 55;
float padding = 10;
float cellSize;
float blinksPerSecond = 15;
float [][] wealth, nextGeneration;

void setup() {
  size(600, 600);
  frameRate(blinksPerSecond);
  cellSize = (width-2*padding)/n;
  wealth = new float[n][n];
  nextGeneration = new float[n][n];
  noSmooth();
  setFirstGeneration();
}

void draw() {
  noStroke();
  background(0);
   for (int i = 0; i <  n; i++){
    for (int j = 0; j < n; j++){
      fill ( mapColorsfromWealth(wealth[i][j]) );
      rect(padding + i*cellSize, padding + j*cellSize, cellSize, cellSize);
    }
  
  }
  setNextGeneration();
  copyNextGenerationToCurrentGeneration(); 
}


float getDonationAmount(float netWorth ) {
    //tax brackets
    float amountDonated;
  
    if (netWorth > netWorthRange*.8)
      amountDonated = abs(netWorthRange - netWorth + netWorth*.10);
    else if (netWorth < netWorthRange*.2)
      amountDonated = 0;      
    else{
      amountDonated = (map(netWorth, 0, netWorthRange, 0, 0.1))*netWorth;
    }
    return amountDonated;
  }
  

float convertRankToPercent( int rank ) { //can try playing with these values as well
  float percent = 0;
  if (rank == 0)
    percent = 0.1;
  else if (rank == 1)
    percent = 0.2;
  else if (rank == 2)
    percent = 0.3;
  else
    percent = 0.4; //poorer than all other cells
  return percent;
}
void setFirstGeneration() {
  int choice = int(random(25));
  for (int i=0; i<n; i++) {
    for (int j=0; j<n; j++) {//uncomment to try different settings
      if (choice == 0) {
        wealth[i][j] = -2*i + pow(i, 2) +  pow(j, 2) - 400; //quarter circle pattern
      } else if (choice == 1) {
        wealth[i][j] = random(270); //good numbers to use are 210, 270
      } else if (choice == 2) {
        wealth[i][j] = cos(i*j) + i*5; //wave like patterns coming from the right
      } else if (choice == 3) {
        wealth[i][j] = tan(sin(i*j) + i*5)*10; //tumor like growths
      } else if (choice == 4) {
        wealth[i][j] = 40*j - i*70; //diagonal curved from the left
      } else if (choice == 5) {
        wealth[i][j] =  - cos(i*j) + sin(i*5)*200; //spreading between blue bars
      } else if (choice == 6) {
        wealth[j][j] =  300; //diagonal top left to bottom right
      } else if (choice == 7) {
        wealth[i][j] = i*10; //spreading from the right, bars
      } else if (choice == 8) {
        wealth[i][j] = 200 - 10*i*j; //spreading from the top left corner
      } else if (choice == 9) {
        wealth[i][j] = 201-i; //spreading from the left in a straight lines
      } else if (choice == 10) {
        wealth[j][i] = 260-i*60; //try this setting and the one below it together
      } else if (choice == 11) {   
        wealth[i][j] = 260-i*60; //corner spreading
      } else {
        wealth[i][j] = 200 ; //below 200, cells are too poor to donate money so there is no change
      }
    }

  //wealth[int(n/2)][int(n/2)] = netWorthRange; //center square, try making n smaller
  
  //wealth[n-1][n-1] = netWorthRange; // bottom right corner
  //wealth[0][0] = netWorthRange; // top left corner
  //wealth[n-1][0] = netWorthRange; //top right corner
  //wealth[0][n-1] = netWorthRange; //bottom left corner

  //wealth[0][n-1] = -200; wealth[0][0] = -200; wealth[0][1] = -200; //set negative values to see what happens
}
}
void setNextGeneration() {
  for(int i=0; i<n; i++) 
    for(int j=0; j<n; j++) {
      nextGeneration[i][j] = calculateNetWorth(i, j);
    }
  }


void copyNextGenerationToCurrentGeneration() {
  for(int i=0; i<n; i++) 
    for(int j=0; j<n; j++) 
      wealth[i][j] = nextGeneration[i][j];
}

float netWorthRange = 1000;

color mapColorsfromWealth(float value) {
  color cellColor;
    
  float c1 = map(value, 0, netWorthRange, 0, 1020);

  if (c1 > (1020*.75)) 
    cellColor = color(255, c1%255, 0);
  
  else if (c1 > (1020*.5))
    cellColor = color(255 - c1%255, 255, 0);
  
  else if (c1 > (1020*.25) )
    cellColor = color(0, 255, c1%255);
  
  else if (c1 > 0 )
    cellColor = color(0, 255 - c1%255, 255);
  
  else
    cellColor = color(0);
 
  return cellColor;
  
  
}

float calculateNetWorth(int i, int j) {    
    float currentWealth = wealth[i][j]; 
    float myDonation = getDonationAmount(wealth[i][j]);
    float totalAdjacentCellDonations = 0;
    float donationToMe = 0;
    
    for (int y = -1; y <= 1; y++) { //
      for (int z = -1; z <= 1; z++){ //four immediate surrounding cells
      try{
         if (( y!=0 || z!=0 ) && (y == 0 || z == 0) && (( (0 <= (i + y)) && ((y + i) < n)) && ( (0 <= (j + z)) && ((z + j) < n) ))) {
           int rank = 0;
           float adjacentCellDonation = getDonationAmount(wealth[i + y][j + z]);
           for (int a = -1; a <= 1; a++) {
              for (int b = -1; b <= 1; b++) {
                try{
                  
                  if (( a!=0 || b!=0 ) && (a == 0 || b == 0) && (( (0 <= (i + a + y)) && ((a + i + y) < n)) && ( (0 <= (j + z + b)) && ((z + j+b) < n) )) ) {
                    if (wealth[a+i+y][b+j+z] > wealth[i][j])
                      rank ++;       

                  }    
                  }catch (ArrayIndexOutOfBoundsException e) {rank++;}        
              }
            }
            
            donationToMe += adjacentCellDonation*convertRankToPercent(rank);
         }
      }catch(ArrayIndexOutOfBoundsException e) {}
    totalAdjacentCellDonations += donationToMe;
   }   
   }
  float netWorth;
  if ((currentWealth + totalAdjacentCellDonations) > netWorthRange)
    netWorth = netWorthRange - myDonation;
  else
    netWorth = currentWealth + totalAdjacentCellDonations - myDonation;   
    return netWorth;
   
}

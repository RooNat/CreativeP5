//随机生长（布朗运动）

let num = 1000;
let range = 6;
var h=360;
let ax = [];
let ay = [];


function setup() {
  createCanvas(710, 400);
  for ( let i = 0; i < num; i++ ) {
    ax[i] = width / 2;
    ay[i] = height / 2;
  }
  frameRate(30);
  background(51);
}

function draw() {
  

  // Shift all elements 1 place to the left
  for ( let i = 1; i < num; i++ ) {
    ax[i - 1] = ax[i];
    ay[i - 1] = ay[i];
  }

  // Put a new value at the end of the array
  ax[num - 1] += random(-range, range);
  ay[num - 1] += random(-range, range);

  // Constrain all points to the screen
  ax[num - 1] = constrain(ax[num - 1], 0, width);
  ay[num - 1] = constrain(ay[num - 1], 0, height);

  // Draw a line connecting the points
  for ( let j = 2; j < num; j+=1) {
    /*let val = j / num * 204.0 + 51;
    stroke(val);*/
    //noStroke();
    is=random(0,1);
    u=random(1,3);
    if(j==num-40)
    {
    	if(is<0.5)
    	{
    		stroke(random(150,250),150,random(100,250),random(20,100));
    	}
    	else
    	{
    		stroke(random(100,120),180,random(180,250),random(20,100));
    	}
    	
    	Meihua_0102(ax[j],ay[j],u,0,false);
    }
    if(j%2==0)
    {
    	if(is<0.5)
    	{
    		stroke(random(150,250),150,random(100,250),random(20,100));
    	}
    	else
    	{
    		stroke(random(100,120),180,random(180,250),random(20,100));
    	}
    	line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
    	line(ax[j-2],ay[j-2],ax[j],ay[j]);
    	line(ax[j - 1], ay[j - 1], ax[j-2], ay[j-2]);
    }
    //circle(ax[j],ay[j],u);
    //Meihua_0102(ax[j],ay[j],u,0,false);
    //line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
  }
}
var value = [];
var num = 4;
var t = 0;

function setup() {
  createCanvas(720, 480);
  frameRate(20);
}

function mountain(rank) {
  value = [];
  value[0] = height / 2;
  value[1] = height / 2;
  xx = constrain(mouseX, 0, width);
  yy = constrain(mouseY, 0, height);
  var freq = map(xx, 0, width, 0, 1);
  var amb = map(yy, 0, height, 0, 3);
  for(var i = 0; i < rank; i ++) {
    var tampValue = [];
    for(var j = 0; j < 2 * value.length - 1; j ++) {
      if(j % 2 === 0) {
        tampValue.push(value[j / 2]);
      } else {
        tampValue.push((value[(j - 1) / 2] + 
          value[(j + 1) / 2]) / 2 + 
          random(- height * (amb / 2 * (0.8 + freq)), 
                   height * (amb / 2 * (0.8 + freq))) / 
                 pow(1.5 + 1.2 * freq, i));
      }
    }
    value = [];
    for(var k = 0; k < tampValue.length; k ++) {
      value.push(tampValue[k]);
    }
  }
  for(var i = 0; i < value.length; i ++) {
    value[i] -= height / 2;
    value[i] *= 1 / (1 + .01 * pow((i - value.length / 2), 4));
    value[i] += height / 2;
  }
}

function draw() {
  t += 1 / 3;
  mountain(num);
  background(30, 20);
  var rg = random(0, 255);
  stroke(rg, rg, random(128, 255));
  strokeWeight(random(1.5, 3));
  noFill();
  var l = width / (value.length - 1);
  beginShape();
  curveVertex(0, value[0]);
  for(var i = 0; i < value.length; i ++) {
    curveVertex(i * l, value[i]);
  }
  curveVertex((value.length - 1) * l, value[value.length - 1]);
  endShape();
  // fill(255, 60);
  // noStroke();
  // ellipse(mouseX, mouseY, 30, 30);
  // ellipse(mouseX, mouseY, 20, 20);
}

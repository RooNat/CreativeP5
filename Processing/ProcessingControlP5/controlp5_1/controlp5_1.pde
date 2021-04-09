import controlP5.*;
ControlP5 controlP5;

void setup(){
  size(300,260);
  smooth();
  controlP5=new ControlP5(this);
  PFont p=createFont("Verdana",10);
  ControlFont font=new ControlFont(p);
  controlP5.setColorForeground(0xffaa0000);
  controlP5.setColorBackground(0xff660000);
  controlP5.setFont(font);
  controlP5.setColorActive(0xffff0000);
  controlP5.addBang("bang").setPosition(10,10).setSize(20,20);
  controlP5.addButton("button").setValue(1).setPosition(70,10).setSize(20,20);
  controlP5.addToggle("toggle1").setValue(false).setPosition(170,10).setSize(20,20); 
  controlP5.addSlider("slider1").setRange(0,255).setValue(128).setPosition(10,80).setSize(10,100).setColorValue(0xffff88ff).setColorLabel(0xffdddddd);
  
   Slider s = controlP5.addSlider("slider2")
 .setRange(0,255)
 .setValue(128)
 .setPosition(70,80)
 .setSize(100,10);
 
 s.setSliderMode(Slider.FLEXIBLE);
}

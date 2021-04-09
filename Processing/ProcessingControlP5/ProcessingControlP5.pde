import controlP5.*;
ControlP5 controlP5;

color[] colors=new color[7];

void setup()
{
  size(330,260);
  controlP5=new ControlP5(this);
  controlP5.addBang("bang1",10,10,20,20);
  controlP5.addButton("button1",1,70,10,60,20);
  controlP5.addToggle("toggle1",false,170,10,20,20);
  controlP5.addSlider("slider1",0,255,128,10,80,10,100);
  controlP5.addSlider("slider2",0,255,128,70,80,100,10);
  controlP5.addKnob("knob1",0,360,0,70,120,50);
  controlP5.addNumberbox("numberbox1",50,170,120,60,14);
}

void draw()
{
  background(0);
  for(int i=0;i<7;i++)
  {
    stroke(255);
    fill(colors[i]);
    rect(10+(i*45),210,40,40);
  }
}

void controlEvent(ControlEvent theEvent){
  if(theEvent.isController()){
    print("control evnet from:"+theEvent.getController().getName());
    println(",value:"+theEvent.getController().getValue());
    if(theEvent.getController().getName()=="bang1"){
      colors[0]=colors[0]+color(40,40,0);
      if(colors[0]>255)colors[0]=color(40,40,0);
    }
    if(theEvent.getController().getName()=="button1"){
      colors[1]=colors[1]+color(40,0,40);
      if(colors[1]>255)colors[1]=color(40,0,40);
    }
    
    if(theEvent.getController().getName()=="toggle1"){
      if(theEvent.getController().getValue()==1){
        colors[2]=color(200,150,190);
      }
      else if(theEvent.getController().getValue()==0){
        colors[2]=color(0,0,0);
      }
    }
    if(theEvent.getController().getName()=="slider1"){
      colors[3]=color(theEvent.getController().getValue(),0,0);
    }
    if(theEvent.getController().getName()=="slider2"){
      colors[4]=color(0,theEvent.getController().getValue(),0);
    }
    if(theEvent.getController().getName()=="knob1"){
      colors[5]=color(0,0,theEvent.getController().getValue());
    }
    if(theEvent.getController().getName()=="numberbox1"){
      colors[6]=color(theEvent.getController().getValue());
    }
  }
}

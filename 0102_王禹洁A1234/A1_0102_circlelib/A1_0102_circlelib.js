function Meihuacircle_0102(x0,y0,u,d,D,alp)//u是梅花大小，d是梅花中圆的间隔，D为梅花中圆的大小
{
	r = map(sin(frameCount/200.0),-1,1,100,255); // 随机红色分量
    g = map(sin(frameCount/300.0),-1,1,0,255);   // 随机绿色分量
    b = map(sin(frameCount/400.0),-1,1,100,255); //随机蓝色分量
    stroke(r,g,b,alp); // 设置线条颜色、透明度
	//var VecArray=new Array();
	for(let i=0;i<h;i+=d)
	{
        var theta=i*TAU/360.0;
        var r1=1+pow(1.0*sin(theta*2.5),2);
        x=x0+u*r1*cos(theta);
        y=y0+u*r1*sin(theta);
        circle(x,y,D);
        //VecArray[i]=createVector(x,y);
	}
	//renderLine2(VecArray);
}

function Lihuacircle_0102(x0,y0,u,d,D,alp)  //梨花曲线
{
    r = map(sin(frameCount/200.0),-1,1,100,255); // 随机红色分量
    g = map(sin(frameCount/300.0),-1,1,0,255);   // 随机绿色分量
    b = map(sin(frameCount/400.0),-1,1,100,255); //随机蓝色分量
    stroke(r,g,b,alp); // 设置线条颜色、透明度
    //var VecArray=new Array();
    for(let i=0;i<h;i+=d)
    {
        var theta=i*TAU/360.0;
        var r1=5-pow((3*sin(theta*3)),2);
        x=x0+u*r1*cos(theta);
        y=y0+u*r1*sin(theta);
        circle(x,y,D);
        //VecArray[i]=createVector(x,y);
    }
    //renderLine2(VecArray);
}

function Wanyue2circle_0102(x0,y0,u,d,D,alp)
{
    var r = map(sin(frameCount/200.0),-1,1,100,255); // 随机红色分量
    var g = map(sin(frameCount/300.0),-1,1,0,255);   // 随机绿色分量
    var b = map(sin(frameCount/400.0),-1,1,100,255); //随机蓝色分量
    stroke(r,g,b,alp); // 设置线条颜色、透明度
    for(let i=0;i<h;i+=d)
    {
        var theta=i*TAU/360.0;
        var r1=10*theta;
        x=x0+u*(cos(theta)+cos(2*theta));
        y=y0+u*(sin(theta)*2+sin(theta)*2);
        circle(x,y,D);
    }
}

function SunLine_0102(x0,y0,u1,u2,alp,iscolor)
{
    if(iscolor)
    {
       // clear();
        var r1 = map(sin(frameCount/400.0),-1,1,100,255); // 随机红色分量
        var g = map(sin(frameCount/300.0),-1,1,0,255);   // 随机绿色分量
        var b1 = map(sin(frameCount/200.0),-1,1,100,255); //随机蓝色分量
        stroke(r1,g,b1,alp); // 设置线条颜色、透明度
    }
    var VecArray=new Array();
    for(let i=0;i<h;i++)
    {
        var t=i/360.0;
        var theta=t*TAU;
        var r=1.5*cos(50*theta)+1;
        x=x0+u1*r*cos(theta);
        y=y0+u2*r*sin(theta);
        VecArray[i]=createVector(x,y);
    }
    renderLine(VecArray);
}

function Xiangrikui2_0102(x0,y0,u1,u2,n,alp,iscolor)  //向日葵线
{ //n一般取30——100
    if(iscolor)
    {
        //clear();
        var r1 = map(sin(frameCount/400.0),-1,1,0,255); // 随机红色分量
        var g = map(sin(frameCount/300.0),-1,1,100,255);   // 随机绿色分量
        var b1 = map(sin(frameCount/200.0),-1,1,100,255); //随机蓝色分量
        stroke(r1,g,b1,alp); // 设置线条颜色、透明度
    }
    var VecArray=new Array();
    for(let i=0;i<h;i++)
    {
        var t=i/360.0;
        var theta=t*TAU;
        var r=n+10*sin(theta*30);
        x=x0+u1*r*cos(theta);
        y=y0+u2*r*sin(theta);
        VecArray[i]=createVector(x,y);
    }
    renderLine(VecArray);
}

function Circle_Sprite_0102(x0,y0,D,d,SpriteFcn,sc,cm,colorchange,alp)
{
    //circle(x0,y0,D);
    for(let i=0;i<h;i+=d)
    {
        var t=i/360.0;
        x=x0+(D/2)*cos(t*TAU);
        y=y0+(D/2)*sin(t*TAU);
        push();
        translate(x,y);
        scale(sc,sc);
        if(colorchange==0)
        {
           var r1 = map(sin(frameCount*cm/200.0),-1,1,100,255); // 随机红色分量
           var g = map(sin(frameCount*cm/300.0),-1,1,0,255);   // 随机绿色分量
           var b1 = map(sin(frameCount*cm/400.0),-1,1,100,255); //随机蓝色分量
           stroke(r1,g,b1,alp); // 设置线条颜色、透明度
        }
        else if(colorchange==1)
        {
           var r1 = map(sin(frameCount*i/200.0),-1,1,100,255); // 随机红色分量
           var g = map(sin(frameCount*i/300.0),-1,1,0,255);   // 随机绿色分量
           var b1 = map(sin(frameCount*i/400.0),-1,1,100,255); //随机蓝色分量
           stroke(r1,g,b1,alp); // 设置线条颜色、透明度
        }
        SpriteFcn();
        pop();
    }
}
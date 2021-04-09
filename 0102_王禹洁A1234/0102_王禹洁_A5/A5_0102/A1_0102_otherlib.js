function Meihua_0102(x0,y0,u,alp,iscolor)  //梅花曲线
{
	if(iscolor)
	{
		//clear();
       r = map(sin(frameCount/200.0),-1,1,100,255); // 随机红色分量
       g = map(sin(frameCount/300.0),-1,1,0,255);   // 随机绿色分量
       b = map(sin(frameCount/400.0),-1,1,100,255); //随机蓝色分量
       stroke(r,g,b,alp); // 设置线条颜色、透明度
	}
	var VecArray=new Array();
	for(let i=0;i<h;i++)
	{
        var theta=i*TAU/360.0;
        var r1=1+pow(1.0*sin(theta*2.5),2);
        x=x0+u*r1*cos(theta);
        y=y0+u*r1*sin(theta);
        VecArray[i]=createVector(x,y);
	}
	renderLine2(VecArray);
}

function Meihua1_0102()  //梅花曲线
{
	beginShape();
	for(let i=0;i<h;i++)
	{
        var theta=i*TAU/360.0;
        var r1=1+pow(1.0*sin(theta*2.5),2);
        x=10*r1*cos(theta);
        y=10*r1*sin(theta); 
        curveVertex(x,y);
	}
	endShape();
}

function Lihua_0102(x0,y0,u,alp,iscolor)  //梨花曲线
{
	if(iscolor)
	{
		//clear();
		r = map(sin(frameCount*5/200.0),-1,1,0,255); // 随机红色分量
        g = map(sin(frameCount*5/200.0),-1,1,64,255);   // 随机绿色分量
        b = map(sin(frameCount*5/200.0),-1,1,128,255); //随机蓝色分量
        stroke(r,g,b,alp); // 设置线条颜色、透明度
	}
	var VecArray=new Array();
	for(let i=0;i<h;i++)
	{
        var theta=i*TAU/360.0;
        var r1=5-pow((3*sin(theta*3)),2);
        x=x0+u*r1*cos(theta);
        y=y0+u*r1*sin(theta);
        VecArray[i]=createVector(x,y);
	}
	renderLine2(VecArray);
}

function Lihua1_0102()  //梨花曲线
{
	beginShape();
	for(let i=0;i<h;i++)
	{
        var theta=i*TAU/360.0;
        var r1=10-pow((3*sin(theta*3)),2);
        x=5*r1*cos(theta);
        y=5*r1*sin(theta);
        curveVertex(x,y);
	}
	endShape();
}


function Wanyue_0102(x0,y0,u1,u2,alp,iscolor) //弯月  
{
	if(iscolor)
	{
		//clear();
		var r = map(sin(frameCount/200.0),-1,1,100,255); // 随机红色分量
        var g = map(sin(frameCount/300.0),-1,1,0,255);   // 随机绿色分量
        var b = map(sin(frameCount/400.0),-1,1,100,255); //随机蓝色分量
        stroke(r,g,b,alp); // 设置线条颜色、透明度
	}
	var VecArray=new Array();
	for(let i=0;i<h;i++)
	{
        var theta=i*TAU/360.0;
        var r1=10*theta;
        x=x0+u1*(cos(theta)+cos(2*theta));
        y=y0+u2*(sin(theta)*2+sin(theta)*2);
        VecArray[i]=createVector(x,y);
	}
	renderLine2(VecArray);
 }


function Wanyue1_0102() //弯月
{
	beginShape();
	for(let i=0;i<h;i++)
	{
        var theta=i*TAU/360.0;
        var r1=10*theta;
        x=10*(cos(theta)+cos(2*theta));
        y=10*(sin(theta)*2+sin(theta)*2);
        curveVertex(x,y);
	}
	endShape();
 }


function Wanyue3_0102(x0,y0,u1,u2,d,sc,cm,alp,SpriteFcn,colorchange)
{
	clear();
	for(let i=0;i<h;i+=d)
	{
        var theta=i*TAU/360.0;
        var r1=10*theta;
        x=x0+u1*(cos(theta)+cos(2*theta));
        y=y0+u2*(sin(theta)*2+sin(theta)*2);
        push();
        translate(x,y);
        scale(sc,sc);
        if(colorchange==0)
        {
        	 var r1= map(sin(frameCount*cm/200.0),-1,1,100,255); // 随机红色分量
             var g = map(sin(frameCount*cm/300.0),-1,1,0,255);   // 随机绿色分量
             var b = map(sin(frameCount*cm/400.0),-1,1,100,255); //随机蓝色分量
             stroke(r1,g,b,alp); // 设置线条颜色、透明度
        }
        else if(colorchange==1)
        {
        	 var r1= map(sin(frameCount*cm*i/400.0),-1,1,0,255); // 随机红色分量
             var g = map(sin(frameCount*cm*i/300.0),-1,1,100,255);   // 随机绿色分量
             var b = map(sin(frameCount*cm*i/200.0),-1,1,100,255); //随机蓝色分量
             stroke(r1,g,b,alp); // 设置线条颜色、透明度
        }
        SpriteFcn();
        pop();
	}
}

function Redaiyu_0102(x0,y0,u1,u2,a,n,alp,iscolor)
{ //一般a取5,n取3
    if(iscolor)
	{
		//clear();
		var r = map(sin(frameCount/200.0),-1,1,100,255); // 随机红色分量
        var g = map(sin(frameCount/300.0),-1,1,0,255);   // 随机绿色分量
        var b = map(sin(frameCount/400.0),-1,1,100,255); //随机蓝色分量
        stroke(r,g,b,alp); // 设置线条颜色、透明度
	}
	var VecArray=new Array();
	for(let i=0;i<h;i++)
	{
		var t=i/360.0;
        var theta=t*TAU;
        x=x0+u1*t*(a*(pow(cos(theta*n),4)));
        y=y0+u2*t*(a*(pow(sin(theta*n),4)));
        VecArray[i]=createVector(x,y);
	}
	renderLine(VecArray);
}

function Redaiyu1_0102()
{ //一般a取5,n取3
	beginShape();
	for(let i=0;i<h;i++)
	{
		var t=i/360.0;
        var theta=t*TAU;
        x=30*t*(5*(pow(cos(theta*3),4)));
        y=30*t*(5*(pow(sin(theta*3),4)));
        curveVertex(x,y);
	}
	endShape();
}

function Luoxuan1_0102(x0,y0,u1,u2,alp,iscolor)  //螺旋线1
{
	if(iscolor)
	{
		//clear();
		var r = map(sin(frameCount/200.0),-1,1,100,255); // 随机红色分量
        var g = map(sin(frameCount/300.0),-1,1,0,255);   // 随机绿色分量
        var b = map(sin(frameCount/400.0),-1,1,100,255); //随机蓝色分量
        stroke(r,g,b,alp); // 设置线条颜色、透明度
	}
	var VecArray=new Array();
	for(let i=0;i<h;i++)
	{
		var t=i/360.0;
        var theta=t*TAU;
        x=x0+u1*t*cos(t*(5*PI));
        y=y0+u2*t*sin(t*(5*PI));
        VecArray[i]=createVector(x,y);
	}
	renderLine(VecArray);
}

function Luoxuan11_0102()  //螺旋线1
{
	beginShape();
	for(let i=0;i<h;i++)
	{
		var t=i/360.0;
        var theta=t*TAU;
        x=10*t*cos(t*(5*PI));
        y=10*t*sin(t*(5*PI));
        curveVertex(x,y);
	}
	endShape();
}
function Luoxuan2_0102(x0,y0,u1,u2,l,alp,iscolor)  //螺旋曲线2
{
	if(iscolor)
	{
		//clear();
		var r1 = map(sin(frameCount/200.0),-1,1,100,255); // 随机红色分量
        var g = map(sin(frameCount/300.0),-1,1,0,255);   // 随机绿色分量
        var b = map(sin(frameCount/400.0),-1,1,100,255); //随机蓝色分量
        stroke(r1,g,b,alp); // 设置线条颜色、透明度
	}
	var VecArray=new Array();
	for(let i=0;i<h;i++)
	{
		var t=i/360.0;
        var theta=10+t*(20*PI);
        var r=t*(l*PI)+1
        x=x0+u1*r*cos(theta);
        y=y0+u2*r*sin(theta);
        VecArray[i]=createVector(x,y);
	}
	renderLine(VecArray);
}

function Luoxuan21_0102()  //螺旋曲线2
{
	beginShape();
	for(let i=0;i<h;i++)
	{
		var t=i/360.0;
        var theta=10+t*(20*PI);
        var r=t*(2*PI)+1
        x=10*r*cos(theta);
        y=10*r*sin(theta);
        curveVertex(x,y);
	}
	endShape();
}

function Luoxian3_0102(x0,y0,u1,u2,s,alp,iscolor)  //阿基米德螺旋线
{
	if(iscolor)
	{
		//clear();
		var r1 = map(sin(frameCount/200.0),-1,1,100,255); // 随机红色分量
        var g = map(sin(frameCount/300.0),-1,1,0,255);   // 随机绿色分量
        var b = map(sin(frameCount/400.0),-1,1,100,255); //随机蓝色分量
        stroke(r1,g,b,alp); // 设置线条颜色、透明度
	}
	var VecArray=new Array();
	for(let i=0;i<h*s;i++)
	{
		var t=i/360.0;
		var theta=t*4;
        x=x0+u1*theta*cos(theta);
        y=y0+u2*theta*sin(theta);
        VecArray[i]=createVector(x,y);
	}
	renderLine(VecArray);
}

function Luoxian31_0102(x0,y0,u1,u2,s,d,alp,sc,cm,SpriteFcn,colorchange)  //可换函数
{
	clear();
	for(let i=0;i<h*s;i+=d)
	{
		var t=i/360.0;
		var theta=t*4;
        x=x0+u1*theta*cos(theta);
        y=y0+u2*theta*sin(theta);
        push();
        translate(x,y);
        scale(sc,sc);
        if(colorchange==0)
        {
        	 var r1= map(sin(frameCount*cm/200.0),-1,1,100,255); // 随机红色分量
             var g = map(sin(frameCount*cm/300.0),-1,1,0,255);   // 随机绿色分量
             var b = map(sin(frameCount*cm/400.0),-1,1,100,255); //随机蓝色分量
             stroke(r1,g,b,alp); // 设置线条颜色、透明度
        }
        else if(colorchange==1)
        {
        	 var r1= map(sin(frameCount*cm*i/400.0),-1,1,0,255); // 随机红色分量
             var g = map(sin(frameCount*cm*i/300.0),-1,1,100,255);   // 随机绿色分量
             var b = map(sin(frameCount*cm*i/200.0),-1,1,100,255); //随机蓝色分量
             stroke(r1,g,b,alp); // 设置线条颜色、透明度
        }
        SpriteFcn();
        pop();
	}
}

function Longandshort1_0102(x0,y0,u1,u2,a,b,c,alp,iscolor)  //一个花篮线
{  //abc一般分别取5,3,5
	if(iscolor)
	{
		//clear();
		var r1 = map(sin(frameCount/300.0),-1,1,0,255); // 随机红色分量
        var g = map(sin(frameCount/400.0),-1,1,100,255);   // 随机绿色分量
        var b1 = map(sin(frameCount/200.0),-1,1,100,255); //随机蓝色分量
        stroke(r1,g,b1,alp); // 设置线条颜色、透明度
	}
	var VecArray=new Array();
	for(let i=0;i<h;i++)
	{
		var t=i/360.0;
		var theta=t*TAU*10;
        x=x0+u1*((a+b)*cos(theta)-c*cos((a/b+1)*theta));
        y=y0+u2*((a+b)*sin(theta)-c*sin((a/b+1)*theta));
        VecArray[i]=createVector(x,y);
	}
	renderLine(VecArray);
}

function Longandshort11_0102()  //一个花篮线
{  //abc一般分别取5,3,5
	beginShape();
	for(let i=0;i<h;i++)
	{
		var t=i/360.0;
		var theta=t*TAU*10;
		var a=5,b=3,c=5;
        x=5*((a+b)*cos(theta)-c*cos((a/b+1)*theta));
        y=5*((a+b)*sin(theta)-c*sin((a/b+1)*theta));
        curveVertex(x,y);
	}
	endShape();
}


function Longandshort2_0102(x0,y0,u1,u2,a,b,c,alp,iscolor)  //一个花篮线
{ //a,b,c一般分别取5,7,2.2
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
		var theta=t*TAU*10;
        x=x0+u1*((a-b)*cos(theta)-c*cos((a/b-1)*theta));
        y=y0+u2*((a-b)*sin(theta)-c*sin((a/b-1)*theta));
        VecArray[i]=createVector(x,y);
	}
    renderLine(VecArray);
}

function Longandshort21_0102()  //一个花篮线
{ //a,b,c一般分别取5,7,2.2
	
	beginShape();
	for(let i=0;i<h;i++)
	{
		var t=i/360.0;
		var theta=t*TAU*10;
		var a=5;
		var b=7;
		var c=2.2;
        x=15*((a-b)*cos(theta)-c*cos((a/b-1)*theta));
        y=15*((a-b)*sin(theta)-c*sin((a/b-1)*theta));
        curveVertex(x,y);
	}
    endShape();
}

function Sanyexian_0102(x0,y0,u1,u2,alp,iscolor)  //三叶线
{
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
		var theta=t*TAU*10;
		var a=1;
		var b=sin(theta);
		var r=a*cos(theta)*(4*b*b-1);
        x=x0+u1*r*cos(theta);
        y=y0+u2*r*sin(theta);
        VecArray[i]=createVector(x,y);
	}
	renderLine(VecArray);
}

function Sanyexian1_0102()  //三叶线
{
	beginShape();
	var VecArray=new Array();
	for(let i=0;i<h;i++)
	{
		var t=i/360.0;
		var theta=t*TAU*10;
		var a=1;
		var b=sin(theta);
		var r=a*cos(theta)*(4*b*b-1);
        x=30*r*cos(theta);
        y=30*r*sin(theta);
        curveVertex(x,y);
	}
	endShape();
}

function Sanyebanxian_0102(x0,y0,u1,u2,L11,L12,L21,L22,alp,iscolor)  //三叶瓣线
{       //L11,L12,L21,L22取不同的值有不同的图形，都取2时为三叶瓣线
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
        x=x0+u1*(L11*cos(theta)+cos(L12*theta));
        y=y0+u2*(L21*sin(theta)-sin(L22*theta));
        VecArray[i]=createVector(x,y);
	}
	renderLine(VecArray);
}

function Sanyebanxian1_0102()  //三叶瓣线
{       //L11,L12,L21,L22取不同的值有不同的图形，都取2时为三叶瓣线
	beginShape();
	for(let i=0;i<h;i++)
	{
		var t=i/360.0;
		var theta=t*TAU;
        x=30*(2*cos(theta)+cos(2*theta));
        y=30*(2*sin(theta)-sin(2*theta));
        curveVertex(x,y);
	}
    endShape();
}



function Xiangrikui1_0102()  //向日葵线
{ //n一般取30——100
	beginShape();
	for(let i=0;i<h;i++)
	{
		var t=i/360.0;
		var theta=t*TAU;
		var r=30+10*sin(theta*30);
        x=10*r*cos(theta);
        y=10*r*sin(theta);
        curveVertex(x,y);
	}
	endShape();
}

function Hello_0102(x0,y0,u,n,L,alp,iscolor)   //嗨
{// n 一般取345，L取567
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
		var theta=t*TAU+PI;
		var r=cos(pow(t,n)*L*TAU)*2+5;
        x=x0+r*u*cos(theta);
        y=y0+r*u*sin(theta);
        VecArray[i]=createVector(x,y);
	}
	renderLine(VecArray);
}

function Hello1_0102()   //嗨
{// n 一般取345，L取567
    beginShape();
	for(let i=0;i<h;i++)
	{
		var t=i/360.0;
		var theta=t*TAU+PI;
		var r=cos(pow(t,4)*5*TAU)*2+5;
        x=r*10*cos(theta);
        y=r*10*sin(theta);
        curveVertex(x,y);
	}
	endShape();
}

function Woguixian_0102(x0,y0,u1,u2,alp,iscolor)  //卧轨线
{
	if(iscolor)
	{
		//clear();
		var r1 = map(sin(frameCount/200.0),-1,1,0,255); // 随机红色分量
        var g = map(sin(frameCount/300.0),-1,1,0,255);   // 随机绿色分量
        var b1 = map(sin(frameCount/300.0),-1,1,100,255); //随机蓝色分量
        stroke(r1,g,b1,alp); // 设置线条颜色、透明度
	}
	var VecArray=new Array();
	for(let i=0;i<h;i++)
	{
		var t=i/360.0;
		var theta=t*TAU*2;
		var r=cos(t*TAU*30)*t*0.5+t*2;
        x=x0+r*u1*cos(theta);
        y=y0+r*u2*sin(theta);
        VecArray[i]=createVector(x,y);
	}
	renderLine(VecArray);
}

function Woguixian1_0102()  //卧轨线
{
	beginShape();
	for(let i=0;i<h;i++)
	{
		var t=i/360.0;
		var theta=t*TAU*2;
		var r=cos(t*TAU*30)*t*0.5+t*2;
        x=r*30*cos(theta);
        y=r*30*sin(theta);
        curveVertex(x,y);
	}
	endShape();
}

function Neiwuhuan_0102(x0,y0,u1,u2,alp,iscolor) //新五环
{
	if(iscolor)
	{
		//clear();
		var r1 = map(sin(frameCount/200.0),-1,1,0,255); // 随机红色分量
        var g = map(sin(frameCount/300.0),-1,1,0,255);   // 随机绿色分量
        var b1 = map(sin(frameCount/300.0),-1,1,100,255); //随机蓝色分量
        stroke(r1,g,b1,alp); // 设置线条颜色、透明度
	}
	var VecArray=new Array();
	for(let i=0;i<h;i++)
	{
		var t=i/360.0;
		var theta=t*TAU*4;
        x=x0+u1*(5*cos(theta)+6*cos((10/6-1)*theta));
        y=y0+u2*(5*sin(theta)-6*sin((10/6-1)*theta));
        VecArray[i]=createVector(x,y);
	}
	renderLine(VecArray);
}

function Neiwuhuan1_0102() //新五环
{
	beginShape();
	for(let i=0;i<h;i++)
	{
		var t=i/360.0;
		var theta=t*TAU*4;
        x=10*(5*cos(theta)+6*cos((10/6-1)*theta));
        y=10*(5*sin(theta)-6*sin((10/6-1)*theta));
        curveVertex(x,y);
	}
	endShape();
}

function Jiankaixian_0102(x0,y0,u,alp,iscolor) //渐开线
{
	if(iscolor)
	{
		//clear();
		var r1 = map(sin(frameCount/400.0),-1,1,100,255); // 随机红色分量
        var g = map(sin(frameCount/300.0),-1,1,0,255);   // 随机绿色分量
        var b1 = map(sin(frameCount/200.0),-1,1,100,255); //随机蓝色分量
        stroke(r1,g,b1,alp); // 设置线条颜色、透明度
	}
	var VecArray=new Array();
	for(let i=0;i<h;i++)
	{
		var t=i/360.0;
		var theta=t*TAU*4;
		var r=t*(cos(t*TAU*16)*0.5*t+1);
        x=x0+u*r*cos(theta);
        y=y0+u*r*sin(theta);
        VecArray[i]=createVector(x,y);
	}
	renderLine(VecArray);
}

function Jiankaixian1_0102() //渐开线
{
	beginShape();
	var VecArray=new Array();
	for(let i=0;i<h;i++)
	{
		var t=i/360.0;
		var theta=t*TAU*4;
		var r=t*(cos(t*TAU*16)*0.5*t+1);
        x=5*r*cos(theta);
        y=5*r*sin(theta);
        curveVertex(x,y);
	}
	endShape();
}

function SunLine1_0102()
{
	beginShape();
	for(let i=0;i<h;i++)
	{
		var t=i/360.0;
		var theta=t*TAU;
		var r=1.5*cos(50*theta)+1;
        x=10*r*cos(theta);
        y=10*r*sin(theta);
        curveVertex(x,y);
	}
	endShape();
}

function renderLine(VecArray)  //渲染1
{
	for(let i=0;i<VecArray.length-1;i++)
	{
		var P0=VecArray[i];
		var P1=VecArray[i+1];
		
		line(P0.x,P0.y,P1.x,P1.y);
	}
}


function renderLine2(VecArray) //渲染方式2
{
    for(i=0;i<VecArray.length;i++)
	{
		var P0=VecArray[i];
		if(i==VecArray.length-1)
		{
			var P1=VecArray[0];
		}
		else
		{
			var P1=VecArray[i+1];
		}
		line(P0.x,P0.y,P1.x,P1.y);
	}
}


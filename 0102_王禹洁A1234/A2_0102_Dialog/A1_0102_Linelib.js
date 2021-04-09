function line_Xindiantu_0102(x0,y0,x1,y1,a,u,xshape,Spd,k,alp,iscolor,OK)   //心电图动态
{
	if(iscolor)
	{
		r1 = map(sin(frameCount/200.0),-1,1,100,255); // 随机红色分量
        g = map(sin(frameCount/300.0),-1,1,0,255);   // 随机绿色分量
        b = map(sin(frameCount/400.0),-1,1,100,255); //随机蓝色分量
        stroke(r1,g,b,alp); // 设置线条颜色、透明度
	}
	var VecArray=new Array();
	var t=a*0.2*millis()/1000;
	var TNow = Spd * millis()/1000 + k; // 时间
	if(OK)
	{
		var t1 = TNow - floor(TNow); // 取整数部分
	}
	else
	{
		var t1=0.5;
	}
	var j=0;
	var xt=lerp(x0,x1,t1);
	var yt=lerp(y0,y1,t1);
	for(let i=0;i<h;i++)
	{
        var theta=i*TAU/360.0;
        var r=sin(theta*2)+map(mouseY,0,700,0,10);//控制纵向
        x=xt+u*i*xshape/360.0;
        y=yt+u*r*sin(t+theta*6);
        VecArray[j]=createVector(x,y);
        j++;
	}
	renderLine(VecArray);
}

function line_Xindiantu2_0102(x0,y0,x1,y1,t,shape,u,xshape,yshape,alp,iscolor)   //心电图静态
{
	//clear();
	if(iscolor)
	{
		r1 = map(sin(frameCount/200.0),-1,1,100,255); // 随机红色分量
        g = map(sin(frameCount/300.0),-1,1,0,255);   // 随机绿色分量
        b = map(sin(frameCount/400.0),-1,1,100,255); //随机蓝色分量
        stroke(r1,g,b,alp); // 设置线条颜色、透明度
	}
    var xt=lerp(x0,x1,t);
    var yt=lerp(y0,y1,t);
	var VecArray=new Array();
	for(let i=0;i<h;i++)
	{
        var theta=i*TAU/360.0;
        var r=sin(theta*2)+yshape;//控制纵向
        x=xt+u*i*xshape/360.0;
        y=yt+u*r*sin(shape+theta*6);
        VecArray[i]=createVector(x,y);
	}
	renderLine(VecArray);
}

function line_Heart1_0102(x0,y0,x1,y1,a,u,d,xshape,Spd,k,sc,cm,SpriteFcn,alp,colorchange,OK) //心电图动态可换函数
{
	//clear(); //u用来调节总体大小，d用来调节其中的函数的距离，xshape横向大小，sc梅花大小，cm颜色变化速度，SpriteFcn函数，alp不透明度，colorchange颜色改变模式
	var t=a*0.2*millis()/1000;
	var TNow = Spd * millis()/1000 + k; // 时间
	if(OK)
	{
		var t1 = TNow - floor(TNow); // 取整数部分
	}
	else
	{
		var t1=0.5;
	}
	var xt=lerp(x0,x1,t1);
	var yt=lerp(y0,y1,t1);
	for(let i=0;i<h;i+=d)
	{
        var theta=i*TAU/360.0;
        var r=sin(theta*2)+map(mouseY,0,700,0,10);//控制纵向
        x=xt+u*i*xshape/360.0;
        y=yt+u*r*sin(t+theta*6);
        push();
        translate(x,y);
        scale(sc,sc);
        if(colorchange==0)
        {
        	 var r1=map(sin(frameCount*cm/200.0),-1,1,100,255); // 随机红色分量
             var g = map(sin(frameCount*cm/300.0),-1,1,0,255);   // 随机绿色分量
             var b = map(sin(frameCount*cm/400.0),-1,1,100,255); //随机蓝色分量
             stroke(r1,g,b,alp); // 设置线条颜色、透明度
        }
        else if(colorchange==1)
        {
        	 var r1=map(sin(frameCount*cm*i/200.0),-1,1,100,255); // 随机红色分量
             var g = map(sin(frameCount*cm*i/300.0),-1,1,0,255);   // 随机绿色分量
             var b = map(sin(frameCount*cm*i/400.0),-1,1,100,255); //随机蓝色分量
             stroke(r1,g,b,alp); // 设置线条颜色、透明度
        }
        SpriteFcn();
        pop();
	}
}

function line_Heart2_0102(x0,y0,x1,y1,shape,t1,u,xshape,d,sc,cm,SpriteFcn,alp,colorchange) //心电图静态可换函数
{
	//clear();
	var xt=lerp(x0,x1,t1);
	var yt=lerp(y0,y1,t1);
	for(let i=0;i<h;i+=d)
	{
        var theta=i*TAU/360.0;
        var r=sin(theta*2)+map(mouseY,0,700,0,10);//控制纵向
        x=xt+u*i*xshape/360.0;
        y=yt+u*r*sin(shape+theta*6);
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
        	 var r1= map(sin(frameCount*cm*i/200.0),-1,1,100,255); // 随机红色分量
             var g = map(sin(frameCount*cm*i/300.0),-1,1,0,255);   // 随机绿色分量
             var b = map(sin(frameCount*cm*i/400.0),-1,1,100,255); //随机蓝色分量
             stroke(r1,g,b,alp); // 设置线条颜色、透明度
        }
        SpriteFcn();
        pop();
	}
}

/*function line_Heart_0102( //心电图
	x0,y0,x1,y1,
	radius,Freq,SpriteFcn,Scale,Spd,T0,cm,alp)  
{
	var j=map(T0,0,360,0,1);
	var TNow = Spd * millis()/1000 + j; // 时间
	var t = TNow - floor(TNow); // 取整数部分
	var xt = lerp(x0,x1,t);
	var yt = lerp(y0,y1,t);
    var theta=T0*TAU/360.0;
    var r=sin(theta*2)+2;
    x=xt+radius*Freq*20/360.0;
    y=yt+radius*r*sin(t+theta*6);
    push();
    translate(x,y);
    scale(Scale,Scale);
    var r1 = map(sin(frameCount*cm/200.0),-1,1,100,255); // 随机红色分量
    var g = map(sin(frameCount*cm/300.0),-1,1,0,255);   // 随机绿色分量
    var b = map(sin(frameCount*cm/400.0),-1,1,100,255); //随机蓝色分量
    stroke(r1,g,b,alp); // 设置线条颜色、透明度
    strokeWeight(1/Scale);
    SpriteFcn(0,0,5);
    SpriteFcn();
    pop();

}
*/
function line_Ajimide_0102(x0,y0,x1,y1,t,t1,u,iscolor) //阿基米德静态线
{
	//clear();
	if(iscolor)
	{
		r1 = map(sin(frameCount/200.0),-1,1,100,255); // 随机红色分量
        g = map(sin(frameCount/300.0),-1,1,0,255);   // 随机绿色分量
        b = map(sin(frameCount/400.0),-1,1,100,255); //随机蓝色分量
        stroke(r1,g,b,100); // 设置线条颜色、透明度
	}
	var xt = lerp(x0,x1,t1);
	var yt = lerp(y0,y1,t1);
	var VecArray=new Array();
	for(let i=0;i<h;i++)
	{
        var theta=(i*TAU/360.0)*2-TAU;
        var r1=10*theta;//10为控制大小
        x=xt+u*r1*cos(theta); 
        y=yt+u*r1*sin(t*theta);
        VecArray[i]=createVector(x,y);
	}
	renderLine(VecArray);
}

function line_Ajimide0_0102(x0,y0,x1,y1,d,t,t1,u,sc,cm,alp,SpriteFcn,colorchange) //阿基米德静态可换函数线
{
	//clear();     //阿基米德静态可换函数线
	var xt = lerp(x0,x1,t1);
	var yt = lerp(y0,y1,t1);

	for(let i=0;i<h;i+=d)
	{
        var theta=(i*TAU/360.0)*2-TAU;
        var r1=10*theta;//10为控制大小
        x=xt+u*r1*cos(theta); 
        y=yt+u*r1*sin(t*theta);
        push();
        translate(x,y);
        scale(sc,sc);
        if(colorchange==0)
        {
        	 var r1= map(sin(frameCount*cm/200.0),-1,1,0,255); // 随机红色分量
             var g = map(sin(frameCount*cm/300.0),-1,1,0,255);   // 随机绿色分量
             var b = map(sin(frameCount*cm/400.0),-1,1,0,255); //随机蓝色分量
             stroke(r1,g,b,alp); // 设置线条颜色、透明度
        }
        else if(colorchange==1)
        {
        	 var r1=map(sin(frameCount*cm*i/200.0),-1,1,100,255); // 随机红色分量
             var g = map(sin(frameCount*cm*i/300.0),-1,1,0,255);   // 随机绿色分量
             var b = map(sin(frameCount*cm*i/400.0),-1,1,100,255); //随机蓝色分量
             stroke(r1,g,b,alp); // 设置线条颜色、透明度
        }
        SpriteFcn();
        pop();
	}

}

function line_Ajimide1_0102(x0,y0,x1,y1,d,u,T0,Spd,sc,cm,alp,SpriteFcn,colorchange) //Ajimide_u_控制线的大小_sc_缩放系数_alp_不透明度_SpriteFcn函数
{
	//clear();                                         //阿基米德动态可换函数线
   	var j=map(T0,0,360,0,1);
	var TNow = Spd * millis()/1000 + j; // 时间
	var t1 = TNow - floor(TNow); // 取整数部分
	var xt = lerp(x0,x1,t1);
	var yt = lerp(y0,y1,t1);
	var t=millis()/1000;
	for(let i=0;i<h;i+=d)
	{
        var theta=(i*TAU/360.0)*2-TAU;
        var r1=10*theta;//10为控制大小
        x=xt+u*r1*cos(theta); //
        y=yt+u*r1*sin(t*theta);
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
        	 var r1= map(sin(frameCount*cm*i/200.0),-1,1,100,255); // 随机红色分量
             var g = map(sin(frameCount*cm*i/300.0),-1,1,0,255);   // 随机绿色分量
             var b = map(sin(frameCount*cm*i/400.0),-1,1,100,255); //随机蓝色分量
             stroke(r1,g,b,alp); // 设置线条颜色、透明度
        }
        SpriteFcn();
        pop();
	}
}

function line_Ajimide2_0102(x0,y0,x1,y1,u,T0,Spd,sc,cm,alp,iscolor)  //阿基米德螺旋线动态线
{
	//clear();
	if(iscolor)
	{
		r = map(sin(frameCount*cm/200.0),-1,1,100,255); // 随机红色分量
        g = map(sin(frameCount*cm/300.0),-1,1,0,255);   // 随机绿色分量
        b = map(sin(frameCount*cm/400.0),-1,1,100,255); //随机蓝色分量
        stroke(r,g,b,100); // 设置线条颜色、透明度
	}
   	var j=map(T0,0,360,0,1);
	var TNow = Spd * millis()/1000 + j; // 时间
	var t1 = TNow - floor(TNow); // 取整数部分
	var xt = lerp(x0,x1,t1);
	var yt = lerp(y0,y1,t1);
	var VecArray=new Array();
	var t=millis()/1000;
	for(let i=0;i<h;i++)
	{
        var theta=(i*TAU/360.0)*2-TAU;
        var r1=10*theta;//10为控制大小
        x=xt+u*r1*cos(theta); 
        y=yt+u*r1*sin(t*theta);
        VecArray[i]=createVector(x,y);
	}
	renderLine(VecArray);
}

function line_Cishengbo_0102(x0,y0,x1,y1,xshape,a,u,Spd,k,iscolor)   //次声波动态线
{
	//clear();
	if(iscolor)
	{
		r1 =map(sin(frameCount/200.0),-1,1,100,255); // 随机红色分量
        g = map(sin(frameCount/300.0),-1,1,0,255);   // 随机绿色分量
        b = map(sin(frameCount/400.0),-1,1,100,255); //随机蓝色分量
        stroke(r1,g,b,100); // 设置线条颜色、透明度
	}
	var VecArray=new Array();
	var t=a*0.2*millis()/1000;
	var TNow = Spd * millis()/1000 + k; // 时间
	var t1 = TNow - floor(TNow); // 取整数部分
	var yt=lerp(y0,y1,t1);
	for(let i=0;i<h;i++)
	{
        var theta=i*TAU/360.0;
        x=x0+u*xshape*i/360.0;
        y=yt+u*(i/360.0)*cos(theta*t);
        VecArray[i]=createVector(x,y);
        if(x>x1)
        {
        	break;
        }
	}
	renderLine(VecArray);
}

function line_Cishengbo1_0102(x0,y0,x1,y1,t,u,xshape,yshape,iscolor)  //次声波静态线
{
	//clear();
	if(iscolor)
	{
		r1 =map(sin(frameCount/200.0),-1,1,100,255); // 随机红色分量
        g = map(sin(frameCount/300.0),-1,1,0,255);   // 随机绿色分量
        b = map(sin(frameCount/400.0),-1,1,100,255); //随机蓝色分量
        stroke(r1,g,b,100); // 设置线条颜色、透明度
	}
	var VecArray=new Array();
	var yt=lerp(y0,y1,t);
	for(let i=0;i<h;i++)
	{
        var theta=i*TAU/360.0;
        x=x0+u*xshape*i/360.0;
        y=yt+u*(i/360.0)*cos(theta*yshape);
        VecArray[i]=createVector(x,y);
        if(x>x1)
        {
        	break;
        }
	}
	renderLine(VecArray);
}

function line_Cishengbo2_0102(x0,y0,x1,y1,t,u,d,xshape,yshape,sc,cm,alp,SpriteFcn,colorchange)  //次声波静态可换函数
{
	//clear();
	var yt=lerp(y0,y1,t);
	for(let i=0;i<h;i+=d)
	{
        var theta=i*TAU/360.0;
        x=x0+u*xshape*i/360.0;
        y=yt+u*(i/360.0)*cos(theta*yshape);
        if(x>x1)
        {
        	break;
        }
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
        	 var r1= map(sin(frameCount*i/200.0),-1,1,100,255); // 随机红色分量
             var g = map(sin(frameCount*i/300.0),-1,1,0,255);   // 随机绿色分量
             var b = map(sin(frameCount*i/400.0),-1,1,100,255); //随机蓝色分量
             stroke(r1,g,b,alp); // 设置线条颜色、透明度
        }
        SpriteFcn();
        pop();
    
	}
}

function line_Cishengbo3_0102(x0,y0,x1,y1,a,u,d,Spd,k,xshape,sc,cm,alp,SpriteFcn,colorchange)  //次声波动态可换函数
{
	//clear();
	var t=a*0.2*millis()/1000;
	var TNow = Spd * millis()/1000 + k; // 时间
	var t1 = TNow - floor(TNow); // 取整数部分
	var yt=lerp(y0,y1,t1);
	for(let i=0;i<h;i+=d)
	{
        var theta=i*TAU/360.0;
        x=x0+u*xshape*i/360.0;
        y=yt+u*(i/360.0)*cos(theta*t);
        if(x>x1)
        {
        	break;
        }
        push();
        translate(x,y);
        scale(sc,sc);
        if(colorchange==0)
        {
        	 var r1= map(sin(frameCount*cm/400.0),-1,1,100,255); // 随机红色分量
             var g = map(sin(frameCount*cm/200.0),-1,1,0,255);   // 随机绿色分量
             var b = map(sin(frameCount*cm/300.0),-1,1,100,255); //随机蓝色分量
             stroke(r1,g,b,alp); // 设置线条颜色、透明度
        }
        else if(colorchange==1)
        {
        	 var r1= map(sin(frameCount*cm*i/200.0),-1,1,100,255); // 随机红色分量
             var g = map(sin(frameCount*cm*i/300.0),-1,1,0,255);   // 随机绿色分量
             var b = map(sin(frameCount*cm*i/400.0),-1,1,100,255); //随机蓝色分量
             stroke(r1,g,b,alp); // 设置线条颜色、透明度
        }
        SpriteFcn();
        pop();
    
	}
}






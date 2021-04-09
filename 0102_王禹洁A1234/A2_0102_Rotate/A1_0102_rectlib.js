function Rect_Sprite_0102(x0,y0,w,h1,radius,d,SpriteFcn,sc,cm,colorchange,alp)
{
	if(colorchange)
	{
		//clear();
		var r1 = map(sin(frameCount*cm/400.0),-1,1,0,255); // 随机红色分量
        var g = map(sin(frameCount*cm/300.0),-1,1,100,255);   // 随机绿色分量
        var b1 = map(sin(frameCount*cm/200.0),-1,1,100,255); //随机蓝色分量
        stroke(r1,g,b1,alp); // 设置线条颜色、透明度
	}
	rect(x0,y0,w,h1,radius);
	for(let i=0;i<=w;i+=d)
	{
		x=x0+i;
		y=y0;
		push();
		translate(x,y);
		scale(sc,sc);
		SpriteFcn();
		pop();
	}
	for(i=0;i<=w;i+=d)
	{
		x=x0+i;
		y=y0+h1;
		push();
		translate(x,y);
		scale(sc,sc);
		SpriteFcn();
		pop();
	}
	for(i=0;i<=h1;i+=d)
	{
		x=x0;
		y=y0+i;
		push();
		translate(x,y);
		scale(sc,sc);
		SpriteFcn();
		pop();
	}
	for(i=0;i<=h1;i+=d)
	{
		x=x0+w;
		y=y0+i;
		push();
		translate(x,y);
		scale(sc,sc);
		SpriteFcn();
		pop();
	}

}
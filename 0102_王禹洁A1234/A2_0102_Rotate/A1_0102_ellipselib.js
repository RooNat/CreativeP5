function Ellipse_Sprite_0102(x0,y0,w,h1,d,SpriteFcn,sc,cm,colorchange,alp)
{
    
    //ellipse(x0,y0,w,h);
    for(let i=0;i<h*4;i+=d)
    {
        var t=i/360.0;
        x=x0+(w/2)*cos(t*TAU);
        y=y0+(h1/2)*sin(t*TAU);
        push();
        translate(x,y);
        scale(sc,sc);
        if(colorchange==1)
        {
           var r1 = map(sin(frameCount*cm/400.0),-1,1,0,255); // 随机红色分量
           var g = map(sin(frameCount*cm/300.0),-1,1,100,255);   // 随机绿色分量
           var b1 = map(sin(frameCount*cm/200.0),-1,1,100,255); //随机蓝色分量
           stroke(r1,g,b1,alp); // 设置线条颜色、透明度
        }
        else if(colorchange==0)
        {
            var r1 = map(sin(frameCount*i/400.0),-1,1,0,255); // 随机红色分量
            var g = map(sin(frameCount*i/300.0),-1,1,100,255);   // 随机绿色分量
            var b1 = map(sin(frameCount*i/200.0),-1,1,100,255); //随机蓝色分量
            stroke(r1,g,b1,alp); // 设置线条颜色、透明度
        }
        SpriteFcn();
        pop();
    }
}
function Triangle_Sprite_0102(x0,y0,x1,y1,x2,y2,d,SpriteFcn,sc,cm,colorchange,alp)
{
    if(colorchange)
    {
        //clear();
        var r1 = map(sin(frameCount*cm/400.0),-1,1,0,255); // 随机红色分量
        var g = map(sin(frameCount*cm/300.0),-1,1,100,255);   // 随机绿色分量
        var b1 = map(sin(frameCount*cm/200.0),-1,1,100,255); //随机蓝色分量
        stroke(r1,g,b1,alp); // 设置线条颜色、透明度
    }
    //triangle(x0,y0,x1,y1,x2,y2);
    for(t=0;t<=1;t+=d)
    {
        xt=lerp(x0,x1,t);
        yt=lerp(y0,y1,t);
        push();
        translate(xt,yt);
        scale(sc,sc);
        SpriteFcn();
        pop();
    }
    for(t=0;t<=1;t+=d)
    {
        xt=lerp(x0,x2,t);
        yt=lerp(y0,y2,t);
        push();
        translate(xt,yt);
        scale(sc,sc);
        SpriteFcn();
        pop();
    }
    for(t=0;t<=1;t+=d)
    {
        xt=lerp(x1,x2,t);
        yt=lerp(y1,y2,t);
        push();
        translate(xt,yt);
        scale(sc,sc);
        SpriteFcn();
        pop();
    }

}
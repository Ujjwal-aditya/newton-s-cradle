class Bob{
    constructor(x,y)
    {
        var bobOptions={
            isStatic:false,
            restitution:1,
            friction:0.1,
            density:1
        }      
        this.r = 40;
        this.body = Bodies.circle(x,y,this.r,bobOptions);
        World.add(world,this.body);
      
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        fill("blue");
        ellipseMode()
        translate(pos.x,pos.y);
        rotate(angle);
        ellipse(0,0,this.r,this.r)
        pop();
    }
}
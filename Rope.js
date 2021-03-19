class Rope
{
    constructor(bodyA,bodyB,offsetX)
    {
        this.offsetX=offsetX;
      
        this.bodyB = bodyB;
        var ropeOptions =  {
          bodyA : bodyA.body,
          bodyB : bodyB.body,
          pointB:{x:this.offsetX,y:0},
          length:180,
          stiffness:1
        }

        this.rope = Constraint.create(ropeOptions);
        World.add(world,this.rope);
    }

    display()
    {
        var pointA = this.rope.bodyA.position;
        strokeWeight(3);
        fill("red");
        line(pointA.x,pointA.y,280+this.offsetX,10);
    }

}
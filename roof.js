class Roof
{
    constructor()
    {
        var options={
            isStatic:true
        }
        this.roof = Bodies.rectangle(280,10,400,20,options);
        World.add(world,this.roof)
    }

    display()
    {
        var roofPos = this.roof.position ;
        //roofPos.x = mouseX;
        //roofPos.y = mouseY;
        fill("");
        rectMode(CENTER);
        rect(roofPos.x,roofPos.y,400,80);
    }
}
class Hand{
    constructor(x,y){
        var options={
            stiffness:0.3,
            density:0.8
        }
        this.body1 = Bodies.rectangle(x, y, width, height,options);
        this.width=200;
        this.height=20;
        World.add(world,this.body1);
    }
    display(){
    var pos=this.body.position;
        var pos = this.body.position
    var angle = this.body.angle
    push();
    translate(pos.x, pos.y)
    rotate(angle);
        fill("pink");
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}
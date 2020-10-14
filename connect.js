class Connect{
    constructor(pointA,bodyB){
        var options={
            pointA:pointA,
            bodyB:bodyB,
            length:0
        }
        this.body=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.body)
    }
    display(){
        var pointA = this.body.bodyB.position;
            var pointB = this.pointA;
            strokeWeight(4);
            //line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

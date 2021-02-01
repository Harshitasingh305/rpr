class Stone{
    constructor(x,y,w,h){
    var options={
        'isStatic':false,
        'restitution':0,
        'friction':2,
        'density':1.2
    }
        this.x=x;
		this.y=y;
		this.w=w
        this.h=h
        this.image = loadImage("stone.png");
       this.body=Bodies.rectangle(x, y, w, h ,options);
        World.add(world, this.body);
    }
    display(){
        var stonePos=this.body.position;		
   var angle=this.body.angle;
			push()
			translate(stonePos.x, stonePos.y);
            rotate(angle)
			//rectMode(CENTER)
			//fill(128,128,128)
            imageMode(CENTER);
        image(this.image, 0, 0, this.r);
			//rect(0,0,this.w, this.h);
			pop()
			

        
    }
}
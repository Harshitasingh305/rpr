class Mango{
    constructor(x,y,r){
    var options={
    'isStatic' :true,
        'restitution':0,
        'friction':1,
        'density':1.6

    }

    this.x = x;
    this.y = y;
    this.r=r
    this.image = loadImage("mango.png");
    this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
    World.add(world, this.body);

}
display(){
        
        var pos=this.body.position;
           var angle=this.body.angle;
        push()
        translate(pos.x, pos.y);
        rectMode(CENTER)
        rotate(angle)
    imageMode(CENTER);
        image(this.image, 0, 0, this.r);
      //  fill(255,0,255)
        
        
        //ellipse(0,0,this.r, this.r);
        pop()
    }
    
}
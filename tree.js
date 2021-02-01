class Tree{
	constructor(x,y,w,h)
	{
		var options={
			'isStatic':true,
			'density':1.2		
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.image = loadImage("tree.png");
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var treePos=this.body.position;		
            var angle=this.body.angle;
			push()
			translate(treePos.x, treePos.y);
			rotate(angle)
			imageMode(CENTER);
        image(this.image, 0, 0, this.r);
			//fill(128,128,128)
			//rect(0,0,this.w, this.h);
			pop()
			
	}

}
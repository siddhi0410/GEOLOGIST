class Iron{
	constructor(x,y,width,height)
	{
	var options={
		restitution:0.8,
		friction:9,
		density:12
	}
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height;
		World.add(world, this.body);

	}
	display()
	{
        var pos = this.body.position;
    var angle = this.body.angle;

			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
            rotate(angle);
            rect(0, 0, this.width, this.height);
			fill("red");
			pop()
	}

}
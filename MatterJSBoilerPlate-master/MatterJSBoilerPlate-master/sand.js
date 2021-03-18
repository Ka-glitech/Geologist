class Sand{ 
  constructor(x,y,r) { 
    var options={ 
      restitution:0.3,
      friction:5, 
      density:1
      } 
      this.x=x; this.y=y;
      this.r=r 
      this.body=Bodies.circle(this.x, this.y, (this.r-r-20)/2, options) 
       World.add(world, this.body);
       }
       display() {
       var rubberpos=this.body.position;
       push() 
       translate(rubberpos.x, rubberpos.y);
        ellipseMode(RADIUS);
        strokeWeight(10);
        stroke("brown");
        fill("brown"); 
        ellipse(0,0,this.r, this.r);
          pop() 
       } 
}
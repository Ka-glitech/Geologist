class Iron {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.5,
          'density':2.8,
          'friction':1.0
      }
      this.body = Bodies.rectangle(x, y, 80, 80, options);
      this.width = 80;
      this.height = 80;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("gray");
      strokeWeight(4);
      stroke("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
}
//asteroids are compressed??????


function Asteroids() {
  this.pos = createVector(random(width), random(height));
  this.vel = p5.Vector.random2D(8, 15);
  this.r = 30;
  this.total = floor(random(5, 15));
  this.offset = []; //irregular shape
  for (var i = 0; i < this.total; i++) {
    this.offset[i] = random(-13, 13);
  }

  this.update = function() {
    this.pos.add(this.vel);
  }

  this.render = function() {
    push();
    translate(this.pos.x, this.pos.y);

    beginShape();
    for (var i = 0; i < this.total; i++) {
      var angle = map(i, 0, this.total, 0, TWO_PI);
      var x = (this.r + this.offset[i] * 0.5) * cos(angle); 
      // Multiply by 0.5 (or adjust as needed)
      var y = (this.r + this.offset[i] * 0.5) * sin(angle); 
      // Multiply by 0.5 (or adjust as needed)
      vertex(x, y);
    }
    endShape(CLOSE);

    pop();
  }

  //edge detection
  this.edges = function() {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }

  }

}


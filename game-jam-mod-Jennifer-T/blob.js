
class Blob {
  constructor() {
    this.size = 50;
    this.x = width;
    this.y = height - this.size - 1;
    this.speed = 8;
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  getX() {
    return this.x;
  }

  move() {
    this.x -= this.speed;
  }

  show() {
    //rect(this.x, this.y, this.size, this.size);
    triangle(this.x, height, this.x + this.size / 2, this.y, this.x + this.size, height);
  }


}
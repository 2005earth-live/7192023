//let playerImage = new Image();
//playerImage.src = 'assets/rocket.jpg';

class Player {
  constructor() {
    this.size = 65;
    this.x = 50;
    this.y = height - this.size - 1;
    this.vy = 0;
    this.gravity = 1.5;
    this.playerImage = loadImage("assets/rocket.png"); // Replace with the actual path to your player image
  }

  jump() {
    if (this.y === height - this.size - 1) {
      this.vy = -23;
    }
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.size - 1);
  }

  show() {
    image(this.playerImage, this.x, this.y, this.size, this.size);
  }

  hits(blob) {
    return collideLineRect(
      blob.x,
      height,
      blob.x + blob.size / 2,
      blob.y,
      this.x,
      this.y,
      this.size,
      this.size
    );
  }
}
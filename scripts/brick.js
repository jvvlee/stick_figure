BRICK_WIDTH = 0.1
BRICK_HEIGHT = 0.04

class Brick {
  constructor(x, y, canvas, allBricks) {
    this.x = x;
    this.y = y;

    this.row = null;
    this.column = null;

    this.allBricks = allBricks;
    this.canvas = canvas;

    this.length = (this.canvas.width)*BRICK_WIDTH;
    this.height = (this.canvas.height)*BRICK_HEIGHT
    this.color = RAINBOW[Math.floor(Math.random() * RAINBOW.length)];
  }
  
  draw(context) {
    // context.fillStyle = RAINBOW[Math.floor(Math.random() * RAINBOW.length)];
    context.fillStyle = this.color
    context.fillRect(
      this.x - (this.length / 2),
      this.y - (this.height / 2),
      this.length,
      this.height
    )
  }

  collisionCoordinates() {
    return {
      x1: this.x - (this.length / 2),
      y1: this.y - (this.height / 2),
      x2: this.x + (this.length / 2),
      y2: this.y + (this.height / 2),
    }
  }
}

// const watermelon = [
//   [1,1,'y'],
//   [2,1,'y'],
//   [2,2,'r'],
// ]
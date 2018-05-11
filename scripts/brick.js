BRICK_WIDTH = 0.1
BRICK_HEIGHT = 0.04

class Brick {
  constructor(column, row, canvas, color=null) {
    this.row = row;
    this.column = column;

    this.x = column * canvas.width * BRICK_WIDTH;
    this.y = row * canvas.height * BRICK_HEIGHT;
    this.canvas = canvas;

    this.length = (this.canvas.width)*BRICK_WIDTH;
    this.height = (this.canvas.height)*BRICK_HEIGHT
    this.color = color || RAINBOW[Math.floor(Math.random() * RAINBOW.length)];
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

  serialize() {
    return JSON.stringify({
      r: this.row,
      c: this.column,
      color: this.color
    })
  }
}

class Paddle {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = canvas.width / 2;
    this.y = canvas.height - 100;
    this.paddleLength = 100;
    this.paddleHeight = 10;
  }

  setPosition(mousePositionX) {
    this.x = mousePositionX;
  }

  draw(context) {
    context.fillStyle = "#AAF0D1";
    context.fillRect(
      this.x - (this.paddleLength / 2),
      this.y - (this.paddleHeight / 2),
      this.paddleLength,
      this.paddleHeight
    )
  }

  collisionCoordinates() {
    return {
      x1: this.x - (this.paddleLength / 2),
      y1: this.y - (this.paddleHeight / 2),
      x2: this.x + (this.paddleLength / 2),
      y2: this.y + (this.paddleHeight / 2),
    }
  }
}
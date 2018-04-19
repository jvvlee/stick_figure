class Ball {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;

    this.radius = 10;
    // this.angle = Math.PI / 3;
    // this.speed = 1;
    this.dx = 0.5;
    this.dy = 0.5;
  }

  move() {
    // this.x += this.speed * Math.cos(this.angle);
    // this.y += this.speed * Math.sin(this.angle);
    this.x += this.dx
    this.y += this.dy
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = "black";
    context.fill();
  }

  horizontalBounce() {
    this.dy *= -1
  }

  verticalBounce() {
    this.dx *= -1
  }
}

class Paddle {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = canvas.width / 2;
    this.y = canvas.height - 100;
    this.paddleLength = 50;
    this.paddleHeight = 10;
  }

  move(magnitude) {
    const leftEdge = 0 + (this.paddleLength / 2);
    const rightEdge = canvas.width - (this.paddleLength / 2)

    if (leftEdge >= this.x + magnitude || this.x >= rightEdge + magnitude) {
      return
    }

    this.x += magnitude;
  }

  draw(context) {
    context.fillStyle = "white";
    context.fillRect(
      this.x - (this.paddleLength / 2),
      this.y - (this.paddleHeight / 2),
      this.paddleLength,
      this.paddleHeight
    )
  }
}
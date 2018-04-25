class Ball {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;

    this.radius = 10;
    // this.angle = Math.PI / 3;
    // this.speed = 1;
    this.dx = 10.5;
    this.dy = 10.5;
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

  collisionCoordinates() {
    return {
      x1: this.x - this.radius,
      y1: this.y - this.radius,
      x2: this.x + this.radius,
      y2: this.y + this.radius,
    }
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

  setPosition(mousePositionX) {
    this.x = mousePositionX;
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

  collisionCoordinates() {
    return {
      x1: this.x - (this.paddleLength / 2),
      y1: this.y - (this.paddleHeight / 2),
      x2: this.x + (this.paddleLength / 2),
      y2: this.y + (this.paddleHeight / 2),
    }
  }
}

class Brick {
  constructor(x, y, canvas, allBricks) {
    this.x = x;
    this.y = y;
    this.allBricks = allBricks;
    this.canvas = canvas;

    this.length = 30;
    this.height = 15;
  }
  
  draw(context) {
    context.fillStyle = "green";
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
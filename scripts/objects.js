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
    this.staging = true;
  }

  move(paddle) {
    if (this.staging == true ) {
      this.follow(paddle);
    } else {
      this.x += this.dx
      this.y += this.dy
    }
  }

  launch() {
    this.staging = false;
  }

  follow(paddle) {
    this.x = paddle.x;
    this.y = paddle.y - 20;
  }

  unmove() {
    this.x -= this.dx
    this.y -= this.dy
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
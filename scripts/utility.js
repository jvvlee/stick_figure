class BallCollisionDetector {
  constructor(paddle, ball, canvas) {
    this.paddle = paddle;
    this.ball = ball;
    this.canvas = canvas;
  }

  step() {
    this.detectPaddleCollision();
    this.wallCollision();
  }

  detectPaddleCollision() {
    const distance = Math.sqrt(
      Math.pow(this.paddle.x - this.ball.x, 2) + Math.pow(this.paddle.y - this.ball.y, 2)
    );

    if (distance < this.ball.radius) {
      this.ball.horizontalBounce();
    }
  }

  wallCollision() {
    const futureXPos = this.ball.x + this.ball.dx + this.ball.radius;
    const futureYPos = this.ball.y + this.ball.dy + this.ball.radius;

    const maxX = this.canvas.width;
    const maxY = this.canvas.height;

    if (futureXPos < 0 || futureXPos > maxX) {
      this.ball.verticalBounce();
      return
    }

    if (futureYPos < 0 || futureYPos > maxY) {
      this.ball.horizontalBounce();
      return
    }
  }
}

class Painter {
  constructor(canvas, context, paddle, ball) {
    this.canvas = canvas;
    this.context = context;
    this.paddle = paddle;
    this.ball = ball;
  }

  draw() {
    blah.radialGradient();
    this.paddle.draw(this.context);
    this.ball.draw(this.context);
  }
}

class Brain {
  constructor(paddle, ball) {
    this.paddle = paddle;
    this.ball = ball;
  }

  step() {
    const distance = Math.sqrt(
      Math.pow(this.paddle.x - this.ball.x, 2) + Math.pow(this.paddle.y - this.ball.y, 2)
    );

    if (distance < this.ball.radius) {
      window.alert("SMAAAAAAASH!");
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

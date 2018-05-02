class Painter {
  constructor(canvas, context, paddle, ball, allBricks) {
    this.canvas = canvas;
    this.context = context;
    this.paddle = paddle;
    this.ball = ball;
    this.allBricks = allBricks;
  }

  draw() {
    background.radialGradient();
    this.paddle.draw(this.context);
    this.ball.draw(this.context);
    this.allBricks.get().forEach(brick => {
      brick.draw(this.context);
    });
  }
}
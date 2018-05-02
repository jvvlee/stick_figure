class BallCollisionDetector {
  constructor(paddle, ball, canvas, brickManager) {
    this.paddle = paddle;
    this.ball = ball;
    this.canvas = canvas;
    this.brickManager = brickManager;
  }

  step() {
    this.detectPaddleCollision();
    this.didHeDied();
    this.wallCollision();

    let bounce = null
    
    this.brickManager.get().forEach(brick => {
      const bounceResult = this.brickCollision(brick);

      if (bounceResult) {
        bounce = bounceResult;
      }
    })

    if (bounce == "horizontal") {
      this.ball.horizontalBounce();
    } else if (bounce == "vertical") {
      this.ball.verticalBounce();
    }
  }

  detectPaddleCollision() {
    const bounce = this.intersectingSquareDimension(this.paddle.collisionCoordinates(), this.ball.collisionCoordinates());

    if (bounce == "horizontal") {
      this.ball.horizontalBounce();
    } else if (bounce == "vertical") {
      this.ball.verticalBounce();
    }
  }

  didHeDied() {
    const futureYPos = this.ball.y + this.ball.dy + this.ball.radius;

    if (this.canvas.height < futureYPos) {
      this.ball.staging = true
      this.brickManager.reconstitute();
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

  brickCollision(brick) {
    const bounce = this.intersectingSquareDimension(this.ball.collisionCoordinates(), brick.collisionCoordinates());

    if (bounce) {
      this.brickManager.removeBrick(brick);
      this.ball.unmove();
    }
    return bounce
  }

  intersectingSquareDimension(ball, obj2) {
    const left = Math.max(ball.x1, obj2.x1);
    const right = Math.min(ball.x2, obj2.x2);

    if (left > right) {
      return null
    }

    const bottom = Math.min(ball.y2, obj2.y2);
    const top = Math.max(ball.y1, obj2.y1);

    if (bottom < top) {
      return null
    }

    
    const width = Math.abs(left-right);
    const length = Math.abs(bottom-top);


    if (width > length) {
      return "horizontal"
    } else {
      return "vertical"
    }
  }
}
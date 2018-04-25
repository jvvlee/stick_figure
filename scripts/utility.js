class BallCollisionDetector {
  constructor(paddle, ball, canvas, brickManager) {
    this.paddle = paddle;
    this.ball = ball;
    this.canvas = canvas;
    this.brickManager = brickManager;
  }

  step() {
    this.detectPaddleCollision();
    this.wallCollision();
    this.brickManager.get().forEach(brick => {
      this.brickCollision(brick);
    })
  }

  detectPaddleCollision() {
    if (this.intersectingSquares(this.paddle.collisionCoordinates(), this.ball.collisionCoordinates())) {
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

  brickCollision(brick) {
    if (this.intersectingSquares(brick.collisionCoordinates(), this.ball.collisionCoordinates())) {
      this.ball.horizontalBounce();
      this.brickManager.removeBrick(brick);
    }
  }

  intersectingSquares(obj1, obj2) {
    const xIntersect = (obj1.x1 < obj2.x1 && obj2.x1 < obj1.x2) || (obj1.x1 < obj2.x2 && obj2.x2 < obj1.x2)
    const yIntersect = (obj1.y1 < obj2.y1 && obj2.y1 < obj1.y2) || (obj1.y1 < obj2.y2 && obj2.y2 < obj1.y2)

    return (xIntersect && yIntersect)
  }

  intersectingSquareDimension() {

  }
}

class Painter {
  constructor(canvas, context, paddle, ball, allBricks) {
    this.canvas = canvas;
    this.context = context;
    this.paddle = paddle;
    this.ball = ball;
    this.allBricks = allBricks;
  }

  draw() {
    blah.radialGradient();
    this.paddle.draw(this.context);
    this.ball.draw(this.context);
    this.allBricks.get().forEach(brick => {
      brick.draw(this.context);
    });
  }
}

class BrickManager {
  constructor() {
    this.allBricks = {}
    this.id = 0
  }

  addBrick(brick) {
    brick.id = this.id
    this.id += 1

    this.allBricks[brick.id] = brick
  }

  removeBrick(brick) {
    delete this.allBricks[brick.id]
  }

  get() {
    //todo not browser compatible
    return Object.values(this.allBricks);
  }
}
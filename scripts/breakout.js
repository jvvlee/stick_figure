// import { Paddle, Ball } from './objects.js';
// import { Painter, Brain } from './utility.js';

const paddle = new Paddle(canvas);
const ball = new Ball(canvas)
const brickManager = new BrickManager();
const painter = new Painter(canvas, context, paddle, ball, brickManager);
const smash = new BallCollisionDetector(paddle, ball, canvas, brickManager);

function loop () {
  ball.move(paddle);
  smash.step();
  painter.draw();

  window.requestAnimationFrame(loop);
}

canvas.addEventListener("mousemove",event => {
  const mousePositionX = event.clientX;

  paddle.setPosition(mousePositionX);
})

canvas.addEventListener("click", event => {
  ball.launch();
})

const brickConfig = readUrlParam("bricks")

if (brickConfig) {
  brickManager.reconstituteFromString(brickConfig, canvas);
} else {
  // for (var row = 1; row < brickManager.rows + 1; row++) {
  //   for (var column = 1; column < brickManager.columns + 1; column++) {
  //     if (row>column) {
  //       const brick = new Brick(column, row, canvas);
  //       brickManager.addBrick(brick);
  //     }
  //   }
  // }
}

brickManager.takeSnapshot();

loop();
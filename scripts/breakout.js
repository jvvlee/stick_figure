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

for (var y = 1; y < brickManager.rows + 1; y++) {
  for (var x = 1; x < brickManager.columns + 1; x++) {
    if (y>x) {
      const brick = new Brick(x, y, canvas);
      brickManager.addBrick(brick);
    }
  }
}

brickManager.takeSnapshot();

loop();
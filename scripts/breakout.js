// import { Paddle, Ball } from './objects.js';
// import { Painter, Brain } from './utility.js';

const paddle = new Paddle(canvas);
const ball = new Ball(canvas)
const batman = new BrickManager();
const painter = new Painter(canvas, context, paddle, ball, batman);
const smash = new BallCollisionDetector(paddle, ball, canvas, batman);

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

for (var y = 1; y < batman.rows + 1; y++) {
  for (var x = 1; x < batman.columns + 1; x++) {

    const xBrick = x * canvas.width * BRICK_WIDTH;
    const yBrick = y * canvas.height * BRICK_HEIGHT;

    const brick = new Brick(xBrick, yBrick, canvas);

    batman.addBrick(brick);
  }
}

batman.takeSnapshot();

loop();
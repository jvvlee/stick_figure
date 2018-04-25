// import { Paddle, Ball } from './objects.js';
// import { Painter, Brain } from './utility.js';

const paddle = new Paddle(canvas);
const ball = new Ball(canvas)
const batman = new BrickManager();
const painter = new Painter(canvas, context, paddle, ball, batman);
const smash = new BallCollisionDetector(paddle, ball, canvas, batman);

function loop () {
  ball.move();
  smash.step();
  painter.draw();

  window.requestAnimationFrame(loop);
}

canvas.addEventListener("mousemove",event => {
  const mousePositionX = event.clientX;

  paddle.setPosition(mousePositionX);
})

for (i = 0; i < 100; i++) {
  const xBrick = Math.random() * canvas.width;
  const yBrick = Math.random() * canvas.height;
  const brick = new Brick(xBrick, yBrick, canvas);

  batman.addBrick(brick);
}


loop();
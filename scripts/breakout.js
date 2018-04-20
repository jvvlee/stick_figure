// import { Paddle, Ball } from './objects.js';
// import { Painter, Brain } from './utility.js';
var allBricks = []

const paddle = new Paddle(canvas);
const ball = new Ball(canvas)
const painter = new Painter(canvas, context, paddle, ball, allBricks);
const smash = new BallCollisionDetector(paddle, ball, canvas);

function loop () {
  ball.move();
  painter.draw();
  smash.step();

  window.requestAnimationFrame(loop);
}

window.onkeydown = function (event) {
  if (event.code === "ArrowLeft") {
    paddle.move(-5);
  } else if (event.code === "ArrowRight") {
    paddle.move(5);
  }
}



for (i = 0; i < 10; i++) {
  const xBrick = Math.random() * canvas.width;
  const yBrick = Math.random() * canvas.height;
  new Brick(xBrick, yBrick, canvas, allBricks);
}


loop();
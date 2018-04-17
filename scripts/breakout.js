// import { Paddle, Ball } from './objects.js';
// import { Painter, Brain } from './utility.js';

const paddle = new Paddle(canvas);
const ball = new Ball(canvas)
const painter = new Painter(canvas, context, paddle, ball);
const brain = new Brain(paddle, ball);

function loop () {
  ball.move();
  painter.draw();
  brain.step();

  window.requestAnimationFrame(loop);
}

window.onkeydown = function (event) {
  if (event.code === "ArrowLeft") {
    paddle.move(-5);
  } else if (event.code === "ArrowRight") {
    paddle.move(5);
  }
}

loop();
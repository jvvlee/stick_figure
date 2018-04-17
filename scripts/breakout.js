class Paddle {
  constructor (canvas) {
    this.canvas = canvas;
    this.x = canvas.width / 2;
    this.y = canvas.height - 100;
  }

  moveLeft () {
    this.x -= 5;
  }

  moveRight () {
    this.x += 5;
  }

  draw (context) {
    const paddleLength = 50;
    const paddleHeight = 10;

    context.fillStyle = "white";
    context.fillRect(
      this.x - (paddleLength / 2),
      this.y - (paddleHeight / 2),
      paddleLength,
      paddleHeight
    )
  }
}

class Ball {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;

    this.radius = 10;
    this.angle = Math.PI/3;
    this.speed = 1;
  }

  move() {
    this.x += this.speed * Math.cos(this.angle);
    this.y += this.speed * Math.sin(this.angle);
  }
  
  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = "black";
    context.fill();
  }
}

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
  constructor (canvas, context, paddle, ball) {
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
    paddle.moveLeft();
  } else if (event.code === "ArrowRight") {
    paddle.moveRight();
  }
}

loop();
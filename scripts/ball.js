class Ball {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;

    this.radius = 10;
    // this.angle = Math.PI / 3;
    // this.speed = 1;
    this.dx = 10.5;
    this.dy = 10.5;
    this.staging = true;
  }

  move(paddle) {
    if (this.staging == true) {
      this.follow(paddle);
    } else {
      this.x += this.dx
      this.y += this.dy
    }
  }

  launch() {
    this.staging = false;
  }

  follow(paddle) {
    this.x = paddle.x;
    this.y = paddle.y - 20;
  }

  unmove() {
    this.x -= this.dx
    this.y -= this.dy
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = "black";
    context.fill();
  }

  horizontalBounce() {
    this.dy *= -1
  }

  verticalBounce() {
    this.dx *= -1
  }

  collisionCoordinates() {
    return {
      x1: this.x - this.radius,
      y1: this.y - this.radius,
      x2: this.x + this.radius,
      y2: this.y + this.radius,
    }
  }
}

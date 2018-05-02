RAINBOW = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "brown",
  "black",
  "white"
]

const canvas = document.getElementById('canvas');

canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight

const context = canvas.getContext('2d');

const gradientConstructor = function (ctx, canvas) {
  this.context = ctx;
  this.canvas = canvas;

  this.radialGradient = function() {
    const xHalf = this.canvas.width / 2;
    const yHalf = this.canvas.height / 2;

    const gradient = this.context.createRadialGradient(xHalf,yHalf,10, xHalf, yHalf, 500);
    const backgroundColor = readUrlParam('color') || "black";

    gradient.addColorStop(0, backgroundColor);
    gradient.addColorStop(1.0, 'white');

    this.context.fillStyle = gradient;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

const background = new gradientConstructor(context, canvas);

background.radialGradient();
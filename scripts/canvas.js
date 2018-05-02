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


const lolObjectConstructor = function (ctx) {
  this.context = ctx;

  this.drawHead = function(x,y,r) {
    this.context.beginPath();
    this.context.arc(x,y,r,0,2*Math.PI);
    this.context.stroke();
  };

  this.drawVerticalStick = function(x, y1, y2) {
    this.context.beginPath();
    this.context.moveTo(x, y1);
    this.context.lineTo(x, y2);
    this.context.stroke();
  };

  this.drawHorizontalStick = function(y, x1, x2) {
    this.context.beginPath();
    this.context.moveTo(x1, y);
    this.context.lineTo(x2, y);
    this.context.stroke();
  };

  this.drawDiagonalStick = function(start, end) {
    this.context.beginPath();
    this.context.moveTo(start[0], start[1]);
    this.context.lineTo(end[0], end[1]);
    this.context.stroke(); 
  }
}

const gradientConstructor = function (ctx, canvas) {
  this.context = ctx;
  this.canvas = canvas;

  this.radialGradient = function() {
    const xHalf = this.canvas.width / 2;
    const yHalf = this.canvas.height / 2;

    const wut = this.context.createRadialGradient(xHalf,yHalf,10, xHalf, yHalf, 500);

    wut.addColorStop(0, 'black')
    // wut.addColorStop(0.5, 'white')
    wut.addColorStop(1.0, 'white')

    this.context.fillStyle = wut;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

const blah = new gradientConstructor(context, canvas);

blah.radialGradient();

const ugh = new lolObjectConstructor(context);

ugh.drawHead(20, 20, 10);
ugh.drawVerticalStick(20, 30, 50);
ugh.drawHorizontalStick(40, 10, 30);
ugh.drawDiagonalStick([20, 50], [30, 60]);
ugh.drawDiagonalStick([20, 50], [10, 60]);
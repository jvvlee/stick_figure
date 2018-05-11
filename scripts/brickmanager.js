class BrickManager {
  constructor() {
    this.allBricks = {}
    this.id = 0
    this.rows = 20
    this.columns = 9
    this.snapshot = {}
  }

  takeSnapshot() {
    this.snapshot = {
      ...this.allBricks
    }
  }

  addBrick(brick) {
    brick.id = this.id
    this.id += 1

    this.allBricks[brick.id] = brick
  }

  removeBrick(brick) {
    delete this.allBricks[brick.id]
  }

  get() {
    //todo not browser compatible
    return Object.values(this.allBricks);
  }

  reconstituteFromString(base64String, canvas) {
    const jsonString = atob(decodeURIComponent(base64String));
    const allBricksJson = JSON.parse(jsonString);

    allBricksJson.forEach(brickObj => {
      const jsonBrick = JSON.parse(brickObj);
      const brick = new Brick(jsonBrick.c, jsonBrick.r, canvas, jsonBrick.color);
      this.addBrick(brick);
    })
  }

  reconstitute() {
    this.allBricks = {
      ...this.snapshot
    }
  }

  serialize() {
    const serializedBricks = Object.values(this.allBricks).map(b => 
      b.serialize()
    )

    return encodeURIComponent(btoa(JSON.stringify(serializedBricks)));
  }
}
class BrickManager {
  constructor() {
    this.allBricks = {}
    this.id = 0
    this.rows = 20
    this.columns = 3
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

  reconstitute() {
    this.allBricks = {
      ...this.snapshot
    }
  }

  serialize() {
    return JSON.stringify(this.allBricks);
  }
}
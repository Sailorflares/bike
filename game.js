(() => {
  console.log("Hello BEST WOMAN IN THE WHOLE WORLD!");
  console.log("(who is Liz)");

  class Location {
    constructor(lane, col) {
      this.lane = lane;
      this.col = col;
    }

    equalTo(location) {
      if (this.lane !== location.lane) {
        return false;
      }
      if (this.col !== location.col) {
        return false;
      }
      return true;
    }
  }

  class GameGrid {
    constructor() {
      this.laneCount = 4;
      this.colCount = 8;
      this.bikeLocation = new Location(2,7);
      this.canvas = document.getElementById("gameGrid");
      this.ctx = this.canvas.getContext("2d");
    }

    // setBikeLocation(lane, col) {
      // this.bikeLocation = new Location(lane, col);
    // }

    drawGrid() {
      for (var i = 0; i < this.laneCount; i++) {
        for (var j = 0; j < this.colCount; j++) {
          this.drawCell(i,j);
        }
      }
    }

    drawCell(lane, col) {
      let loc = new Location(lane, col);
      if (loc.equalTo(this.bikeLocation)) {
        this.ctx.fillStyle = "#52144c";
        this.ctx.fillRect(100 * col, 100 * lane, 100, 100);
      } else {
        this.ctx.fillStyle = "#a9a9a9";
        this.ctx.fillRect(100 * col, 100 * lane, 100, 100);
      }
    }
  }

  let game = new GameGrid();
  game.drawGrid();
})();

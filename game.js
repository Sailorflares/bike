(() => {
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

    moveRight() {
      this.col++;
    }

    moveLeft() {
      this.col--;
    }

    moveUp() {
      this.lane--;
    }

    moveDown() {
      this.lane++;
    }
  }

  class GameGrid {
    constructor() {
      this.laneCount = 4;
      this.colCount = 8;
      this.bikeLocation = new Location(0, 0);
      this.canvas = document.getElementById("gameGrid");
      this.ctx = this.canvas.getContext("2d");
    }

    moveBikeRight() {
      this.bikeLocation.moveRight();
    }

    moveBikeLeft() {
      this.bikeLocation.moveLeft();
    }

    moveBikeUp() {
      this.bikeLocation.moveUp();
    }

    moveBikeDown() {
      this.bikeLocation.moveDown();
    }

    drawGrid() {
      for (var i = 0; i < this.laneCount; i++) {
        for (var j = 0; j < this.colCount; j++) {
          this.drawCell(i, j);
        }
      }
    }

    drawCell(lane, col) {
      const loc = new Location(lane, col);

      if (loc.equalTo(this.bikeLocation)) {
        this.ctx.fillStyle = "#52144c";
        this.ctx.fillRect(100 * col, 100 * lane, 100, 100);
      } else {
        this.ctx.fillStyle = "#a9a9a9";
        this.ctx.fillRect(100 * col, 100 * lane, 100, 100);
      }
    }
  }

  let handleKeydown = (e, g) => {
    if(e.key === 'ArrowRight') {
      g.moveBikeRight();
    } else if (e.key === 'ArrowLeft') {
      g.moveBikeLeft();
    } else if (e.key === 'ArrowUp') {
      g.moveBikeUp();
    } else if (e.key === 'ArrowDown') {
      g.moveBikeDown();
    } else {
      console.log('you suck');
    }
    
    g.drawGrid();
  }
  const game = new GameGrid();
  
  document.addEventListener('keydown', (e) => handleKeydown(e, game));

  game.drawGrid();
})();

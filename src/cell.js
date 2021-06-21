class Cell {
  
  position
  cell_heights
  water_composition

  constructor(position, heights) {
    this.position = position
    this.cell_heights = heights
    this.water_composition = {soil: 0, rock: 0}
  }

  display() {
    switch (this.maxheight(this.cell_heights)) {
      case "rock":
        return "grey"
      case "soil":
        return "brown"
      case "water":
        return "blue"
    }
      
  }

  maxheight(cell_heights) {
    if (cell_heights.rock_height === cell_heights.soil_height 
      && cell_heights.rock_height > cell_heights.water_height) {
        return "rock"
    }
    if (cell_heights.soil_height > cell_heights.water_height) {
      return "soil"
    }
    return "water"
  }
}

module.exports = Cell
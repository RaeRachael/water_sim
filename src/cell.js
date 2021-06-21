class Cell {
  
  water_composition

  constructor(water_height, rock_height, soil_height) {
    this.water_abs_height = rock_height + water_height
    this.water_composition = {soil: 0, rock: 0}
  }

  display() {
    switch (this.maxheight()) {
      case "rock":
        return "grey"
      case "soil":
        return "brown"
      case "water":
        return "blue"
    }
      
  }

  maxheight() {
    if (this.water_height < 0.01 && this.soil_height < 0.01) {
      return "rock"
    }
    if (cell_heights.soil_height > cell_heights.water_height) {
      return "soil"
    }
    return "water"
  }

  getSpeed(cell1, cell2) {
    var cell1_difference = (cell1.water_abs_height - this.water_abs_height) * this.passable(cell1)
    var cell2_difference = (cell2.water_abs_height - this.water_abs_height) * this.passable(cell2)
    return (cell1_difference - cell2_difference)/10
  }

  passable(cell) {
    if(cell.water_height < 0.01 && cell.rock_height > this.water_abs_height) {
      return 0
    }
    return 1
  }

  sedimentCollectDrop(xSpeed, ySpeed) {
    var speed = (xSpeed**2 + ySpeed**2)**0.5
    var carryCapacity = this.calculateCarryCapacity(speed)
    if (this.water_composition.rock < carryCapacity.rock_min) {
      this.rock_height -= (carryCapacity.rock_min - this.water_composition.rock) * this.water_height
      this.water_composition.rock = carryCapacity.rock_min
    }
    if (this.water_composition.soil < carryCapacity.soil_min) {
      change_soil_height -= (carryCapacity.rock_min - this.water_composition.rock) * this.water_height
      if(this.soil_height < change_soil_height) {
        this.soil_height = 0
        this.water_composition += change_soil_height/this.water_height
      } else {
        this.soil_height -= change_soil_height
        this.water_composition.rock = carryCapacity.rock_min
      }
    }
    if (this.water_composition.rock > carryCapacity.rock_max) {
      this.rock_height += (this.water_composition.rock - carryCapacity.rock_max) * this.water_height
      this.water_composition.rock = carryCapacity.rock_max
    }
    if (this.water_composition.soil > carryCapacity.soil_max) {
      this.soil_height += (this.water_composition.soil - carryCapacity.soil_max) * this.water_height
      this.water_composition.soil = carryCapacity.soil_max
    }
  }

  calculateCarryCapacity(speed) {
    return {rock_min: speed/100, rock_max: speed/50, soil_min: speed/20, soil_max: speed/10}
  }
}

module.exports = Cell
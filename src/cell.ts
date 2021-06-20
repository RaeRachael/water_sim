import { cell_heights, position } from "./helpers/types"

export class cell {
  
  position: position
  cell_heights: cell_heights
  water_composition: {soil: number, rock: number}

  constructor(position: position, heights: cell_heights) {
    this.position = position
    this.cell_heights = heights
  }
}
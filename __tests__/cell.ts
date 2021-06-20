import { cell } from '../src/cell'

describe("cell class", () => {
  it("should be creatable", () => {
    expect(new cell({x:1, y:1}, {rock_height: 0, soil_height: 0, water_height: 10})).toBeInstanceOf(cell)
  })
})
import { cell } from '../src/cell'

describe("cell class", () => {
  it("should be creatable", () => {
    expect(new cell({x:1, y:1}, {rock_height: 0, soil_height: 0, water_height: 10})).toBeInstanceOf(cell)
  })

  describe("display", () => {
    describe("should return the colour based on the max height", () => {
      it("should return blue for water", () => {
        var singleCell:any = new cell({x:1, y:1}, {rock_height: 0, soil_height: 0, water_height: 10})
        expect(singleCell.display()).toBe("blue")
      })
      it("should return brown for soil", () => {
        var singleCell:any = new cell({x:1, y:1}, {rock_height: 0, soil_height: 10, water_height: 0})
        expect(singleCell.display()).toBe("brown")
      })
      it("should return grey for rock", () => {
        var singleCell:any = new cell({x:1, y:1}, {rock_height: 10, soil_height: 10, water_height: 0})
        expect(singleCell.display()).toBe("grey")
      })
    })
  })
})
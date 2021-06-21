const Cell = require('./src/cell.js')

var cellMap = []
for(var i = 0; i < 601; i++) {
  cellMap[i] = []
  for(var j = 0; j < 401; j ++) {
    cellMap[i].push(new Cell({rock_height: i/60, soil_height: j/40, water_height: i * j /10000 }))
  }
}

const simultionBox = document.getElementById('simulation-box')

drawSimulation(simultionBox, cellMap)

function drawSimulation(simulationBox, cellMap) {
  for(var x = 0; x < cellMap.length -1; x++) {
    for(var y = 0; y < cellMap[x].length -1; y++) {
      displayOneTile(simulationBox, cellMap[x][y], x, y)
    }
  }
}

function displayOneTile(simulationBox, cell, x, y) {
  const cellDisplay = document.createElement('div')
  cellDisplay.style.gridRowStart = y+1
  cellDisplay.style.gridColumnStart = x+1
  cellDisplay.style.backgroundColor = cell.display()
  simulationBox.appendChild(cellDisplay)
}

function runSimulation(simultionBox, cellMap) {
  drawSimulation(simultionBox, cellMap)
  updateSimulation(cellMap)
}

function updateSimulation(cellMap) {
  for(var x = 1; x < cellMap.length -2; x++) {
    for(var y = 1; y < cellMap[x].length -2; y++) {
      var xSpeed = cellMap[x][y].getSpeed(cellMap[x-1][y], cellMap[x+1][y])
      var ySpeed = cellMap[x][y].getSpeed(cellMap[x][y-1], cellMap[x][y+1])
      cellMap[x][y].sedimentCollectDrop(xSpeed, ySpeed)
      cellMap[x][y].transport(cellMap[x-1][y], cellMap[x+1][y], xSpeed) // to code transport
      cellMap[x][y].transport(cellMap[x][y-1], cellMap[x][y+1], ySpeed)
      displayOneTile(simulationBox, cellMap[x][y], x, y)
    }
  }
}
const Cell = require('./src/cell.js')

var cellMap = []
for(var i = 0; i < 61; i++) {
  for(var j = 0; j < 41; j ++) {
    cellMap.push(new Cell({x: i, y: j}, {rock_height: i, soil_height: j/4, water_height: i * j /100 }))
  }
}

const simultionBox = document.getElementById('simulation-box')

drawSimulation(simultionBox, cellMap)

function drawSimulation(simulationBox, cellMap) {
  cellMap.forEach(cell => {
    displayOneTile(simulationBox, cell)
  });
}

function displayOneTile(simulationBox, cell) {
  const cellDisplay = document.createElement('div')
  cellDisplay.style.gridRowStart = cell.position.y
  cellDisplay.style.gridColumnStart = cell.position.x
  cellDisplay.style.backgroundColor = cell.display()
  simulationBox.appendChild(cellDisplay)
}
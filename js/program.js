// get the row and col section and generate btn
let mainRow = document.querySelector('#main-row')
let mainCol = document.querySelector('#main-col')
let generate = document.querySelector('#generate-btn')
// get section color element
let col1 = document.querySelector('#col-1')
let col2 = document.querySelector('#col-2')
let col3 = document.querySelector('#col-3')
let row1 = document.querySelector('#row-1')
let row2 = document.querySelector('#row-2')
let row3 = document.querySelector('#row-3')
let row4 = document.querySelector('#row-4')
let row5 = document.querySelector('#row-5')
// array of charactes
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"A","B","C","D","E","F"] // a=10 b=11 c=12 d=13 e=14 f=15

// hide the row default
mainRow.style.display = "none"


// Event Listener
generate.addEventListener('click', generateMain)


// Toggle to Column 3 section
function colButton() {
  // prevent to toggle if already selected
  if (mainCol.style.display === "none") {
    // toggle to col
    if (mainCol.style.display === "none") {
      mainCol.style.display = "flex"
      mainRow.style.display = "none"
    } else {
      mainCol.style.display = "none"
      mainRow.style.display = "flex"
    }
  }
}

// Toggle to Row 5 section
function rowButton() {
  // prevent to toggle if already selected
  if (mainRow.style.display === "none") {
    // toggle to row
    if (mainRow.style.display === "none") {
      mainRow.style.display = "flex"
      mainCol.style.display = "none"
    } else {
      mainRow.style.display = "none"
      mainCol.style.display = "flex"
    }
  }
}

// generate functions

function generateMain() {
  // calls the function for generating color
  generateCol1()
  generateCol2()
  generateCol3()
  generateRow1()
  generateRow2()
  generateRow3()
  generateRow4()
  generateRow5()
}

// generate column colors
function generateCol1() {
  let bg = ""
  for (let i = 0; i < 6; i++) {
    bg += hex[Math.floor(Math.random() * 16)]
  }
  col1.style.background = bg
  col1.textContent = bg
}
function generateCol2() {
  let bg = "#"
  for (let i = 0; i < 6; i++) {
    bg += hex[Math.floor(Math.random() * 16)]
  }
  col2.style.background = bg
  col2.textContent = bg
}
function generateCol3() {
  let bg = "#"
  for (let i = 0; i < 6; i++) {
    bg += hex[Math.floor(Math.random() * 16)]
  }
  col3.style.background = bg
  col3.textContent = bg
}

// generate row colors

function generateRow1() {
  let bg = "#"
  for (let i = 0; i < 6; i++) {
    bg += hex[Math.floor(Math.random() * 16)]
  }
  row1.style.background = bg
  row1.textContent = bg
}
function generateRow2() {
  let bg = "#"
  for (let i = 0; i < 6; i++) {
    bg += hex[Math.floor(Math.random() * 16)]
  }
  row2.style.background = bg
  row2.textContent = bg
}
function generateRow3() {
  let bg = "#"
  for (let i = 0; i < 6; i++) {
    bg += hex[Math.floor(Math.random() * 16)]
  }
  row3.style.background = bg
  row3.textContent = bg
}
function generateRow4() {
  let bg = "#"
  for (let i = 0; i < 6; i++) {
    bg += hex[Math.floor(Math.random() * 16)]
  }
  row4.style.background = bg
  row4.textContent = bg
}
function generateRow5() {
  let bg = "#"
  for (let i = 0; i < 6; i++) {
    bg += hex[Math.floor(Math.random() * 16)]
  }
  row5.style.background = bg
  row5.textContent = bg
}
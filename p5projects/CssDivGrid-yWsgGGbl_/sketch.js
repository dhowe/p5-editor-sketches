let container;

function setup() {
  noCanvas();
  container = document.getElementById("container");
  makeRows(16, 16);
}

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.className = "grid-item";
    cell.innerText = (c + 1);
    container.appendChild(cell);
  };
};


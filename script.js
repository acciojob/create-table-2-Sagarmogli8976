function createTable() {

  // prompts (must match exactly)
  let rn = prompt("Input number of rows");
  let cn = prompt("Input number of columns");

  rn = Number(rn);
  cn = Number(cn);

  // validation
  if (isNaN(rn) || isNaN(cn)) return;

  if (rn <= 0 || cn <= 0) {
    alert("Please enter positive numbers");
    return;
  }

  const table = document.getElementById("myTable");

  // clear old table
  table.innerHTML = "";

  // create rows
  for (let i = 0; i < rn; i++) {
    const tr = document.createElement("tr");

    // create columns
    for (let j = 0; j < cn; j++) {
      const td = document.createElement("td");
      td.textContent = `Row-${i} Column-${j}`;
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
}
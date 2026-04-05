function createTable() {

  // Prompt for rows
  let rn = prompt("Input number of rows");

  // Prompt for columns
  let cn = prompt("Input number of columns");

  // Convert to numbers
  rn = Number(rn);
  cn = Number(cn);

  // Validate input
  if (isNaN(rn) || isNaN(cn)) {
    return; // ignore invalid input
  }

  if (rn <= 0 || cn <= 0) {
    alert("Please enter positive numbers");
    return;
  }

  const table = document.getElementById("myTable");

  // Clear previous table
  table.innerHTML = "";

  // Create rows
  for (let i = 0; i < rn; i++) {
    const tr = document.createElement("tr");

    // Create columns
    for (let j = 0; j < cn; j++) {
      const td = document.createElement("td");
      td.textContent = `Row-${i} Column-${j}`;
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
}
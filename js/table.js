export default class Table {
  constructor() {
    this.tableElement = document.getElementById("data-table");
    this.tbodyElement = this.tableElement.querySelector("tbody");
  }

  addRow(data) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${data.sum}</td>
      <td>${new Date().toLocaleString()}</td>
      <td>${data.name}</td>
      <td>${data.email}</td>
    `;
    this.tbodyElement.appendChild(row);
  }
}

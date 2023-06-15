export default class Form {
  constructor() {
    this.formElement = document.getElementById("donationForm");
    this.inputNameElement = document.getElementById("inputName");
    this.inputEmailElement = document.getElementById("inputEmail");
    this.inputSumElement = document.getElementById("inputSum");
  }

  onSubmit(callback) {
    this.formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      const sum = this.inputSumElement.value;
      const name = this.inputNameElement.value;
      const email = this.inputEmailElement.value;
      const data = { sum, name, email };
      callback(data, sum);
      // this.inputSumElement.value = "";
    });
  }
}

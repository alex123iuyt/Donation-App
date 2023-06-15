export default class Modal {
  constructor() {
    this.modalElement = document.getElementById("modal");
    this.closeButton = this.modalElement.querySelector(".close");
    this.formElement = this.modalElement.querySelector("#userInfoForm");
    this.inputNameElement = this.formElement.querySelector("#inputName");
    this.inputEmailElement = this.formElement.querySelector("#inputEmail");
  }

  onSubmit(callback) {
    this.formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      const sum = document.getElementById("inputSum").value;
      // console.log("Value of inputSum:", sum);
      const name = this.inputNameElement.value;
      const email = this.inputEmailElement.value;
      const data = { sum, name, email };
      callback(data);
    });
  }

  open() {
    this.modalElement.style.visibility = "visible";
    this.modalElement.style.opacity = "1";
  }

  close() {
    this.modalElement.style.visibility = "hidden";
    this.modalElement.style.opacity = "0";
  }

  updateData(data) {
    this.inputNameElement.value = data.name;
    this.inputEmailElement.value = data.email;
  }

  onClose(callback) {
    this.modalElement.addEventListener("click", (event) => {
      if (
        event.target === this.modalElement ||
        event.target === this.closeButton
      ) {
        callback();
      }
    });
  }
}

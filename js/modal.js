export default class Modal {
  constructor() {
    this.modalElement = document.getElementById("modal");
    this.closeButton = this.modalElement.querySelector(".close");
  }

  open() {
    this.modalElement.style.visibility = "visible";
    this.modalElement.style.opacity = "1";
  }

  close() {
    this.modalElement.style.visibility = "hidden";
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

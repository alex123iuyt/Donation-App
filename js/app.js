import Modal from "./modal.js";
import Form from "./form.js";
import Table from "./table.js";

export default class App {
  constructor() {
    this.modal = new Modal();
    this.form = new Form();
    this.table = new Table();
  }

  init() {
    this.form.onSubmit(this.handleFormSubmit.bind(this));
    this.modal.onClose(this.handleModalClose.bind(this));
  }

  handleFormSubmit(data) {
    this.table.addRow(data);
    this.modal.open();
  }

  handleModalClose() {
    this.modal.close();
  }
}

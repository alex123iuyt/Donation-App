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
    this.modal.onSubmit(this.handleModalFormSubmit.bind(this));
    this.modal.onClose(this.handleModalClose.bind(this));
  }

  handleFormSubmit(data, sum) {
    this.modal.open();
    this.modal.updateData(data, sum);
  }

  handleModalFormSubmit(data) {
    this.table.addRow(data);
    this.modal.close();
  }
  handleModalClose() {
    this.modal.close();
  }
}

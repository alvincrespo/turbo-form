import { Controller } from "@hotwired/stimulus"
import { Form } from '../utils/form';

// Reference: 
//  - https://github.com/rails/rails/blob/main/actionview/app/assets/javascripts/rails-ujs/features/confirm.coffee
//  - https://github.com/rails/rails/commit/ad3a47759e67a411f3534309cdd704f12f6930a7#diff-ec293d06faf98af3b4e7c5523840874d21a93dbc9224920e1eb3d0404782371c
export class ConfirmController extends Controller {
  form: HTMLFormElement = document.createElement('form');

  get element(): HTMLLinkElement {
    return this.scope.element as HTMLLinkElement;
  }

  connect() {
    this.element.addEventListener('click', (event) => this.onClick(event));
  }

  onClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    const message = this.element.dataset.confirmMessage;

    if (confirm(message)) {
      this.continue();
    }
  }

  continue() {
    this.createForm().submitForm();
  }

  createForm() {
    this.form = Form.create({
      action: this.element.href,
      target: this.element.target,
      method: this.method
    });

    document.body.append(this.form);

    return this;
  }

  submitForm() {
    (this.form.querySelector('[type=submit]') as HTMLInputElement).click();
  }

  get method() {
    return this.element.dataset.method || 'delete';
  }
}
